import { useEffect, useState } from 'react';

const useEquation = (problemLeft:number, problemRight:number, goal:number, tilesListLength:number) => {
    const [left, setLeft] = useState(problemLeft);
    const [right, setRight] = useState(problemRight);
    const [isCorrect, setIsCorrect] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const [allTilesClicked, setAllTilesClicked] = useState(false);
    const [undo, setUndo] = useState<HTMLButtonElement[]>([]);

    // Check puzzle solve
    useEffect( () => {
        if( (left === goal) && (right === goal) ){
            setIsCorrect(true);
            setIsActive(false);
        }
    }, [left, right]);

    //Timer
    useEffect(() => {
        let timeOutId: number = 0;
        if( isActive ){
            timeOutId = setTimeout( () => {
                setSeconds((seconds:number) => seconds + 1);
            }, 1000);
        }else if(!isActive && seconds != 0){ //Prevent prev interval from continuing after solve
            clearTimeout(timeOutId);
        }

        return () => clearTimeout(timeOutId);
    }, [isActive, seconds]);

    //Tile click
    function handleTileClick(tile:any, btn:HTMLButtonElement){
        setUndo([...undo, btn]);
        btn.disabled = true;
        setLeft(handleMath(left, tile.leftOp.op, tile.leftOp.value));
        setRight(handleMath(right, tile.rightOp.op, tile.rightOp.value));
        if(tilesListLength-1 == undo.length){
            setAllTilesClicked(true);
        }
    }

    //undo
    function handleUndo(){
        //Reset Values
        setLeft(problemLeft);
        setRight(problemRight);

        let tempUndo = [...undo];
        for( let i = tempUndo.length; i > 0; i-- ){
            let prevStateBtn = tempUndo.pop();
            prevStateBtn!.disabled = false;
        }
        setUndo([]);
        setAllTilesClicked(false);
    }
    
    return {left, right, isCorrect, seconds, handleTileClick, handleUndo, allTilesClicked};
}

function handleMath( num: number, op: string, value: number){
    switch(op){
        case '+':
            return num + value;
        case '-':
            return num - value;
        case '*':
            return num * value;
        case '÷':
            return num / value;
        default:
            return value;
    }
}
 
export default useEquation;
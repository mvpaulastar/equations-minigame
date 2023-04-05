import { ButtonHTMLAttributes, useEffect, useState } from 'react';
const useEquation = (problemLeft:number, problemRight:number, goal:number) => {
    const [left, setLeft] = useState(problemLeft);
    const [right, setRight] = useState(problemRight);
    const [isCorrect, setIsCorrect] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);

    //Check puzzle solve.
    useEffect( () => {
        if( (left === goal) && (right === goal) ){
            setIsCorrect(true);
            setIsActive(false);
        }
    }, [left, right]);

    //Timer
    useEffect(() => {
        let interval: number = 0;
        if (isActive) {
          interval = setInterval(() => {
            setSeconds((seconds: number) => seconds + 1);
          }, 1000);
        } else if (!isActive && seconds !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, seconds]);

      //Tile click
    function handleTileClick(tile:any, btn:HTMLButtonElement){
        btn.disabled = true;
        setLeft(handleMath(left, tile.leftOp.op, tile.leftOp.value));
        setRight(handleMath(right, tile.rightOp.op, tile.rightOp.value));
    }

    
    return {left, right, isCorrect, seconds, handleTileClick};
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
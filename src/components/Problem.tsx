import Timer from "./Timer";
import './Problem.css';
import {useState, useEffect} from "react";

const problems = ({problem}:{problem:{
    id: number,
    left: number,
    right: number,
    tiles: {
        leftOp: {
            op: string,
            value: number
        },
        rightOp:{
            op: string,
            value: number
        }
    }[]
}}) => {    
    const [left, setLeft] = useState(problem.left);
    const [right, setRight] = useState(problem.right);
    const [isCorrect, setIsCorrect] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);

    function handleTileClick(tile:any){
        setLeft(handleMath(left, tile.leftOp.op, tile.leftOp.value));
        setRight(handleMath(right, tile.rightOp.op, tile.rightOp.value));
    }

    useEffect( () => {
        if( left === right ){
            setIsCorrect(true);
            setIsActive(false);
        }
    }, [left, right]);

    if( isCorrect ){
        return (
            <div>
                <h1>You took {seconds} seconds to solve this.</h1>
            </div>
        );
    }


    return ( 
        <div className="problem">
            <Timer seconds={seconds} setSeconds={setSeconds} isActive = {isActive} />
            <h1>Equalize</h1>
            <h1>{left} = {right}</h1>
            <div className="tilesList">
                {problem.tiles.map( (tile, index) => (
                    <div className="tile" key={index} onClick={(e) => handleTileClick(tile)}>
                        <h2>
                            {`${tile.leftOp.op}${tile.leftOp.value} `} 
                            /
                            {` ${tile.rightOp.op}${tile.rightOp.value}`}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
     );
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
 
export default problems;
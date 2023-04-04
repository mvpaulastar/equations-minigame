import Timer from "./Timer";
import Tile from "./Tile";
import useEquations from "../hooks/useEquations";
import './Problem.css';
import { useEffect, useState } from "react";

const problems = ({problem}:{problem:{
    id: number,
    left: number,
    right: number,
    goal: number,
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
    const {left, right, isCorrect, seconds, handleTileClick} = useEquations(problem.left, problem.right, problem.goal);
    const [randomReady, setRandomReady] = useState(false);

    //shuffle tiles
    useEffect( () => {
        const shuffle = (array:{}[]) => {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              const temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
        }
        shuffle(problem.tiles);
        setRandomReady(true);
    }, []);

    if( isCorrect ){
        return (
            <div>
                <h1>You took {seconds} seconds to solve this.</h1>
            </div>
        );
    }

    return (      
        <>
        { randomReady &&
        <div className="problem">
            <Timer seconds={seconds}/>
            <h1>Goal: {problem.goal}</h1>
            <h1>{left} = {right}</h1>
            <div className="tilesList">
                {problem.tiles.map( (tile) => (
                    <Tile tile={tile} handleTileClick={handleTileClick} />
                ))}
            </div>
        </div>}
        </>
     );
}
 
export default problems;
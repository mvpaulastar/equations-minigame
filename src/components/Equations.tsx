import Timer from "./Timer";
import Tile from "./Tile";
import Score from "./Score";
import useEquations from "../hooks/useEquations";
import './Equations.css';
import { useEffect, useRef, useState } from "react";
import { Problem } from "../classes/Problem";

const problems = ({problem}:{problem:Problem}) => {    
    const {left, right, isCorrect, seconds, handleTileClick, handleUndo, allTilesClicked} = useEquations(problem.left, problem.right, problem.goal, problem.tiles.length);
    const [randomReady, setRandomReady] = useState(false);
    const problemNumbers = useRef<HTMLHeadingElement>(null);

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

    if(problemNumbers.current){
        if(allTilesClicked){
            problemNumbers.current!.classList.add('failed');
        }
        else{
            problemNumbers.current!.classList.remove('failed');
        }
    }

    if( isCorrect ){
        return (
            <Score seconds={seconds} />
        );
    }

    return (      
        <>
        { randomReady &&
        <div className="problem">
            <div className='stats'>
                <Timer seconds={seconds}/>
                <div>
                    <h1>Goal: {problem.goal}</h1>
                </div>
            </div>
            <hr></hr>
            <h1 ref={problemNumbers}>{left} = {right}</h1>
            <div className="tilesList">
                {problem.tiles.map( (tile, index) => (
                    <Tile tile={tile} key={index} handleTileClick={handleTileClick} />
                ))}
            </div>
            <button className="undo" onClick={handleUndo}>Undo</button>
        </div>}
        </>
     );
}
 
export default problems;
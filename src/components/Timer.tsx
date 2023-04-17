import { useEffect, useRef } from "react";
import './Timer.css';

const Timer = ({seconds}:{seconds:number}) => {

    //For timer animation
    const timer = useRef<HTMLDivElement>(null);

    if( ((seconds % 10) == 0) && seconds != 0){
        timer.current!.classList.add('timer-animation');
        
        setTimeout(()=>{
            timer.current!.classList.remove('timer-animation');
        },1000);
    }

    return (    
        <>
            <div className="timer">
                <h1>Your Time: &nbsp;</h1>
                <h1 ref={timer}>{seconds}s</h1>
            </div>
        </>   
  );
}
 
export default Timer;
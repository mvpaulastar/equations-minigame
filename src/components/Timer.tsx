import React, { useEffect } from 'react';
const Timer = ({seconds, setSeconds, isActive}:{seconds:number, setSeconds:Function, isActive:boolean}) => {
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

    return (       
        <div className="timer">
            {seconds}s
        </div>
  );
}
 
export default Timer;
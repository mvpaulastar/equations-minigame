const Timer = ({seconds}:{seconds:number}) => {

    return (       
        <div className="timer">
            {seconds}s
        </div>
  );
}
 
export default Timer;
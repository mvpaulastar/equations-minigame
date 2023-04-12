const Score = ({seconds}:{seconds:number}) => {
    return ( 
        <div>
            <h1>You took <span>{seconds}</span> seconds to solve this.</h1>
        </div>
     );
}
 
export default Score;

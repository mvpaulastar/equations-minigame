const Tile = ({tile, handleTileClick}:{tile:any, handleTileClick: Function}) => {
    return ( 
        <button className="tile" onClick={(e) => handleTileClick(tile, e.target)}>
                {`${tile.leftOp.op}${tile.leftOp.value} `} 
                /
                {` ${tile.rightOp.op}${tile.rightOp.value}`}
        </button>
     );
}
 
export default Tile;
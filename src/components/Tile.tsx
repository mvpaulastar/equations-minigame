const Tile = ({tile, handleTileClick}:{tile:any, handleTileClick: Function}) => {
    return ( 
        <div className="tile" onClick={(e) => handleTileClick(tile)}>
            <h2>
                {`${tile.leftOp.op}${tile.leftOp.value} `} 
                /
                {` ${tile.rightOp.op}${tile.rightOp.value}`}
            </h2>
        </div>
     );
}
 
export default Tile;
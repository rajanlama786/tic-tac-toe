const Game = () => {

    const Board = () => {
    const Square = (props) => {
    return(
        <div className="square">
            {props.value}
        </div>
        )
    }

    const renderSquare = () => {
        return(
            <Square value = "0"/>
        );
    }
    return(
        <div className='board'>
            My Board
            <div className='board-row'>
                {renderSquare}
                {renderSquare}
                {renderSquare}
            </div>
            <div className='board-row'>
                {renderSquare}
                {renderSquare}
                {renderSquare}
            </div>
            <div className='board-row'>
                {renderSquare}
                {renderSquare}
                {renderSquare}
            </div>
        </div>
        )
    }

    return(
    <div className='game'>
        <div className='game-title'>
            Tic Tac Toe
        </div>
        <Board />
    </div>
    )
}

export default Game;
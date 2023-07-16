import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

const Game = () => {
   


    const Board = () => {

      const initialSquares = Array(9).fill(null);
      
      const [squares, setSquares ]= useState( initialSquares );

      const [xIsNext, setXIsNext ]= useState( true );

      const handleClickEvent = (i) => {

        //1. Makes a copy of squares state array
        const newSquares = [...squares];  

        // check winner is selected
        // check if the bos is already checked
        const winnerDecleared = Boolean(CalculateWinners(newSquares));
        const squareFilled = Boolean( squares[i]);
        
        if( winnerDecleared || squareFilled ){
          return;
        }

        //2. Mutate the copy, setting the i-th element to 'x'
        newSquares[i] = xIsNext ? 'X' : 'O';

        //3. call the setSquares function with the mutated copy
        setSquares(newSquares);
        setXIsNext( !xIsNext );
      }
      const Square = (props) => {
        const [value, setValue] = useState(null);
        return(
              <button 
                className="square" 
                onClick={props.onClickEvent}
                >
                {props.value}
              </button>
            )
      }
      
      const renderSquare = (i) => {
          return(
            <Square 
              value = {squares[i]}
              onClickEvent={()=>handleClickEvent(i) }
            />
          );
      }

      const CalculateWinners = (squares) => {
        const lines = [
          [0,1,2],[3,4,5],[6,7,8], // rows
          [0,3,6],[1,4,7],[2,5,8], // COlumn
          [0,4,8],[2,4,6] // diagonal
        ];

        for( let line of lines){
          const [a,b,c] = line;

          if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
          {
            return squares[a];
          }
        }
      }

      const winner = CalculateWinners(squares);

      const Status = winner ? 
        `Winner: ${winner}`:
        `NextPlayer: ${xIsNext ? 'X' : '0' }`;

      

      return(
          <div className='board'>
              My Board

              <div className='status'>{Status}</div>
              <div className='board-row'>
                  {renderSquare(0)}
                  {renderSquare(1)}
                  {renderSquare(2)}
              </div>
              <div className='board-row'>
                  {renderSquare(3)}
                  {renderSquare(4)}
                  {renderSquare(5)}
              </div>
              <div className='board-row'>
                  {renderSquare(6)}
                  {renderSquare(7)}
                  {renderSquare(8)}
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

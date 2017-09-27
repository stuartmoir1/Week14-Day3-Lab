import React from 'react';
import GameSquare from "../components/GameSquare" 

class GameBoard extends React.Component {
  constructor(props){
    super(props),
    this.state = {

    }
  }

  onSquareSelect(string){
    console.log('onSquareSelect...')
    console.log('Success:', string)
  }

  render(){
    console.log('GameBoard, render...')
    return (
      <div>
        <h2>GameBoard</h2>
        <GameSquare onSquareSelect={this.onSquareSelect.bind(this)}/>
      </div>
    )
  }
}

export default GameBoard;

// setupBoard(){
//   var table = document.getElementById('board')
//   if (table){
//     console.log(table.rows[1])
//     console.log(table.rows[0].cells[0])
//     for (var i = 0; i < table.rows.length; i++){
//       table.rows[i].onclick = () => {
//         // console.log(table)
//         console.log('clicked:', table.rows[i])
//         // table.rows[i] = 'X'
//       }
//     }
//   }
// }
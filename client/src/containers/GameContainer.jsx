import React from 'react';
import GameBoard from "../components/GameBoard"

class GameContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    console.log('GaneContainer, render...')
    return (
      <div>
        <h1>GameContainer</h1>
          <GameBoard />
      </div>
    )
  }
}

export default GameContainer;
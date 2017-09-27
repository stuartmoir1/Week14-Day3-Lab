import React from 'react';

class GameSquare extends React.Component {
  
  constructor(props){
    super(props),
    this.state = {
      selectedSquare: null
    }
  }

  handleClick(event){
    console.log('clicked...')
    this.setState({selectedSquare: 'X'})
    this.props.onSquareSelect('X')
  }

  render(){
    console.log('GameSquare, render...')
    return (
      <div id="square" className="square" onClick={this.handleClick.bind(this)}>
        {this.state.selectedSquare}
      </div>
    )
  }
}

export default GameSquare;
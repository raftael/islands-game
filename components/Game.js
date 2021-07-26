import React, { Component } from 'react'
import Grid from './Grid'

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.updateGame = this.updateGame.bind(this);
    this.state = {
      width: 5, // initial value 
      height: 5 // initial value
    }
  }

  updateGame(x, y) {
    this.setState({
      width: x,
      height: y
    });
  }

  render() {
    const { width, height } = this.state;

    return (
      <div>
        <Grid width={width} height={height} updateGame={this.updateGame} />
      </div>
    );
  }
}
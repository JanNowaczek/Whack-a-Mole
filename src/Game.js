import React, { Component } from 'react'

import Whole from './Whole'
import GameBoard from './GameBoard'
import Button from '@material-ui/core/Button'

class Game extends Component {
  state = {
    wholes: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    isGameStarted: false,
    isGameFinished: false,
    randomWhole: null,
    score: 0,
    isLevel2: false
  }

  randomWhole = () => {
    const randomRowIndex = Math.floor(Math.random() * this.state.wholes.length)
    const randomRowArray = this.state.wholes[randomRowIndex]
    const randomWholeIndex = Math.floor(Math.random() * randomRowArray.length)
    const randomWhole = this.state.wholes[randomRowIndex][randomWholeIndex]
    if (randomWhole === this.state.randomWhole) {
      return this.randomWhole()
    }
    this.setState({ randomWhole: randomWhole })
  }

  startGame = () => {
    if (this.state.isGameStarted) return
    this.setState({
      isGameStarted: true,
      isGameFinished: false,
      score: 0
    })

    this.startLevel1()
    this.endGame()
  }

  startLevel1 = () => {
    const showMole = setInterval(
     () => {
        this.checkLevel1()
        this.randomWhole()
     },
     1000
    )
    this.setState({ interval: showMole })
  }

  checkLevel = () => {
    if (this.state.score >= 3) {
        clearInterval(this.state.interval)
        this.startLevel2()
    }
  }

  startLevel2 = () => {
    const showMole = setInterval(
      this.randomWhole,
      500
    )
    this.UNSAFE_componentWillMount.setState({ interval: showMole })
  }

  endGame = () => {
    setTimeout(
      () => {
        clearInterval(this.state.interval)
        this.setState({
          isGameStarted: false,
          randomWhole: null,
          isGameFinished: true
        })
      },
      10000
    )
  }
  countScores = (userWhole) => {
    if (this.state.randomWhole === userWhole) {
      this.setState({ score: this.state.score + 1 })
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Whack a mole</h1>
        <h2>Score: {this.state.score}</h2>
          <GameBoard
					wholes={this.state.wholes}
					countScores={this.countScores}
					className={'board'}
            randomWhole={this.state.randomWhole}
          />
        <Button
          variant={'contained'}
          onClick={this.startGame}
        >
          Play
        </Button>
      </div>
    )
  }
}

export default Game

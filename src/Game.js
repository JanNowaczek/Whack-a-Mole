import React, { Component } from 'react'

import Whole from './Whole'
import Button from '@material-ui/core/Button'

class Game extends Component {
  state = {
    wholes: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    isGameStarted: false,
    randomWhole: null,
    score: 0
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
		this.setState({ isGameStarted: true })
		this.showMole()
	}

	showMole = () => {
		const showMole = setInterval(
			this.randomWhole,
			500
		)
		this.endGame(showMole)
	}

	endGame = (showMole) => {
		setTimeout(
			() => {
				clearInterval(showMole)
				this.setState({ isGameStarted: false, randomWhole: null })
			},
			5000
		)
	}

	render() {
		console.log(this.state.isGameStarted)
		return (
			<div>
				<h2>Whack a mole</h2>
				<div
					className={'board'}
				>
					{
						this.state.wholes.map(
							(row, rowIndex, array) => (
								<div
									key={'row' + rowIndex}
									className={'board-row'}
								>
									{
										row.map(
											(whole, wholeIndex) => (
												<Whole
													key={wholeIndex}
													className={
														this.state.randomWhole === array[rowIndex][wholeIndex] ?
															'whole active'
															:
															'whole'
													}
												/>
											)
										)
									}
								</div>
							)
						)
					}
				</div>
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

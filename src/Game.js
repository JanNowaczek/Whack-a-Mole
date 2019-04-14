import React, { Component } from 'react'

import Whole from './Whole'
import Button from '@material-ui/core/Button'

class Game extends Component {
  state = {
    wholes: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    isGameStarted: false,
    score: 0
  }

  render() {
    return (
      <div>
        <h2>Whack a Mole</h2>
        <div
          className={'board'}
        >
          {
            this.state.wholes.map(
              (row, index) => (
                <div
                  key={'row' + index}
                  className={'board-row'}
                >
                  {
                    row.map(
                      (whole, index) => (
                        <Whole
                          key={index}
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
        >
          Play
        </Button>
      </div>
    )
  }
}

export default Game

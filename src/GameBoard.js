import React from 'react'

import Whole from './Whole'

const GameBoard = (props) => {
    return (
        <div
            className={props.className}
        >
            {
                props.wholes.map(
                    (row, rowIndex, array) => (
                        <div
                            key={'row' + rowIndex}
                            className={'board-row'}
                        >
                            {
                                row.map(
                                    (el, wholeIndex) => {
                                        const whole = array[rowIndex][wholeIndex]
                                        return (
                                            <Whole
                                            onUserClick={() => props.onUserClick(whole)}
                                                key={wholeIndex}
                                                className={
                                                    props.randomWhole === whole ?
                                                        'whole active'
                                                        :
                                                        'whole'
                                                }
                                            />
                                        )
                                    }
                                )
                            }
                        </div>
                    )
                )
            }
        </div>
    )
}

export default GameBoard
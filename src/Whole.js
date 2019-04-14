import React from 'react'

const Whole = (props) => {
    return (
        <div 
            onClick={props.countScores}
            className={props.className}
        >
        </div>
    )
}

export default Whole
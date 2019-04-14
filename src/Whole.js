import React from 'react'

const Whole = (props) => {
    return (
        <div 
            onClick={props.onUserClick}
            className={props.className}
        >
        </div>
    )
}

export default Whole
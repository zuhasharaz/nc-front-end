import React from 'react'

const Voter = ({votes, onDownVote, onUpVote}) => (
    <div>
        <button onClick={onDownVote}>-</button>
        <span>{votes}</span>
        <button onClick={onUpVote}>+</button>
    </div>
)

export default Voter
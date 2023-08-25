import React from 'react'

const Quote = ({ phrase }) => {
    return (
        <div className='content__phrase'>
            <p className='phrase'>“{phrase.phrase}”</p>
        </div>
    )
}

export default Quote
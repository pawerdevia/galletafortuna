import React from 'react'
import getRandomElemArray from '../utils/getRandomElemArray'




const BtnQuote = ({setQuote,setBackground ,phrases, images }) => {

    const handleRandomPhrase = () => {
        setQuote(getRandomElemArray(phrases))
        setBackground(getRandomElemArray(images).image)
    }
    return (
        <button className='btn__quote' onClick={handleRandomPhrase}>Ver otro</button>
    )
}

export default BtnQuote
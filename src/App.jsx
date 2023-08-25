import { useState } from 'react';
import './App.css'
import BtnQuote from './components/BtnQuote';
import Quote from './components/Quote';
import getRandomElemArray from './utils/getRandomElemArray';
import images from './utils/getRandomImage';
import phrases from './utils/phrases.json';


function App() {
  
const imageRandom = getRandomElemArray(images).image;
const phraseRandom = getRandomElemArray(phrases)

//Estado inicial del background
const [background, setBackground] = useState(imageRandom)

//Estado inicial de la frase random
  const [quote, setQuote] = useState(phraseRandom)

  return (
    <div className='principal' style={{ backgroundImage: `url(${background})` }}>
      <h1 className='principal__tittle'>GALLETA DE LA FORTUNA</h1>
      <Quote
      phrase = {quote}
      />
      <BtnQuote
      setQuote={setQuote}
      phrases = {phrases}
      images = {images}
      setBackground = {setBackground}
      />
    </div>
  )
}

export default App

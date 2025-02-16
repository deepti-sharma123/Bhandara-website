import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Banner from './component/Banner'
import Card from './component/Card'
import Bhandara from './component/Bhandara'
import Huminity from './component/Huminity'
import Ourmission from './component/Ourmission'
import Bhandaracard from './component/Bhandaracard'
import Volenteers from './component/Volenteers'
import Media from './component/Media'
import Review from './component/Review'
import Download from './component/Download'
import Last from './component/Last'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Banner/>
    <Card/>
    <Bhandara/>
    <Huminity/>
    <Ourmission/>
    <Bhandaracard/>
    <Volenteers/>
    <Media/>
    <Review/>
    <Download/>
    <Last/>
    </>
  )

      
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import StatsBar from './components/StatsBar'
import Footer from './components/Footer'
import BottomTab from './components/BottomTab'

function App() {
  return (
    <div>
      <Navbar/>
      <main className='pt-20'>
        <HeroSlider/>
        <StatsBar/>
        <Footer/>
        <BottomTab/>
      </main>
      
    </div>
  )
}

export default App


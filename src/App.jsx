import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Tarifs from './components/Tarifs/Tarifs'
import Used from './components/Used/Used'
import Level from './components/Level/Level'



const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <Section1 />
    <Section2 />
    <Tarifs />
    <Used />
    <Level />
    </>
  )
}

export default App
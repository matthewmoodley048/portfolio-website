import React from 'react'
import '../styles/App.css'
import Intro from './home/intro'
import Motivation from './home/motivation.jsx'
import About from './home/about.jsx'

export default function Home() {
  return (
    <React.Fragment>
      <Intro />
      <Motivation />
      <About />
    </React.Fragment>
  )
}

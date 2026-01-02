import React from 'react'
import Navbar from '../components/layout/landing/Navbar'
import Hero from '../components/layout/landing/Hero'
import Contact from '../components/layout/landing/Contact'
import Questions from '../components/layout/landing/Questions'
import HowItWorks from '../components/layout/landing/HowItWork'
import About from '../components/layout/landing/About'
import KeyFeature from '../components/layout/landing/KeyFeature'

const Landing = () => {
  return (
    <>
    <Navbar />
    <Hero/>
    <About/>
    <KeyFeature/>
    <HowItWorks/>
    <Questions/>
    <Contact/>
    
    </>
  )
}

export default Landing
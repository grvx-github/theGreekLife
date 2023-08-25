"use client"

import localFont from 'next/font/local'

import Hero from './components/Hero'
import Services from './components/Services'
import BoatSection from './components/BoatSection'
import Filming from './components/Filming'
import Events from './components/Events'
import Footer from './components/Footer'


const helNeue = localFont({
  src: [
    {
      path: '../../fonts/helvetica-neue/HelveticaNeueUltraLight.ttf',
      weight: '300'
    },
    {
      path: '../../fonts/helvetica-neue/HelveticaNeue-Medium.otf',
      weight: '400'
    }
  ]
})

const helNow = localFont({
  src: [
    {
      path: '../../fonts/helveticaNow/HelveticaNowDisplay-ExtLt.woff',
      weight: '200'
    },

    {
      path: '../../fonts/helveticaNow/HelveticaNowDisplay-Light.woff',
      weight: '300'
    },
    {
      path: '../../fonts/helveticaNow/HelveticaNowDisplay-Medium.woff',
      weight: '400'
    }
  ]
})


export default function Home() {
  return (
    <div className={`${helNeue.className} ${helNow.className}`}>
      <Hero />
      <Services />
      <BoatSection />
      <Filming />
      <Events />
      <Footer />
    </div>
  )
}

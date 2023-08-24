"use client"

import Hero from './components/Hero'
import Services from './components/Services'
import BoatSection from './components/BoatSection'
import Filming from './components/Filming'
import Events from './components/Events'
import PoolImg from './components/PoolImg'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <BoatSection />
      <Filming />
      <Events />
      <PoolImg />
      <Booking />
      <Footer />
    </div>
  )
}

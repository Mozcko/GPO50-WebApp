import React from 'react'
import { Toaster } from 'react-hot-toast'

import { 
    Hero,
    Secciones,
    Encuentranos,
    Conocenos,
    AboutUs,
    Contacto
} from '../components'

export function Landing() {
  return (
    <div>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero />
      </div>
        <Secciones />
        <Conocenos />
        <AboutUs />
        <Encuentranos />
        <Contacto />
    </div>
  )
}
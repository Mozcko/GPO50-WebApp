import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Tilt } from 'react-tilt'

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
        <Hero />
        <Secciones />
        <Conocenos />
        <AboutUs />
        <Encuentranos />
        <Contacto />
    </div>
  )
}
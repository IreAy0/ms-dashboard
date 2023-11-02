"use client"

import Image from 'next/image'
import Home from './Home'
import { AppProvider } from './store'

export default function App() {
  return (
    <AppProvider>
      <Home />
   </AppProvider>
  )
}

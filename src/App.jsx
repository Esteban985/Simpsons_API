import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Login } from './pages/login'
import { SimpsonProvider } from './context/simpsonContext'
import { Home } from './pages/Home'
import { Personajes } from './pages/personajes'
import { DetallesPersonajes } from './pages/DetallesPersonajes'
import { Toaster } from 'sileo'
import { Favoritos } from './pages/Favoritos'

function App() {

  return (
    <>
      <Toaster position='top-center' />
      <BrowserRouter>
        <SimpsonProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/personajes' element={<Personajes />} />
            <Route path='/detalles/:id' element={<DetallesPersonajes />} />
            <Route path='/favoritos' element={<Favoritos />} />
          </Routes>
        </SimpsonProvider>
      </BrowserRouter>
    </>
  )
}

export default App

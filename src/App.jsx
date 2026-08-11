import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Login } from './pages/login'
import { SimpsonProvider } from './context/simpsonContext'
import { Home } from './pages/Home'
import { Personajes } from './pages/personajes'
import { DetallesPersonajes } from './pages/DetallesPersonajes'

function App() {

  return (
    <>
      <BrowserRouter>
        <SimpsonProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/personajes' element={<Personajes />} />
            <Route path='/detalles/:id' element={<DetallesPersonajes />} />
            <Route path='/favoritos' element={<h1>Favoritos</h1>} />
          </Routes>
        </SimpsonProvider>
      </BrowserRouter>
    </>
  )
}

export default App

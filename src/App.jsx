import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './components/Inicio'
import './App.css'



function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Inicio/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

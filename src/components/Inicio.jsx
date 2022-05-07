import { useState } from 'react'
import NavBar from './NavBar'
import Perfil from './Perfil'

function Inicio() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Perfil/>
      </header>
      <main>

      </main>
    </div>
  )
}

export default Inicio
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import viteLogo from '/vite.svg'
import barras from './img/barras.png'
import github from './img/gato_molusco.png'
import linkedin from './img/linkedinho.png'
import lucas from './img/gptdizsereu.png'
import lucas_laranja from './img/bo_ver.png'
import './App.scss'

function App() {

  return (
    <div className="img_fundo">
      <div className="topo_logo">
        <div className="lado_esquerdo">
          <img src={barras} />
        </div>
        <div className="lado_direito">
          <h1>SOBRE MIM</h1>
          <h1>TECNOLOGIAS</h1>
          <h1>PROJETOS</h1>
          <h1>CONTATO</h1>
        </div>
      </div>

      <div className="foto_apresentacao">
        <div className="lado_esquerdo">
          <h1>LUCAS VIANA</h1>
          <h2>DESENVOLVEDOR FRONT-END</h2>
          <button><h1>BAIXAR CV</h1></button>
          <div className="img_links">
            <div className="git">
              <img src={github} />
            </div>
            <div className="linkedin">
              <img src={linkedin} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App

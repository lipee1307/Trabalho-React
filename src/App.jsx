import { useState } from 'react'
import './App.css'
import minhaImagem from './assets/logo.png'
import meuFundo from './assets/fundo.jpg'

export default function App() {
  return (
    <>
    <main>
      <section className = "primeiro">
      <header>
        <img src={minhaImagem} alt="" />
        <div className="titulo">SQLite</div>
        <nav>
            <a href="https://sqlite.org/">Home</a>
            <a href="https://sqlite.org/about.html">About</a>
            <a href="https://sqlite.org/docs.html">Documentation</a>
        </nav>
      </header>
      <h1>Poder SQL sem a complexidade <br />de um servidor</h1>
      <p>O banco de dados completo que cabe <br />dentro de um único arquivo</p>
      <button></button>
      </section>
      <section className = "segundo">

      </section>
      <img src={meuFundo} alt="" />      
    </main>
    </>
  )
}

/*http://dataswift.devfatec-campinas.com.br/pages/dashboard_motorista.html*/


import { useState } from "react";

import Formulario from "./components/Formulario";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App() {
  return (
    <>
      <header className="container">
        <h1>Faça o calculo do seu IMC</h1>
      </header>


        <Formulario />


      {/* <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )} */}

    </>
  )
}

export default App

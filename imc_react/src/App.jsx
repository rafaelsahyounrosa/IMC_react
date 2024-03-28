import { useState } from "react";

import Formulario from "./components/Formulario";
// import Perfil from "./components/Perfil";
// import ReposList from "./components/ReposList";

function App() {
  return (
    <>
      <header className="container">
        <h1>Faça o calculo do seu IMC</h1>
      </header>
      <div className="form">
        <Formulario />
      </div>
    </>
  )
}

export default App

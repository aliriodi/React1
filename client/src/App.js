//esta librerias son de REACT para poder sacar los datos del BACK END
import { useState, useEffect } from "react";
import './App.css'

function App() {
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `http://localhost:3001/db`  )
      .then(response => response.json())
      .catch((error) => console.log(error));
              console.log(response)
    }
    const Cards =getData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      <nav>
  <a href="#page-1">Block1</a>
  <a href="#page-2">Block2</a>
  <a href="#page-3">Block3</a>
</nav>
<div className="scroll-container">
  <div className="scroll-page" id="page-1">
    {}
    {}
  1
  </div>
  <div className="scroll-page" id="page-2">2</div>
  <div className="scroll-page" id="page-3">3</div>
</div>

      </header>
    </div>
  );
}

export default App;

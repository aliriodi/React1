//esta librerias son de REACT para poder sacar los datos del BACK END
//useState es para poder tomar la respuesta del fetch a renderizrlo graficarlo
// el useEffect se usa para poder aplicar el fetch y entrar al backend
//el fetch es para traer datos del backend
import { useState, useEffect } from "react";
import './App.css'

function App() {
  //esta declaracion el array es el primero data es la variable que deseamos usar
  //el setData es para poder asignar el valor de data, el useState es un estado local
  // que te permite asignar variablkes del back para usarlo en todo el componente llamado
  //App
  const [data, setData] = useState();

  useEffect(() => {
    //el async se usa porque es una promesa donde debes esperar la respuesta
    async function getData() {
      // el await es para que espere que responda, los .then
      // es que va a tomar las respuestas y tomar acciones de las respuestas
      const response = await fetch(`http://localhost:3001/db`  )
      .then(response => response.json())
      .catch((error) => console.log(error));
      console.log(response);
     
        setData(response);
    }
    getData()

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
  <div className="scroll-page0" id="page-1">
    {/* Si tengo data imprime en pantallla los datos de la data */}
    <h6>{data?data.Cards[0].name:null}</h6>
    {data?<img  src={data.Cards[0].image}  width="160"  alt="" />
:null}
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

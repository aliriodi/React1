//esta librerias son de REACT para poder sacar los datos del BACK END
//useState es para poder tomar la respuesta del fetch a renderizrlo graficarlo
// el useEffect se usa para poder aplicar el fetch y entrar al backend
//el fetch es para traer datos del backend
import { useState, useEffect } from "react";
import './App.css'
import back from './back2.png'
import forward from './forward.png'

function App() {
  //esta declaracion el array es el primero data es la variable que deseamos usar
  //el setData es para poder asignar el valor de data, el useState es un estado local
  // que te permite asignar variablkes del back para usarlo en todo el componente llamado
  //App
  const [data, setData] = useState();
  const [i,setI]= useState(0);
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

  //Funcion para retroceder
  function back() { if(i===0){setI(2)} else{setI(i-1)} }
  //Funcion para avanzar
  function forward() { if(i===2){setI(0)} else{setI(i+1)} }

  return (
    <div className="App">
      <header className="App-header">
        
      <nav >
  <a href="#page-1">Block1</a>
  <a href="#page-2">Block2</a>
  <a href="#page-3">Block3</a>
</nav>

{/* SECCION 1 */}
<div className="scroll-container">
  <div className="scroll-page0" id="page-1">
{/* Imagen para atras con boton */}
 <button onClick={()=>back()} z-index='-0'>
 <img  src={back} z-index='20' width="60" height="60"  alt="" /> 
  </button>
    {/* Si tengo data imprime en pantallla los datos de la data */}
    <h6>{data?data.Cards[i].name:null}</h6>
    {data?<img  src={data.Cards[i].image}  width="160"  alt="" />
:null}

{/* Imagen para adelante con boton */}
<button onClick={()=>forward()}>
<img  src={forward}  width="60"  alt="" />
</button>
  </div>

  {/* SECCION 2 */}
  <div className="scroll-page" id="page-2">2</div>
  
  {/* SECCION 3 */}
  <div className="scroll-page" id="page-3">3</div>
</div>

      </header>
    </div>
  );
}

export default App;

//esta librerias son de REACT para poder sacar los datos del BACK END
//useState es para poder tomar la respuesta del fetch a renderizrlo graficarlo
// el useEffect se usa para poder aplicar el fetch y entrar al backend
//el fetch es para traer datos del backend
import { useState, useEffect } from "react";
import './App.css'
import backI from './back2.png'
import forwardI from './forward.png'

function App() {
  //esta declaracion el array es el primero data es la variable que deseamos usar
  //el setData es para poder asignar el valor de data, el useState es un estado local
  // que te permite asignar variablkes del back para usarlo en todo el componente llamado
  //App
  const [data, setData] = useState();
  //la variable i la inicio en 0 colocando dentro del useState el valor de la condicion
  //inicial y la funcion setI es la funcion que modifica el valor de i que
  //la llamaermos mas adelante
  const [i,setI]= useState(0);
  useEffect(() => {
    //el async se usa porque es una promesa donde debes esperar la respuesta
    async function getData() {
      // el await es para que espere que responda, los .then
      // es que va a tomar las respuestas y tomar acciones de las respuestas
      const response = await fetch(`https://hospedaje-react-api.netlify.app/db.json`,
                                  { mode: 'cors',
                                    headers: { 'Access-Control-Allow-Methods': 'GET,PUT,PATCH,DELETE',
                                               'Content-Type': 'application/json',
                                               'Access-Control-Allow-Origin': '*',
                                               'Access-Control-Allow-Headers':'*', }})
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
  
  //Disenando function delay
  const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }
//declarando el cambio de imagen con delay
  const timerNav = async () => {
    let delayres = await delay(4000);
    
    forward();
    delayres();
  }
  timerNav();

  return (
    <div className="App">
      <header className="App-header">
        
      <nav >
  <a href="#page-1">Block1</a>
  <a href="#page-2">Block2</a>
  <a href="#page-3">Block3</a>
  <a href="#page-4">Block4</a>
</nav>

{/* SECCION 1 */}
<div className="scroll-container">
  <div className="scroll-page0" id="page-1">
{/* Imagen para atras con boton */}
 <button onClick={()=>back()} z-index='-0'>
 <img  src={backI} z-index='20' width="60" height="60"  alt="" /> 
  </button>
    {/* Si tengo data imprime en pantallla los datos de la data */}
    <h6>{data?data.Cards[i].name:null}</h6>
    {data?<img  src={data.Cards[i].image}  width="160"  alt="" />
:null}

{/* Imagen para adelante con boton */}
<button onClick={()=>forward()}>
<img  src={forwardI}  width="60"  height="60"  alt="" />
</button>
  </div>

  {/* SECCION 2 */}
  <div className="scroll-page" id="page-2">2</div>
  
  {/* SECCION 3 */}
  <div className="scroll-page" id="page-3">3</div>
  {/* SECCION 4 */}
  <div className="scroll-page" id="page-4">4</div>
</div>

      </header>
    </div>
  );
}

export default App;

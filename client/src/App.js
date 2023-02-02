import './App.css';


function App() {
  
     async function dato() {
      const respuesta = await fetch('http://localhost:3001/db')
      .then((response) => {response.json()})
      .catch((error) => console.log(error));
      const dato2 =  respuesta;
      console.log(dato2)
       };
   const alirio = dato();
  
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
    {alirio && alirio.length? alirio[0].name:null}
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

import './App.css';ls


function App() {
     const dato = () => async () => {
    await fetch("http://localhost:3001/db")
      .then((response) => {console.log(response.json())})
      .catch((error) => console.log(error));
  };
   dato();
  
  return (
    <div className="App">
      <header className="App-header">
      <nav>
  <a href="#page-1">Bloque1</a>
  <a href="#page-2">Bloque2</a>
  <a href="#page-3">Bloque3</a>
</nav>
<div className="scroll-container">
  <div className="scroll-page" id="page-1">
    {}
    {console.log(dato())}

  </div>
  <div className="scroll-page" id="page-2">2</div>
  <div className="scroll-page" id="page-3">3</div>
</div>

      </header>
    </div>
  );
}

export default App;

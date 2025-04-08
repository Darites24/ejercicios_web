import { useState } from 'react';
import './App.css'

function App() {
  const [cont, setCont] = useState(0);

  const suma = () => {
    return setCont(cont + 1);
  }

  const resta = () => setCont(cont - 1); //Si la función se puede resolver dentro de una sola línea de código se expresa de esta forma


  return(
    <div id='container'>
      <h1>{cont}</h1>
      <button onClick={suma}>Sumar</button>
      <button onClick={resta}>Resta</button>
    </div>
  );
}

export default App

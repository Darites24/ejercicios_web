import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from './components/Home';
import Listado from './components/Listado';

function App() {

  return(
    <Router>
      <nav>
        <Link to="/home">Home</Link>
        <br/>
        <Link to="/listado">Listado</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/listado' element={<Listado/>}/>
      </Routes>
    </Router>
  );
    
}

export default App

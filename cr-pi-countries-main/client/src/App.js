import './App.css'
import Landing from '../src/components/Landing/Landing.jsx'
import Home from '../src/components/Home/Home.jsx'
import Detail from '../src/components/Detail/Detail.jsx'
import Form from '../src/components/Form/Form.jsx'
import NavBar from '../src/components/NavBar/NavBar.jsx'
import { Routes, Route, useLocation } from "react-router-dom"; 
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3001/"

function App() {
  const location = useLocation();
  return (
    <div className='App'>
      {location.pathname !== "/" && <NavBar/>}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/countries/:id" element={<Detail />} />
        <Route exact path="/form" element={<Form/>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;


// useLocation() te permite acceder a la ubicación actual de la aplicación en
// React Router y obtener información útil sobre la URL actual, lo que es especialmente 
// útil para crear rutas dinámicas y comportamientos basados en la ubicación.


//{location.pathname !== "/" && <NavBar/>}, si NO esta en la raiz, entonces
//renderiza el NavBar
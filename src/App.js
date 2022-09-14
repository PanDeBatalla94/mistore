import './App.css';
import Listar from "./components/Listar";
import Crear from "./components/Crear";
import Editar from "./components/Editar";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./components/ProductDetail";
import ListarProductos from "./components/ListarProductos";
import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";
import {  Link } from "react-router-dom";
import React from 'react';
import './css/Navegacion.css';


function App() {
  return (
    <div className="container">
    <MainHeader/>
    <Router>
      <nav class="main-nav">
              <img src={require('./icons/down-arrow-categories-icon.svg').default} alt='mySvgImage' className="nav-menu-icon"/>
              <ul>
                  <li>                
                      <Link className="option" to={"/"}>Sistema <span className="sr-only">(current)</span></Link>
                      <img src={require('./icons/down-arrow-categories-icon.svg').default}  class="nav-categories-icon"/>                
                  </li>
                  <li>
                      <Link className="option" to={"/crear"}>Crear usuario</Link>
                  </li>
                  <li>
                    <Link className="option" to={"/editar"}>Editar usuario</Link>
                  </li>
                  <li>
                  <Link className="option" to={"/productos"}>Productos</Link>
                  </li>
              </ul>
          </nav>

          <br></br>
          
        <Routes>
          <Route path="/" element= {<Listar/>} />
          <Route path="/crear" element={<Crear/>} />
          <Route path="/editar" element={<Editar/>} />
          <Route path="/productos" element={<ListarProductos/>} />
          <Route path="/ProductDetail" element= {<ProductDetail/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

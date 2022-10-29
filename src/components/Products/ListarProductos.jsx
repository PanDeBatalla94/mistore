import React, { useContext } from 'react';

import '../../css/ListarProductos.scss';
import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";
import {  Link } from "react-router-dom";
import productImg from "../../images/Xiaomi_Image.jpeg";

class ListarProductos  extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { 
        datosCargados:false,
        productos:[] 
     }

    cargarDatos(){
        fetch("http://localhost/mistore/?consultarProductos",{
            method:"GET", 
            //body:JSON.stringify()
        })
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta) =>{
            console.log(datosRespuesta);
            this.setState({ 
                datosCargados:true,
                productos:datosRespuesta
             }) //cuando ya se recupera los datos se actualiza el estado
        })
        .catch(console.log)
    }
    
    componentDidMount() { 
        this.cargarDatos();
    }

    render() { 
        const {datosCargados, productos} = this.state
        if(!datosCargados){
            return(<div>Cargando...</div>);
        }

        return ( 
        <div className="card">
            <div className="card-header">
                
            </div>
            <div className="card-body">
            <h3>Lista de productos</h3>

            {/* <p>Xiaomi Redmi Note 10 Pro</p>
            <div class="item-information">            
                <p>Bs. 1500</p>
                <button type="submit" class="add-cart-btn">Agregar al Carrito</button>            
            </div> */}

            {productos.map(
                        (producto)=>(
                            
                            <div className="item-container">
                                <img src={productImg} alt="Product Image"></img>
                                <div className="item-title"><p><Link className="text-link" to={"/ProductDetail"}> {producto.descripcion}  </Link> </p>  </div>  
                                <div className="item-information">            
                                    <p>{producto.costoProd} Bs.</p>
                                    <button type="submit" className="add-cart-btn" onClick={() => console.log(producto)}>Agregar al Carrito</button>            
                                </div> 
                            </div> 
                            )
                        )}

        </div>
        <div class="card-footer text-muted">
            
        </div>

  

        </div>
        );
    }
}
 
export default ListarProductos;
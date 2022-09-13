import React from 'react';
import '../css/ListarProductos.css';

class ListarProductos  extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { 
        datosCargados:false,
        productos:[] 
     }

    cargarDatos(){
        fetch("http://localhost/tienda/?consultarProductos",{
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
        const{datosCargados, productos} = this.state
        if(!datosCargados){
            return(<div>Cargando...</div>);
        }

        return ( 
        <div className="card">
            <div className="card-header">
                
            </div>
            <div className="card-body">
            <h3>Lista de productos</h3>

            <p>Xiaomi Redmi Note 10 Pro</p>
            <div class="item-information">            
                <p>Bs. 1500</p>
                <button type="submit" class="add-cart-btn">Agregar al Carrito</button>            
            </div> 

            {productos.map(
                        (producto)=>(
                            
                            <div class="item-container">
                                <img src="./images/Xiaomi_Image.jpeg" alt="Product Image"></img>
                                <p>{producto.descripcion}</p>
                                <div class="item-information">            
                                    <p>{producto.costoProd} Bs.</p>
                                    <button type="submit" class="add-cart-btn">Agregar al Carrito</button>            
                                </div> 
                            </div> 
                            )
                        )}

        </div>
        <div class="card-footer text-muted">
            
        </div>
    </div>);
    }
}
 
export default ListarProductos;
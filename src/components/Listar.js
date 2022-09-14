import React from 'react';
import {  Link } from "react-router-dom";

class Listar extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { 
        datosCargados:false,
        usuarios:[] 
    }

    cargarDatos(){
        fetch("http://localhost/mistore/?consultarUsuarios")
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta) =>{
            console.log(datosRespuesta);
            this.setState({ 
                datosCargados:true,
                usuarios:datosRespuesta
             }) //cuando ya se recupera los datos se actualiza el estado
        })
        .catch(console.log)
    }
    
    componentDidMount() { 
        this.cargarDatos();
    }

    render() { 
        const{datosCargados, usuarios} = this.state
        if(!datosCargados){
            return(<div>Cargando...</div>);
        }

        return ( 
        <div className="card">
            <div className="card-header">
                <Link className="btn btn-success" to={"/editar"}>Crear usuario</Link>
            </div>
            <div className="card-body">
            <h3>Lista de usuarios</h3>
            <table className="table">                
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(
                        (usuario)=>(
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.correo}</td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="">
                                        <Link className="btn btn-warning" to={"/editar"}>Editar</Link>
                                        <button type="button" className="btn btn-danger">Borrar</button>
                                    </div>
                                </td>
                            </tr>
                            )
                        )
                        }
                </tbody>
            </table>
            </div>
            <div class="card-footer text-muted">
                
            </div>
        </div>
        
         );
    }
}
 
export default Listar;
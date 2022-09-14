import React from 'react';
import { Link } from 'react-router-dom';
import '../Crear.css';

class Crear extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  
        nombre:"",
        apellido:"",
        correo:"",
        fechaNac:"",
        password:"",
        datosRespuesta:[]
    }


    enviarDatos = (e) => {
        e.preventDefault();
        //console.log("formulario enviado...");
        const{nombre, apellido, correo, fechaNac, password} = this.state;
        var datosEnvio = {nombre:nombre, apellido:apellido, correo:correo, password:password, fechaNac:fechaNac};

        fetch("http://localhost/mistore/?insertar=1",{
            method:"POST", 
            body:JSON.stringify(datosEnvio)
        })
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta) =>{
            console.log(datosRespuesta);
            //this.props.history.push("/");
            
        })
        .catch(console.log)

        
    }

    cambioValor = (e) => {
        const state = this.state;
        state[e.target.name]=e.target.value;
        this.setState({ state });
    }


    render() {
        
        const{nombre, apellido, correo, password, fechaNac}= this.state;
        
        return ( 
            <div className="create-account-container">
                
                <h1 className="create-account-title">Crear Cuenta</h1>
                
                <div className="">
                    <form onSubmit={this.enviarDatos} className="form">
                        
                          <label htmlFor="text" className="label">Nombres:</label>
                          <input type="text"  onChange={this.cambioValor} value={nombre} id="nombre" name="nombre" className="input"   placeholder="" />

                          <label htmlFor="text" className="label">Apellidos:</label>
                          <input type="text" onChange={this.cambioValor} id="apellido" name="apellido" className="input" value={apellido}  placeholder="" aria-describedby="helpId"/>

                          <label htmlFor="birth-date" className="label">Fecha de Nacimiento:</label>
                          <input type="date" onChange={this.cambioValor} id="fechaNac" name="fechaNac" className="input" value={fechaNac}  placeholder="" aria-describedby="helpId"/>
                          
                          <br/>
                          
                          <h2 class="sub-title">Informacion de Cuenta</h2>

                          <label htmlFor="email" className="label" >Correo:</label>
                          <input type="text" id="correo" name="correo" className="input" value={correo} onChange={this.cambioValor}/>

                          <label htmlFor="password" className="label" >Contraseña:</label>
                          <input type="password" id="password" name="password" className="input" value={password} onChange={this.cambioValor}/>

                          <label htmlFor="password-confirm" className="label">Confirmar Contraseña:</label>
                          <input type="password" id="password-confirm" className="input"/>

                          <button type="submit" className="primary-button">Crear Cuenta</button>

                          <Link to={"/"} type="button" className="return-button">Volver al inicio</Link>
                        

                    </form>
                </div>
                <div className="card-footer text-muted">
                    
                </div>
            </div>
         );
    }
}
 
export default Crear;
import React from "react";
import { Component } from "react";

class FormularioContacto extends Component {

    constructor(props){
        super(props)
        this.state = {
            nombre: "nombre state",
            correo: "correo state",
            asunto: "asunto state",
            mensaje: "mensaje state"
        }
    }
  
    //Retorna la estructura la estructura del componente el codigo como tal
    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="well well-sm">
                        <form className="form-horizontal" >
                            <fieldset>
                                <legend className="text-center header">Formulario de contacto</legend>

                                <div class="mb-3">
                                    <label htmlFor="exampleFormControlInput1" class="form-label">Nombre</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre" />
                                </div>

                                <div class="mb-3">
                                    <label htmlFor="exampleFormControlInput1" class="form-label">Asunto</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Asunto" />
                                </div>    

                                <div class="mb-3">
                                    <label htmlFor="exampleFormControlInput1" class="form-label">Correo</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>

                                <div class="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" class="form-label">Mensaje</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-12 text-center">
                                        <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                {/* <h3>{`Nombre ${this.state.nombre}`}</h3>
                <h3>{`Correo ${this.state.correo}`}</h3>
                <h3>{`Asunto ${this.state.asunto}`}</h3>
                <h3>{`Mensaje ${this.state.mensaje}`}</h3> */}
            </div>
        </div> 
        )
    }
}
export default FormularioContacto;
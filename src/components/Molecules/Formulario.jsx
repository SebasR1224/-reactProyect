import React from "react";
import { Component } from "react";

class Formulario extends Component {

    constructor(props){
        super(props)
        this.state = {
            nombre: "nombre state"
        }
        this.cambiarNombre = this.cambiarNombre.bind(this);
    }
    cambiarNombre(e){
        this.setState({
            nombre: e.target.value
        });
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevProps);
        console.log(prevState);
        console.log("_______________________________________");
    }

    //Retorna la estructura la estructura del componente el codigo como tal
    render(){
        return(
            <div id="contenedor">
                <h1></h1>
                <form action="">
                    <label htmlFor="">Nombre</label><br />
                    <input type="text"  onChange={this.cambiarNombre} /><br />
                    <input type="submit" value="Enviar" />
                </form>
                <h3>{`Hola ${this.state.nombre}`}</h3>
            </div>
        )
    }

    componentDidMount(){
        let elemento = document.getElementById("contenedor");
        console.log(elemento);
    }


}

export default Formulario;
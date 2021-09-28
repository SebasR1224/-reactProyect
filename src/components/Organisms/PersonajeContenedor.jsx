import React, {Component} from 'react';
import Personaje from "../Molecules/Personaje";

class PersonajeContenedor extends Component {
    constructor(props){
        super(props)
        this.state = {
            personajes:[]
        }
    }
    componentDidMount(){
        fetch('https://my-json-server.typicode.com/SebasR1224/datajson/characters', {method:'get'}) //Envia peticiones htpp (buscar url recibiendo respuesta)
        .then(response => response.json())
        .then(data =>{
                    this.setState({
                        personajes: data
                    })
                })
    }
    render(){
        const {personajes} = this.state
        return (
            <div>
                {
                    personajes.map(c => <Personaje nombre={c.nombre} descripcion={c.descripcion} foto={c.foto} id={c.id}/>)
                }
            </div>    
        )
    }

}
export default PersonajeContenedor;
import React, {Component} from "react";

class DatosApi extends Component {

    constructor(props){
        super(props)
        this.state = {
            posts:[]
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts', {method:'get'}) //Envia peticiones htpp (buscar url recibiendo respuesta)
        .then(response => response.json())
        .then(data =>{
                    this.setState({
                        posts: data
                    })
                })
    }
    render(){
        const {posts} = this.state
        return (
            <>
            <div>
                {
                    posts.map(u =>(
                        <>
                        <p>{u.id}</p>
                        <p>{u.title}</p>
                        <p>{u.body}</p>
                        <hr />
                        </>
                    )) 
                }
            </div>    
            </>
        )
    }

}

export default DatosApi;

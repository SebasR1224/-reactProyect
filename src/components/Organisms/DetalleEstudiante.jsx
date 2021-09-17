import React from 'react';
import { Link } from 'react-router-dom';
const estudiantes = [
    {
        "id": 1,
        "grado": 15,
        "nombre" : "maria",
        "edad": 12,
        "genero": "F"
    },
    {
        "id": 2,
        "grado": 11,
        "nombre" : "juan",
        "edad": 22,
        "genero": "M"
    },
    {
        "id": 3,
        "grado": 30,
        "nombre" : "Sebas",
        "edad": 17,
        "genero": "M"
    },
    {
        "id": 4,
        "grado": 100,
        "nombre" : "Fernanda",
        "edad": 52,
        "genero": "F"
    },
    {
        "id": 5,
        "grado": 50,
        "nombre" : "Rosa",
        "edad": 22,
        "genero": "F"
    },
    {
        "id": 6,
        "grado": 20,
        "nombre" : "Rodri",
        "edad": 12,
        "genero": "M"
    },
]

const DetalleEstudiante = ({match, location, history}) => {

    console.log(history)

    let estudiante = estudiantes.filter(c => c.id === parseInt(match.params.id))[0]
    return(
        <>
        {
            estudiante ? ( 
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 offset-3">
                            <div className="card mb-3 ">
                                <div className="card-body">
                                    <div className="row">
                                        <h6 className="text-center p-3">Identificación {estudiante.id}</h6>
                                        <div className="col-md-6">
                                            <h5 className="card-title text-uppercase">{estudiante.nombre}</h5>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="card-text">Edad: {estudiante.edad}</p>
                                            <p className="card-text">Genero: {estudiante.genero}</p>
                                            <p className="card-text">Grado: {estudiante.grado}</p>
                                        </div>     
                                    </div>      
                                </div>
                            </div>
                            <div>
                                <Link className="btn btn-sm btn-primary" to={`/estudiantes`}>Ver todos</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : 
            <h1>Estudiante no encontrado</h1>
        }
        </>
    );
   
};
    

export default DetalleEstudiante;
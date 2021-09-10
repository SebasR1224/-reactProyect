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

const DetalleEstudiante = ({match}) => {
    let estudiante = estudiantes.filter(c => c.id === parseInt(match.params.id))[0]

    return(
        <>
        {
            estudiante ? ( 
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{estudiante.nombre}</h5>
                                    <p className="card-text">Edad: {estudiante.edad} </p>
                                    <p className="card-text">Genero: {estudiante.genero} </p>
                                    <p className="card-text">Genero: {estudiante.grado} </p>
                                </div>
                            </div>
                        </div>         
                    </div>
                </div>
            ) : 
            <h1>Estudiante no encontrado</h1>
        }
            <Link to={`/estudiantes`}>Ver todos</Link>
        </>
    );
   
};
    

export default DetalleEstudiante;
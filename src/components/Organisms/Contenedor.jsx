import React from "react";
import Estudiante from "../Molecules/Estudiante";


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

const Contenedor = () => (
    <>
        {
            estudiantes.map(c => <Estudiante nombre={c.nombre} edad={c.edad} genero={c.genero} id={c.id}/>)
        }
    </>
);
export default Contenedor;
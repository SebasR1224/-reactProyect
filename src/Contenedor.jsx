import React from "react";
import Estudiante from "./Estudiante";


const estudiantes = [
    {
        "nombre" : "maria",
        "edad": 12,
        "genero": "F"
    },
    {
        "nombre" : "juan",
        "edad": 22,
        "genero": "M"
    },
    {
        "nombre" : "Sebas",
        "edad": 17,
        "genero": "M"
    },
    {
        "nombre" : "Fernanda",
        "edad": 52,
        "genero": "F"
    },
    {
        "nombre" : "Rosa",
        "edad": 22,
        "genero": "F"
    },
    {
        "nombre" : "Rodri",
        "edad": 12,
        "genero": "M"
    },
]

const Contenedor = () => (
    <>
        {
            estudiantes.map(c => <Estudiante nombre={c.nombre} edad={c.edad} genero={c.genero}/>)
        }
    </>
);
export default Contenedor;
import React from 'react';
import { Link } from 'react-router-dom';


const personajes = [
    {
        "id": 1,
        "nombre": "Homero",
        "edad": 24,
        "genero": "M",
        "descripcion": "Homer Jay Simpson (Homero J. Simpson en Hispanoamérica y Homer J. Simpson en España) es un personaje ficticio protagonista de la serie de televisión de dibujos animados Los Simpson. Es el padre de la familia protagonista y uno de los personajes centrales y más importantes de la serie.",
        "foto": "https://peru21.pe/resizer/ApuJNdfNy8PiomjoNo5djuVW0pw=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DVNFUNYPOBB7RGAVSPUOWF4NAI.jpg"
    },
    {
        "id": 2,
        "nombre": "Marge",
        "edad": 24,
        "genero": "M",
        "descripcion": "Marjorie Jacqueline Simpson más conocida como Marge Simpson es un personaje ficticio de la serie de televisión de dibujos animados Los Simpson. Es la esposa de Homer Simpson y madre de los tres hijos que ha tenido de este matrimonio: Bart, Lisa y Maggie.",
        "foto": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/marge-simpson-1569921773.jpg"
    },
    {
        "id": 3,
        "nombre": "Bart",
        "edad": 24,
        "genero": "M",
        "descripcion": "Bartholomew Jojo Simpson (En Hispanoamérica Bartolomeo Jay Simpson Bouvier) es uno de los personajes principales de la serie animada Los Simpson. En inglés, su voz es interpretada por Nancy Cartwright.",
        "foto": "https://m.media-amazon.com/images/I/51rhATa0AdL._AC_SX425_.jpg"
    },
    {
        "id": 4,
        "nombre": "Lisa",
        "edad": 24,
        "genero": "M",
        "descripcion": "Lisa Marie Simpson​​ es un personaje de la serie de televisión de dibujos animados Los Simpson. Es la hija mediana de Homer y Marge Simpson y hermana de Bart y Maggie. Goza de notable protagonismo y complejidad en la serie. ... ​ En la versión española, el personaje es doblado por Isacha Mengibar.",
        "foto": "https://64.media.tumblr.com/2e4893e0b097ac08dd3291e2650bdbb3/2c527925f4094a39-18/s540x810/3bd484f00633a1da1def3ed0704d9a12c28db0f6.jpg"
    },
    {
        "id":5, 
        "nombre": "maggie",
        "edad": 24,
        "genero": "M",
        "descripcion": "Margaret Simpson, conocida como Maggie Simpson, es un personaje ficticio de la serie de televisión de dibujos animados Los Simpson. Es la tercera hija del matrimonio protagonista, Homer y Marge Simpson, y la más joven de ellos. Sus hermanos mayores son Bart y Lisa Simpson.",
        "foto": "https://i.pinimg.com/originals/47/f9/db/47f9dbca7fa1b093c5f1c3153b1cc32b.gif"
    }
]

const DetallePersonaje = ({match}) => {
    let personaje = personajes.filter(c => c.id === parseInt(match.params.id))[0]

    return(
        <>
        {
            personaje ? ( 
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src={personaje.foto}  width="200px"/>
                                    <h5 className="card-title">{personaje.nombre}</h5>
                                    <p className="card-text">Edad: {personaje.edad} </p>
                                    <p className="card-text">Genero: {personaje.genero} </p>
                                    <p className="card-text">Descripción: {personaje.descripcion} </p>
                                </div>
                            </div>
                        </div>         
                    </div>
                </div>
            ) : 
            <h1>Simpson no encontrado</h1>
        }
            <Link to={`/personajes`}>Ver todos</Link>
        </>
    );
   
};
    

export default DetallePersonaje;
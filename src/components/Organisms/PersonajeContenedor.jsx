import React from "react";
import Personaje from "../Molecules/Personaje";

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
        "foto": "https://tvazteca.brightspotcdn.com/dims4/default/ed61af2/2147483647/strip/true/crop/1920x1080+0+0/resize/968x545!/format/jpg/quality/80/?url=https%3A%2F%2Ftvazteca.brightspotcdn.com%2F1a%2F0d%2F6284b42a48b7809c1a226f51726a%2Fsimpson-7.png"
    },
    {
        "id": 4,
        "nombre": "Lisa",
        "edad": 24,
        "genero": "M",
        "descripcion": "Lisa Marie Simpson​​ es un personaje de la serie de televisión de dibujos animados Los Simpson. Es la hija mediana de Homer y Marge Simpson y hermana de Bart y Maggie. Goza de notable protagonismo y complejidad en la serie. ... ​ En la versión española, el personaje es doblado por Isacha Mengibar.",
        "foto": "http://pm1.narvii.com/6883/30252478f55841095fa92be1998492a20a54b818r1-500-500v2_00.jpg"
    },
    {
        "id":5, 
        "nombre": "maggie",
        "edad": 24,
        "genero": "M",
        "descripcion": "Margaret Simpson, conocida como Maggie Simpson, es un personaje ficticio de la serie de televisión de dibujos animados Los Simpson. Es la tercera hija del matrimonio protagonista, Homer y Marge Simpson, y la más joven de ellos. Sus hermanos mayores son Bart y Lisa Simpson.",
        "foto": "https://img.discogs.com/maXf1jvW1PIBv9KxoPQfoFyIDkA=/550x514/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-2633129-1423414884-6779.jpeg.jpg"
    }
]

const PersonajeContenedor = () =>(
    <>
        {
            personajes.map(c => <Personaje nombre={c.nombre} descripcion={c.descripcion} foto={c.foto} id={c.id}/>)
        }
    </>
);
export default PersonajeContenedor;
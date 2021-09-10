import React from "react";
import { Link } from 'react-router-dom';
const Personaje = ({nombre, descripcion, foto, id}) =>(
    <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <img src={foto}  width="200px"/>
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text"> {descripcion} </p>
                            <p><Link to={`/personajes/${id}`}>Ver detalle</Link></p>
                        </div>
                    </div>
                </div>         
            </div>
        </div>
    </>
);
export default Personaje;
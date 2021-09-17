import React from "react";
import { Link } from 'react-router-dom';
const Personaje = ({nombre, descripcion, foto, id}) =>(
<div className="container">
    <div className="row">
    <div className="col-sm-6">
        <div className="card mb-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <img src={foto} className="rounded-circle" width="100%"/>
                        <h5 className="card-title text-uppercase text-cernter">{nombre}</h5>
                    </div>
                    <div className="col-md-6">
                        <p className="card-text"><strong>Descripción: </strong>{descripcion}</p>
                    </div>
                    <p><Link className="btn btn-sm btn-info text-white" to={`/personajes/${id}`}>Ver detalle</Link></p>    
                </div>    
            </div>
        </div>
    </div>
    </div>
</div>
);
export default Personaje;
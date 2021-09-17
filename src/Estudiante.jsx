import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Estudiante  = ({nombre, edad, genero, id}) => (
<div className="container">
    <div className="row">
    <div className="col-sm-6">
        <div className="card mb-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="card-title text-uppercase">{nombre}</h5>
                    </div>
                    <div className="col-md-6">
                        <p className="card-text">Edad: {edad}</p>
                        <p className="card-text">Genero: {genero}</p>
                    </div>
                    <p><Link className="btn btn-sm btn-info text-white" to={`/estudiantes/${id}`}>Ver detalle</Link></p>    
                </div>    
            </div>
        </div>
    </div>
    </div>
</div>
);
Estudiante.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string
}

Estudiante.defaultProps = {
    nombre: "nombre no asigndado",
    edad: 0
}

export default Estudiante;

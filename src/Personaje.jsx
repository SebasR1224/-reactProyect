import React from "react";
const Personaje = ({nombre, descripcion, foto}) =>(
    <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <img src={foto}  width="200px"/>
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text"> {descripcion} </p>
                        </div>
                    </div>
                </div>         
            </div>
        </div>
    </>
);
export default Personaje;
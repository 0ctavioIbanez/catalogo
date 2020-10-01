import React from 'react';


const Producto = ({name, desc}) => {
    return (
        <div className="card">
            <img src={desc.img} alt="producto" />
            <div className="card-desc">
                <h4>{name}</h4>
                <small>Tiendas: <span className="tiendas">${desc.pcompe}</span></small>
                <p>Nosotros: <span className="precio">${desc.precio}</span></p>
                <small>{desc.descripcion}</small>
            </div>
        </div>
    );
};

export default Producto;
import React from 'react';
import './productos.css';

const Popup = ({desc,name, outHandlePopup}) => {

  return (
    <div className="popups">
      <div className="popup-dialog">
      <span className="close" onClick={ outHandlePopup }> x </span>
        <h2 className="popup-title">{name}</h2>
        <p>{desc.descripcion}</p>
      </div>
    </div>
  )
}

export default Popup;

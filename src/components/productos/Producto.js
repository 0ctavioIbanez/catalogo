import React, {useState, Fragment} from 'react';
import Popup from './Popup';


const Producto = ({name, desc}) => {
  const [popup, setPopup] = useState(false);

  const handlePopup = () => {
    setPopup(true);
  }
  const outHandlePopup = () => {
    setPopup(false);
  }

    return(
    <Fragment>
      {popup
        ? <Popup desc={desc} outHandlePopup={outHandlePopup} name={name} />
        : null
      }
        <div className="card" onClick={handlePopup}>
            <img src={desc.img} alt="producto" />
            <div className="card-desc">
                <h4>{name}</h4>
                <small>Tiendas: <span className="tiendas">${desc.pcompe}</span></small>
                <p>Nosotros: <span className="precio">${desc.precio}</span></p>
                <small>{desc.descripcion}</small>
            </div>
        </div>
    </Fragment>
    );
};

export default Producto;

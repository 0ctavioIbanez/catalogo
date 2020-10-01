import React from 'react';

import Producto from './Producto';

import './productos.css';

const Productos = () => {
    const data = [
        {
            "Rostro":{
                "Eclipsol 50 60ml": {
                    "precio": 180,
                    "pcompe": 221,
                    "descripcion": "",
                    "img": require("../../img/e50-60.jpg")
                },
                "LA ROCHE-POSAY Anthelios 300ml":{
                    "precio": 340,
                    "pcompe": 549,
                    "descripcion": "",
                    "img": require("../../img/lrpa300.jpg")
                },
                "Eclipsol 50 125ml": {
                    "precio": 290,
                    "pcompe": 411,
                    "descripcion": "",
                    "img": require("../../img/e50-125.jpg")
                },
                "Avéne Eau Thermale 300ml": {
                    "precio": 0,
                    "pcompe": 331,
                    "descripcion": "",
                    "img": require("../../img/aet300.jpg")
                },
                "MartiDerm proteos hydra plus 2ml": {
                    "precio": 500,
                    "pcompe": 1439,
                    "descripcion": "",
                    "img": require("../../img/mphp2.jpg")
                },
                
                
                      },
            "Cuerpo":{
                "Eclipsol 50 60ml": {
                    "precio": 180,
                    "pcompe": 221,
                    "descripcion": "",
                    "img": require("../../img/e50-60.jpg")
                },
                "Eclipsol 50 125ml": {
                    "precio": 290,
                    "pcompe": 411,
                    "descripcion": "",
                    "img": require("../../img/e50-125.jpg")
                },
                "Cetaphil Restoraderm 295ml": {
                    "precio": 280,
                    "pcompe": 346,
                    "descripcion": "",
                    "img": require("../../img/cr295.jpg")
                },
                "Eucerin Aquaporin Active 400ml": {
                    "precio": 200,
                    "pcompe": 385,
                    "descripcion": "",
                    "img": require("../../img/eaa400.jpg")
                },
                "Neutrogena HydroBoost manos 85g": {
                    "precio": 100,
                    "pcompe": 149,
                    "descripcion": "",
                    "img": require("../../img/nhbm85.jpg")
                },
                "CeraVe Loción hidratante 236ml": {
                    "precio": 150,
                    "pcompe": 177,
                    "descripcion": "",
                    "img": require("../../img/clh236.jpg")
                },
                "Neutrogena HydroBoost cuerpo 400ml": {
                    "precio": 149,
                    "pcompe": 149,
                    "descripcion": "",
                    "img": require("../../img/nhc400.jpg")
                },
                
            },
            "Cabello": {
                "Klorane Fuerza y vigor": {
                    "precio": 290,
                    "pcompe": 488,
                    "descripcion": "",
                    "img": require("../../img/kfv290.jpg")
                }
            },

        }
    ];


    
    return (
        <section className="productos">
            <div className="container">
                <h2 className="titulo">Cabello</h2>
                <div className="flex">

                    {data.map( productos => (
                            Object.entries(productos.Cabello).map( producto => (
                                <Producto 
                                    name={producto[0]}
                                    desc={producto[1]}
                                    key={Math.random()}
                                />
                            ))
                        ))
                    }

                </div>

                <h2 className="titulo">Rostro</h2>
                <div className="flex">
                {data.map( productos => (
                            Object.entries(productos.Rostro).map( producto => (
                                <Producto 
                                    name={producto[0]}
                                    desc={producto[1]}
                                    key={Math.random()}
                                />
                            ))
                        ))
                    }
                </div>

                <h2 className="titulo">Cuerpo</h2>
                <div className="flex">
                    {data.map( productos => (
                                Object.entries(productos.Cuerpo).map( producto => (
                                    <Producto 
                                        name={producto[0]}
                                        desc={producto[1]}
                                        key={Math.random()}
                                    />
                                ))
                            ))
                    }
                </div>
            </div>
            
        </section>
    );
};

export default Productos;
import React from 'react';
import categoriasData from '../data/categories.json';
import Design from '../js/Design.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/style.css';


function Contenido() {

  function Click(obj) {
    console.log("Este es el id que se eligio", obj);
  }

  function Buttons() {
    return (
      <div className="">{
        categoriasData.map((catDetalle, index) => {
          return <div className="btn-group" key={index}><button type="button" className="btn btn-warning" onClick={Click(catDetalle)}>
                    <span className="colorspan"><img src={catDetalle.icon} height="30" width="30"/></span>
                      {catDetalle.name}
                  </button>
                </div>
        })
      }
      </div>
    );
  }

  function Restaurants() {
    return (
      <div className="card1 mx-auto Fitness-Card1">
        <div className="card-body">
          <div className="row center">
            <div className="">
              <div className="card-r card-header">
                  <strong className="title">Restaurants </strong>
              </div>
              <div className="card-body">
                <Buttons />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

    return (
      <div>
        <Design name="$0 delivery for 30 days!" descripcion="$0 delivery fee for orders over $10 for 30 days"/>
        <Restaurants />
      </div>
    );
  }

  export default Contenido;
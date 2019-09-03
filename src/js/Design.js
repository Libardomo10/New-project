import React from 'react';
import log1 from '../logos/d.png';
import headerImg from '../images/headerimage.png';
import '../styles/Card.css';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.css';

function Design(props) {

  function Image() {
    return (
      <img src={headerImg} className="float-rigth" height="170" width="170" alt="headerImg"/>
    );
  };

  function Logo() {
    return (
        <img src={log1} className="imglogo" height="30" width="30" alt="log1"/>
    );
  };

  return (
      <div className="card mx-auto Fitness-Card">
        <div className="card-body">
          <div className="row center">
            <div className="col-4">
              <Image />
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h5 className="color1">{props.name}   <Logo />
              </h5>
              <h1 className="color1">{props.descripcion}</h1>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Design;

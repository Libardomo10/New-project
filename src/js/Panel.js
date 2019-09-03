import React from 'react';
import Contenido from '../js/Contenido.js';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

function Panel() {
    return (
        <div id="right-panel" className="right-panel">
            <header id="header" className="header">
                <div className="top-left">
                    <div className="navbar-header">
                        <a id="menuToggle" className="menutoggle"><i className="fa fa-bars"></i></a>
                    </div>
                </div>
                <div className="top-right">
                    <div className="header-menu">
                        <div className="header-left">
                            <button className="search-trigger"><i className="fa fa-search"></i></button>
                            <div className="form-inline">
                                <form className="search-form">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>   
            </header>
            <div className="content">
                <Contenido />
            </div>  
        </div>  
    );
}

export default Panel;

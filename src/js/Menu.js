import React from "react";
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

function Menu() {
    return (
    <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">

            <div id="main-menu" className="main-menu collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="index.html"><i className="menu-icon fa fa-cutlery"></i>Inicio </a>
                    </li>
                </ul>
            </div>
        </nav>
    </aside>
    );
}

export default Menu;
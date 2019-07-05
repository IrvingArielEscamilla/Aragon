import React from 'react';
import logo from "../images/Logo.svg.png";
import "./styles/Navbar.css";
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return <div className="Navbar">
        <div className="container-fluid">
            <Link className="Navbar_brand" to="/">
                <img className="Navbar_brand-logo"src={logo} alt="Logo" width="75" height="75"/>
                <span className="font-weight-light" >Aragon</span>
                <span className="font-weight-bold">Conferencia</span>
            </Link>
            </div>
        </div>
    }
}

export default Navbar;
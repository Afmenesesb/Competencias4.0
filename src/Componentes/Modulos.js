import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container, ButtonGroup,Button,ToggleButton,ToggleButtonGroup } from "react-bootstrap";
import iconoU from './../Recursos/iconoU.svg';
import { useAuth0 } from "@auth0/auth0-react";
import Home from './Home';
import { LoginButton } from './Login';
import { LogoutButton } from "./Logout";
import './../Estilos/buttongroup.css';

class Modulos extends Component {
    render() {
        return (
            <div class="btn-groupM" role="group" aria-label="Basic example">
            <button id="btM1"  type="button" class="btn btn-success">Modulo 1</button>
            <button id="btM2"  type="button" class="btn btn-success">Modulo 2</button>
            <button id="btM3"  type="button" class="btn btn-success">Modulo 3</button>
          </div>
        );
    }

}


export default Modulos;
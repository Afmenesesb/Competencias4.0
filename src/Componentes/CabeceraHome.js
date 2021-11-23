import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import iconoU from './../Recursos/iconoU.svg';
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import Competencias from "./Competencias";
import Modulos from "./Modulos";
import Cuerpo from "./Cuerpo";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Encuestas from "./Encuestas";


function mostrar(e) {
    document.getElementById('inicio').style.display='block'
    document.getElementById('menuEncuesta').style.display='none'
    
}
function ocultar(e) {
    document.getElementById('inicio').style.display='none'
    document.getElementById('menuEncuesta').style.display='block'
}
class Cabecera extends Component {
    render() {
        return (
            <div id="cabeceraH">

                <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" wit>
                    <Container>
                        <img
                            src={iconoU}
                            width="70"
                            height="70"
                            className="rounded float-start"

                        />
                        <Navbar.Brand href="#home">Competencias 4.0</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <button id="bInicio" class="btnEncuesta" onClick={(e)=>{mostrar(e)}} >Inicio</button>
                                <button class="btnEncuesta" onClick={(e)=>{ocultar(e)}} >Encuesta</button>
                            </Nav>
                            <Profile />
                            <Nav>
                                <LogoutButton />
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>

                <div id="inicio">
                    <Competencias />
                    <Modulos />
                    <Cuerpo />
                </div>
                <Encuestas/>



            </div >


        );
    }

}

export default Cabecera;
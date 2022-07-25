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
import EstadisticasEstudiantes from "./EstadisticasEstudiantes";



/*Funcion para mostrar los elementos de inicio*/
function inicio(e) {
    document.getElementById('inicio').style.display='block'
    document.getElementById('menuEncuesta').style.display='none'
    document.getElementById('btnsGraficas').style.display='none'
    document.getElementById('graficasEstudiantes').style.display='none'
    document.getElementById('graficasEstudiantesM').style.display='none'
    
}
/*Funcion para ocultar los elementos de inicio*/
function encuesta(e) {
    
    document.getElementById('inicio').style.display='none'
    document.getElementById('menuEncuesta').style.display='block'
    document.getElementById('btnsGraficas').style.display='none'
    document.getElementById('graficasEstudiantes').style.display='none'
    document.getElementById('graficasEstudiantesM').style.display='none'

}
function estadistica(e) {
    
    document.getElementById('inicio').style.display='none'
    document.getElementById('menuEncuesta').style.display='none'
    document.getElementById('btnsGraficas').style.display='block'
}

class Cabecera extends Component {
    render() {
        return (
            /*Uso del mismo formato de cabecera inicial, modificando algunos componentes segun la necesidad, en este casola del usuario del aplicativo*/
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
                                <button id="bInicio" class="btnEncuesta" onClick={(e)=>{inicio(e)}} >Inicio</button>
                                <button class="btnEncuesta" onClick={(e)=>{encuesta(e)}} >Encuesta</button>
                                <button class="btnEncuesta" onClick={(e)=>{estadistica(e)}} >Estadisticas</button>
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
                <EstadisticasEstudiantes/> 
            </div >


        );
    }

}

export default Cabecera;
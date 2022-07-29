import React, { Component, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import iconoU from './../Recursos/iconoU.svg';
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import '../Estilos/boton.css';
import Pregunta from "./Pregunta";
import ModulosGestor from "./ModulosGestor";
import Modulos from "./Modulos";
import Competencias from "./Competencias";
import Cuerpo from "./Cuerpo";
import Respuesta from "./Respuesta";
import Estadisticas from "./Estadisticas";
import EstatsEstudiante from "./EstadisticasIndividuales";
import CuerpoGestor from "./CuerpoGestor"

function mostrarI() {
    document.getElementById('inicioGestor').style.display = 'block'
    document.getElementById('formularioPregunta').style.display = 'none'
    document.getElementById('formularioRespuesta').style.display = 'none'
    document.getElementById('formEstadisticas').style.display = 'none'
    document.getElementById('formularioBusquedaEst').style.display = 'none'
}
/*Funcion para ocultar los elementos de inicio*/
function mostrarP(e) {

    document.getElementById('inicioGestor').style.display = 'none'
    document.getElementById('formularioPregunta').style.display = 'block'
    document.getElementById('formularioRespuesta').style.display = 'none'
    document.getElementById('formEstadisticas').style.display = 'none'
    document.getElementById('formularioBusquedaEst').style.display = 'none'
}
function mostrarR(e) {

    document.getElementById('inicioGestor').style.display = 'none'
    document.getElementById('formularioPregunta').style.display = 'none'
    document.getElementById('formularioRespuesta').style.display= 'block'
    document.getElementById('formEstadisticas').style.display = 'none'
    document.getElementById('formularioBusquedaEst').style.display = 'none'
}
function mostrarE(e) {

    document.getElementById('inicioGestor').style.display = 'none'
    document.getElementById('formularioPregunta').style.display = 'none'
    document.getElementById('formularioRespuesta').style.display= 'none'
    document.getElementById('formEstadisticas').style.display = 'block'
    document.getElementById('formularioBusquedaEst').style.display = 'none'
}

export default class CabeceraGestor extends Component {
    
    /*Constantes para manejar el estado de visibilidad de los componentes de la cabecera del gestor*/
    render() {
        return (
            /*Uso del mismo formato de cabecera inicial, modificando algunos componentes segun la necesidad, en este casola del gestor de conocimiento*/
            <div>
                
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
                                <button id="bModulos" class="btnMaterial" onClick={() => {mostrarI()}}>Modulos</button>
                                <button class="btnPregunta" onClick={(e) => {mostrarP(e)}}>Preguntas</button>
                                <button class="btnRespuesta" onClick={(e) => {mostrarR(e)}}>Respuestas</button>
                                <button class="btnRespuesta" onClick={(e) => {mostrarE(e)}}>Estadisticas</button>
                            </Nav>
                            <Profile />
                            <Nav>
                                <LogoutButton />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div id="inicioGestor">
                    <Competencias />
                    <ModulosGestor />
                    <CuerpoGestor />

                </div>      
                <Estadisticas />
                <Respuesta/>
                <Pregunta />
                <EstatsEstudiante/>
            </div>
            
        );
    }

}
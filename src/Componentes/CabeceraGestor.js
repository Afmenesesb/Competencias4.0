import React, { Component} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import iconoU from './../Recursos/iconoU.svg';
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import '../Estilos/boton.css';
import Pregunta from "./Pregunta";
import ModulosGestor from "./ModulosGestor";
import Competencias from "./Competencias";
import Respuesta from "./Respuesta";
import Estadisticas from "./Estadisticas";
import CuerpoGestor from "./CuerpoGestor"
import EstadisticasGrupales from "./EstadisticasGrupales";

/*Funcion para ocultar los elementos que pertenecen a todos los componentes menos inicio*/
function mostrarI() {
    document.getElementById('bloqueGrupal').style.display = 'none'
    document.getElementById('inicioGestor').style.display = 'block'
    document.getElementById('formularioPregunta').style.display = 'none'
    document.getElementById('formularioRespuesta').style.display = 'none'
    document.getElementById('formEstadisticas').style.display = 'none'
}
/*Funcion para ocultar los elementos que pertenecen a todos los componentes menos Pregunta*/
function mostrarP(e) {
    document.getElementById('bloqueGrupal').style.display = 'none'
    document.getElementById('inicioGestor').style.display = 'none'
    document.getElementById('formularioPregunta').style.display = 'block'
    document.getElementById('formularioRespuesta').style.display = 'none'
    document.getElementById('formEstadisticas').style.display = 'none'

}
/*Funcion para ocultar los elementos que pertenecen a todos los componentes menos Respuesta*/
function mostrarR(e) {
    document.getElementById('bloqueGrupal').style.display = 'none'
    document.getElementById('inicioGestor').style.display = 'none'
    document.getElementById('formularioPregunta').style.display = 'none'
    document.getElementById('formularioRespuesta').style.display= 'block'
    document.getElementById('formEstadisticas').style.display = 'none'

}
/*Funcion para ocultar los elementos que pertenecen a todos los componentes menos estadisticas*/
function mostrarE(e) {
    document.getElementById('inicioGestor').style.display = 'none'
    document.getElementById('formularioPregunta').style.display = 'none'
    document.getElementById('formularioRespuesta').style.display= 'none'
    document.getElementById('formEstadisticas').style.display = 'block'
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
                            alt=""

                        />
                        <Navbar.Brand >COMPETENCIAS 4.0</Navbar.Brand>
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
                <EstadisticasGrupales/>
                <Respuesta/>
                <Pregunta />
            </div>
            
        );
    }

}
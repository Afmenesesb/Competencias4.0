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

export default function CabeceraGestor() {

    /*Constantes para manejar el estado de visibilidad de los componentes de la cabecera del gestor*/
    function mostrar(e) {
        document.getElementById('inicioGestor').style.display='block';
        document.getElementById('formularioPregunta').style.display='none';
        
    }
    /*Funcion para ocultar los elementos de inicio*/
    function ocultar(e) {
        
        document.getElementById('inicioGestor').style.display='none';
        document.getElementById('formularioPregunta').style.display='block';
    }
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
                            <button class="btnEncuesta">Encuesta</button>
                            <button class="btnMaterial" onClick={(e) => mostrar(e)}>Modulos</button>
                            <button class="btnPregunta" onClick={(e) => ocultar(e)}>Preguntas</button>
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
                    <Modulos />
                    
            </div>
            <Pregunta/>

        </div>
    );

}
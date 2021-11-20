import React, { Component, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import iconoU from './../Recursos/iconoU.svg';
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import '../Estilos/boton.css';
import Pregunta from "./Pregunta";
import {Link} from "react-router-dom";


export default function CabeceraGestor(){

    const [visibilidad, setVisibilidad]= useState(false);
        return (
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
                                <button class="btnPregunta" onClick={visibilidad ? <pregunta/>: null}>Preguntas</button>
                                <button class="btnEncuesta">Encuesta</button>
                                <button class="btnMaterial">Material</button>
                                <Link>Home</Link>
                            </Nav>
                            <Profile />
                            <Nav>
                                <LogoutButton />
                            </Nav>
                        </Navbar.Collapse>
                      
                    </Container>
                </Navbar>
            </div>
        );

}
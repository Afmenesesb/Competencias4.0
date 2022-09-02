import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import iconoU from './../Recursos/iconoU.svg';
import { LoginButton } from './Login';
import Home2 from './Home2';
import '../Estilos/cabecera.css';



class Cabecera extends Component {
    render() {
        return (
            /*Plantilla de la cabecera de inicio de la aplicacion usando bootstrap 5 y sus atributos de interfaz*/
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
                        <Navbar.Brand>ECCPI FCEAC 4.0 
                        </Navbar.Brand>
                        <Navbar.Brand></Navbar.Brand>
                        <Navbar.Brand><h6 class="titulo">Evaluacion y caracterización de competencias industria 4.0</h6></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            
                            </Nav>
                            <Nav>
                                <LoginButton/>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Home2/>
            </div>
           
        );
    }

}

export default Cabecera;
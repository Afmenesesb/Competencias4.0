import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import iconoU from './../Recursos/iconoU.svg';
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import Competencias from "./Competencias";
import Modulos from "./Modulos";

class Cabecera extends Component {
    render() {
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
                                <Nav.Link href="#pricing">Inicio</Nav.Link>
                                <Nav.Link href="#pricing">Encuesta</Nav.Link>
                                <NavDropdown title="Competencias profesionales" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Ciencias Economicas</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Ciencias Administrativas</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Ciencias Contables</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Profile />
                            <Nav>
                                <LogoutButton />
                            </Nav>
                        </Navbar.Collapse>
                      
                    </Container>
                </Navbar>
                <Competencias/>
                <Modulos/>

                
                
                
            </div>
        );
    }

}

export default Cabecera;
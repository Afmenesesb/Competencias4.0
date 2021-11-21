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
                                <Router>
                                    <Link to="/Encuestas">Encuesta</Link>
                                    <Link to="/">About</Link>
                                    <Link to="/users">Users</Link>
                                </Router>

                            </Nav>
                            <Profile />
                            <Nav>
                                <LogoutButton />
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route path="/Encuestas" element={<Encuestas />}>

                        </Route>
                        <Route path="/users">

                        </Route>
                        <Route path="/" element={<Competencias/>,<Modulos/>}>

                        </Route>
                    </Routes>

                </Router>
            </div>

        );
    }

}

export default Cabecera;
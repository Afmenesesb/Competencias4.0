import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import './../Estilos/cuerpo.css';
import infCont from './../Recursos/img-informacionContable.jpg';
import Table from 'react-bootstrap/Table'

class Cuerpo extends Component {

    render() {
        return (
            <div class="cuerpo">
                <h1 id="contLor" class="parrafo1">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </h1>
                <div class="contenedorImg">
                    <img id="imgCont" class="imgCuerpo" src={infCont} ></img>
                </div>
                <div class="tablaLink">
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Descripción</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td id="desc1">Drive</td>
                                <td >
                                    <a class="link" href="../Descargas/Plataformas virtuales de aprendizaje.pdf" download="Aplicaciones.pdf">
                                        <button id="btnCP1" class="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                        </svg></button>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td id="desc2">Pagina web</td>
                                <td >
                                    <a class="link" href="../Descargas/Plataformas virtuales de aprendizaje.pdf" download="Aplicaciones.pdf">
                                        <button id="btnCP2" class="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                        </svg></button>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td id="desc3">Soporte</td>
                                <td >

                                    <a class="link" href="../Descargas/Plataformas virtuales de aprendizaje.pdf" download="Aplicaciones.pdf">
                                        <button id="btnCP3" class="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                        </svg></button>
                                    </a></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }

}

export default Cuerpo;
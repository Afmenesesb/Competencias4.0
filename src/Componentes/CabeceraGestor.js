import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import iconoU from './../Recursos/iconoU.svg';
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import '../Estilos/boton.css';
import Pregunta from "./Pregunta";
import ModulosGestor from "./ModulosGestor";
import CompetenciasGestor from "./CompetenciasGestor";
import Respuesta from "./Respuesta";
import Estadisticas from "./Estadisticas";
import CuerpoGestor from "./CuerpoGestor"
import EstadisticasGrupales from "./EstadisticasGrupales";
import db from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getRandomEmail() {
    var chars = 'abcdefghijklmnopqrstuvwxyz'; var string = ''; for (var ii = 0; ii < 15; ii++)
        string += chars[Math.floor(Math.random() * chars.length)];// Generates a random "Gmail"

    return string+"@uqvirtual.edu.co"
}
async function subirInformacion() {

    var materias = ['Informacion Contable',
        'Gestion de organizaciones',
        'Analisis Economico', "Conocimiento Digital",
        'Aprendizaje Continuo',
        'Comunicacion Digital',
        'Vision Estrategica',
        'Gestion de la informacion',
        'Liderazgo en red',
        'Orientacion al cliente',
        'Trabajo en red', 'Analisis y evolucion de sistemas',
        'Diseño y programacion de nuevas tecnologias',
        'Innovacion, Originalidad e iniciativa',
        'Inteligencia Emocional',
        'Liderazgo e influencia social',
        'Pensamiento Analitico',
        'Pensamiento Critico',
        'Solucion de problemas']
    for (let index = 0; index < 31; index++) {
        var correo = getRandomEmail()
        var estudiantes = await doc(db, `Estudiantes/${correo}`)
        setDoc(estudiantes, { nombre: correo })
        for (let index = 0; index < materias.length; index++) {
            const area = materias[index];
            var numeroAleatorio = getRandomInt(6)
            var estudiantes = await doc(db, `Estudiantes/${correo}/Notas/${area}`)
            setDoc(estudiantes, { nota: numeroAleatorio })
        }
    }

}
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
    document.getElementById('formularioRespuesta').style.display = 'block'
    document.getElementById('formEstadisticas').style.display = 'none'

}
/*Funcion para ocultar los elementos que pertenecen a todos los componentes menos estadisticas*/
function mostrarE(e) {
    document.getElementById('inicioGestor').style.display = 'none'
    document.getElementById('formularioPregunta').style.display = 'none'
    document.getElementById('formularioRespuesta').style.display = 'none'
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
                        <Navbar.Brand >ECCPI FCEAC 4.0<h6>Gestor</h6></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <button id="bModulos" class="btnMaterial" onClick={() => { mostrarI() }}>Modulos</button>
                                <button class="btnPregunta" onClick={(e) => { mostrarP(e) }}>Preguntas</button>
                                <button class="btnRespuesta" onClick={(e) => { mostrarR(e) }}>Respuestas</button>
                                <button class="btnRespuesta" onClick={(e) => { mostrarE(e) }}>Estadisticas</button>
                            </Nav>
                            <Profile />
                            <Nav>
                                <LogoutButton />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div id="inicioGestor">
                    <CompetenciasGestor />
                    <ModulosGestor />
                    <CuerpoGestor />

                </div>
                <Estadisticas />
                <EstadisticasGrupales />
                <Respuesta />
                <Pregunta />
                <button onClick={(e) => { subirInformacion(e) }}>Subir</button>
            </div>

        );
    }

}
import React, { Component } from "react";
import $ from 'jquery';
import { Navbar, Nav, NavDropdown, Container, ButtonGroup, Button, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import iconoU from './../Recursos/iconoU.svg';
import { useAuth0 } from "@auth0/auth0-react";
import Home from './Home';
import { LoginButton } from './Login';
import { LogoutButton } from "./Logout";
import './../Estilos/buttongroup.css';


/*Funcion para la interaccion y coneccion entre los botones de competencia*/

const identificar = (event) => {
    /*Se obtienen los elementos por medio del getElementById*/
    const boton1 = document.getElementById('btM1');
    const boton2 = document.getElementById('btM2');
    const boton3 = document.getElementById('btM3');
    if (event.target.id == "btC1") {
        boton1.innerText = 'Información contable';
        boton1.disabled = false;
        boton2.innerText = 'Gestión de organizaciones';
        boton2.disabled = false;
        boton3.innerText = 'Análisis económico';
        boton3.disabled = false;
    }
    else {
        if (event.target.id == "btC2") {
            boton1.innerText = 'Conocimiento digital';
            boton1.disabled = false;
            boton2.innerText = 'Comunicación  digital';
            boton2.disabled = false;
            boton3.innerText = 'Gestión de la información';
            boton3.disabled = false;
        }
        else {
            if (event.target.id == "btC3") {
                boton1.innerText = 'Pensamiento crítico';
                boton1.disabled = false;
                boton2.innerText = 'Pensamiento analítico';
                boton2.disabled = false;
                boton3.innerText = 'Resolución de problemas';
                boton3.disabled = false;
            }
        }
    }



}
class Competencias extends Component {

    render() {
        return (
            /*Estructura de grupo de botones de competencias*/
            <div id="comp" class="btn-group" role="group" aria-label="Basic example">
                <button id="btC1" onClick={(e) => { identificar(e) }} type="button" class="btn btn-success">Conocimiento</button>
                <button id="btC2" onClick={(e) => { identificar(e) }} type="button" class="btn btn-success">Competencias digitales</button>
                <button id="btC3" onClick={(e) => { identificar(e) }} type="button" class="btn btn-success">Actitud</button>
            </div>
        );
    }

}

export default Competencias;
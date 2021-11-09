import React, { Component } from "react";
import $ from 'jquery';
import { Navbar, Nav, NavDropdown, Container, ButtonGroup,Button,ToggleButton,ToggleButtonGroup } from "react-bootstrap";
import iconoU from './../Recursos/iconoU.svg';
import { useAuth0 } from "@auth0/auth0-react";
import Home from './Home';
import { LoginButton } from './Login';
import { LogoutButton } from "./Logout";
import './../Estilos/buttongroup.css';




const identificar = (event)=>{
    if(event.target.id=="btC1"){
        document.getElementById('btM1').innerText='1';
        document.getElementById('btM2').innerText='2';
        document.getElementById('btM3').innerText='3';
        console.log("El id del botón es"+event.target.id);
    }
    else{
        if(event.target.id=="btC2"){
            document.getElementById('btM1').innerText='4';
            document.getElementById('btM2').innerText='5';
            document.getElementById('btM3').innerText='6';
            console.log("El id del botón es"+event.target.id);
        }
        else{
            if(event.target.id=="btC3"){
                document.getElementById('btM1').innerText='7';
                document.getElementById('btM2').innerText='8';
                document.getElementById('btM3').innerText='9';
            }
        }
    }
   
        
        
}
class Competencias extends Component {
    
    render() {
        return (
            <div   class="btn-group" role="group" aria-label="Basic example">
            <button id="btC1" onClick={(e)=>{identificar(e)}} type="button" class="btn btn-success">Conocimiento</button>
            <button id="btC2" onClick={(e)=>{identificar(e)}} type="button" class="btn btn-success">Competencias digitales</button>
            <button id="btC3" onClick={(e)=>{identificar(e)}} type="button" class="btn btn-success">Actitud</button>
          </div>
        );
    }

}

export default Competencias;
import React, { Component, useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { Navbar, Nav, NavDropdown, Container, ButtonGroup, Button, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import './../Estilos/buttongroup.css';
import infCont1 from './../Recursos/img-informacionContable.jpg';
import db from "../firebaseConfig";

const modificarCont = (event) => {
    const boton1 = document.getElementById('btM1');
    const boton2 = document.getElementById('btM2');
    const boton3 = document.getElementById('btM3');
    const boton4 = document.getElementById('btM4');
    const boton5 = document.getElementById('btM5');
    const boton6 = document.getElementById('btM6');
    const boton7 = document.getElementById('btM7');
    const boton8 = document.getElementById('btM8');
    const check = document.getElementById('textoInfo');
    window.moduloAModificar="";
    
 
    const cuerpo = document.getElementById('cuerpoPrin');
    if (event.target.id == "btM1") {
        if (boton1.innerText == 'Información contable') {
            check.innerText="Usted ha elegido modificar la información de INFORMACION CONTABLE";
            cuerpo.style.display = 'block';
            window.moduloAModificar="Informacion Contable"
        }
        if (boton1.innerText == 'Conocimiento digital') {
            check.innerText="Usted ha elegido modificar la información de CONOCIMIENTO DIGITAL";
            cuerpo.style.display = 'block';
            window.moduloAModificar="Conocimiento Digital"
            
        }
        if (boton1.innerText == 'Pensamiento crítico') {
            check.innerText="Usted ha elegido modificar la información de PENSAMIENTO CRITICO";
            cuerpo.style.display = 'block';
            window.moduloAModificar="Pensamiento Critico"
            
        }
    }
    else {
        if (event.target.id == "btM2") {
            if (boton2.innerText == 'Gestión de organizaciones') {
                check.innerText="Usted ha elegido modificar la información de GESTION DE ORGANIZACIONES";
                cuerpo.style.display = 'block';
                window.moduloAModificar="Pensamiento Critico"
            }
            if (boton2.innerText == 'Comunicacion digital') {
                check.innerText="Usted ha elegido modificar la información de COMUNICACION DIGITAL";
                cuerpo.style.display = 'block';
                window.moduloAModificar="Comunicacion Digital"
            }
            if (boton2.innerText == 'Pensamiento analitico') {
                check.innerText="Usted ha elegido modificar la información de PENSAMIENTO ANALITICO";
                cuerpo.style.display = 'block';
                window.moduloAModificar="Pensamiento Analitico"
            }
        }
        else {
            if (event.target.id == "btM3") {

                if (boton3.innerText == 'Análisis económico') {
                    check.innerText="Usted ha elegido modificar la información de ANALISIS ECONOMICO";
                    cuerpo.style.display = 'block';
                    window.moduloAModificar="Analisis Economico"
                }
                if (boton3.innerText == 'Gestión de la información') {
                    check.innerText="Usted ha elegido modificar la información de GESTION DE LA INFORMACION";
                    cuerpo.style.display = 'block';
                    window.moduloAModificar="Gestion de la informacion"
                }
               
                if (boton3.innerText == 'Resolución de problemas') {
                    check.innerText="Usted ha elegido modificar la información de RESOLUCION DE PROBLEMAS";
                    cuerpo.style.display = 'block';
                    window.moduloAModificar="Solucion de problemas"
                }

            } else {
                if (event.target.id == "btM4") {
    
                    if (boton4.innerText == 'Innovacion,originalidad e iniciativa') {
                        check.innerText="Usted ha elegido modificar la información de INNOVACION, ORIGINALIDAD E INICIATIVA";
                        cuerpo.style.display = 'block';
                        window.moduloAModificar="Innovacion, Originalidad e iniciativa"
                    }
                    if (boton4.innerText == 'Liderazgo en red') {
                        check.innerText="Usted ha elegido modificar la información de LIDERAZGO EN RED";
                        cuerpo.style.display = 'block';
                        window.moduloAModificar="Liderazgo en red"
                    }
                   
    
                }
                else {
                    if (event.target.id == "btM5") {
        
                        if (boton5.innerText == 'Analisis y evolución de sistemas') {
                            check.innerText="Usted ha elegido modificar la información de ANALISIS Y EVOLUCION DE SISTEMAS";
                            cuerpo.style.display = 'block';
                            window.moduloAModificar="Analisis y evolucion de sistemas"
                        }
                        if (boton5.innerText == 'Trabajo en red') {
                            check.innerText="Usted ha elegido modificar la información de TRABAJO EN RED";
                            cuerpo.style.display = 'block';
                            window.moduloAModificar="Trabajo en red"
                        }
                       
        
                    }
                    else {
                        if (event.target.id == "btM6") {
            
                            if (boton6.innerText == 'Diseños y programación de nuevas tecnológicas') {
                                check.innerText="Usted ha elegido modificar la información de DISEÑOS Y PROGRAMACION DE NUEVAS TECNOLOGICAS";
                                cuerpo.style.display = 'block';
                                window.moduloAModificar="Diseño y programacion de nuevas tecnologias"
                            }
                            if (boton6.innerText == 'Aprendizaje continuo') {
                                check.innerText="Usted ha elegido modificar la información de APRENDIZAJE CONTINUO";
                                cuerpo.style.display = 'block';
                                window.moduloAModificar="Aprendizaje Continuo"
                            }
                           
            
                        }
                        else {
                            if (event.target.id == "btM7") {
                
                                if (boton7.innerText == 'Liderazgo e influencia social') {
                                    check.innerText="Usted ha elegido modificar la información de LIDERAZGO E INFLUENCIA SOCIAL";
                                    cuerpo.style.display = 'block';
                                    window.moduloAModificar="Liderazgo e influencia social"
                                }
                                if (boton7.innerText == 'Visión estratégica') {
                                    check.innerText="Usted ha elegido modificar la información de VISION ESTRATEGICA";
                                    cuerpo.style.display = 'block';
                                    window.moduloAModificar="Vision Estrategica"
                                }
                               
                
                            }
                            else {
                                if (event.target.id == "btM8") {
                    
                                    if (boton8.innerText == 'Inteligencia emocional') {
                                        check.innerText="Usted ha elegido modificar la información de GESTION DE INTELIGENCIA EMOCIONAL";
                                        cuerpo.style.display = 'block';
                                        window.moduloAModificar="Inteligencia Emocional"
                                    }
                                    if (boton8.innerText == 'Orientación al cliente') {
                                        check.innerText="Activar encuesta para ORIENTACION AL CLIENTE";
                                        cuerpo.style.display = 'block';
                                        window.moduloAModificar="Orientacion al cliente"
                                        
                                    }
                                   
                    
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
export default function Modulos() {
    return (
        <div>
        <div id="mod" class="btn-group" role="group" aria-label="Basic example">
            <button onClick={(e) => { modificarCont(e) }} id="btM1" type="button" class="btn btn-success"></button>
            <button onClick={(e) => { modificarCont(e) }} id="btM2" type="button" class="btn btn-success"></button>
            <button onClick={(e) => { modificarCont(e) }} id="btM3" type="button" class="btn btn-success"></button>
            <button onClick={(e) => { modificarCont(e) }} id="btM4" type="button" class="btn btn-success"></button>
            <button onClick={(e) => { modificarCont(e) }} id="btM5" type="button" class="btn btn-success"></button>
            <button onClick={(e) => { modificarCont(e) }} id="btM6" type="button" class="btn btn-success"></button>
            <button onClick={(e) => { modificarCont(e) }} id="btM7" type="button" class="btn btn-success"></button>
            <button onClick={(e) => { modificarCont(e) }} id="btM8" type="button" class="btn btn-success"></button>
        </div>
        </div>
    );

}
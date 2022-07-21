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
    
    const contLorem = document.getElementById('contLor');
    const contImg = document.getElementById('imgCont');
    const descTab1 = document.getElementById('desc1');
    const descTab2 = document.getElementById('desc2');
    const descTab3 = document.getElementById('desc3');
    const botonTab1 = document.getElementById('btnCP1');
    const botonTab2 = document.getElementById('btnCP2');
    const botonTab3 = document.getElementById('btnCP3');
    const cuerpo = document.getElementById('cuerpoPrin');
    const check= document.getElementById('moduloEncuesta');
    const alerta=document.getElementById('alerta');
    const botonEncuesta=document.getElementById('flexSwitchCheckDefault');

    if (event.target.id == "btM1") {
        if (boton1.innerText == 'Información contable') {
            contLorem.innerText = 'Este es el bloque de informacion contable';
            contImg.src = infCont1;
            descTab1.innerHTML = 'Tabla-inf contable';
            descTab2.innerHTML = 'Tabla2-inf contable';
            descTab3.innerHTML = 'Tabla3-inf contable';
            cuerpo.style.display = 'block';
            check.innerText="Activar encuesta para Informacion Contable";
            botonEncuesta.checked=false;   
        }
        if (boton1.innerText == 'Conocimiento digital') {
            contLorem.innerText = 'Este es el bloque de Conocimiento digital';
            contImg.src = "";
            descTab1.innerHTML = 'Tabla-Con digital';
            check.innerText="Activar encuesta para Conocimiento Digital";
            botonEncuesta.checked=false;
            
        }
        if (boton1.innerText == 'Pensamiento crítico') {
            contLorem.innerText = 'Este es el bloque de PC';
            contImg.src = "";
            cuerpo.style.display = 'block';
            check.innerText="Activar encuesta para Pensamiento Critico";
            botonEncuesta.checked=false;
            
        }
    }
    else {
        if (event.target.id == "btM2") {
            if (boton2.innerText == 'Gestión de organizaciones') {
                contLorem.innerHTML = 'Este es el bloque de Ges org';
                contImg.src = "";
                cuerpo.style.display = 'block';
                check.innerText="Activar encuesta para Gestion de organizaciones";
                botonEncuesta.checked=false;
            }
            if (boton2.innerText == 'Comunicacion digital') {
                contLorem.innerHTML = 'Este es el bloque de Com Digital';
                contImg.src = "";
                check.innerText="Activar encuesta para Comunicacion Digital";
                cuerpo.style.display = 'block';
                botonEncuesta.checked=false;
            }
            if (boton2.innerText == 'Pensamiento analítico') {
                contLorem.innerHTML = 'Este es el bloque de Pens analítico';
                contImg.src = "";
                check.innerText="Activar encuesta para Pensamiento Analítico";
                cuerpo.style.display = 'block';
                botonEncuesta.checked=false;
            }
        }
        else {
            if (event.target.id == "btM3") {

                if (boton3.innerText == 'Análisis económico') {
                    contLorem.innerHTML = 'Este es el bloque de Analis econ';
                    contImg.src = "";
                    cuerpo.style.display = 'block';
                    check.innerText="Activar encuesta para Analisis Economico";
                    botonEncuesta.checked=false;
                }
                if (boton3.innerText == 'Gestión de la información') {
                    contLorem.innerHTML = 'Este es el bloque de Ges inf';
                    contImg.src = "";
                    check.innerText="Activar encuesta para Gestion de la Informacion";
                    cuerpo.style.display = 'block';
                    botonEncuesta.checked=false;
                }
               
                if (boton3.innerText == 'Resolución de problemas') {
                    contLorem.innerHTML = 'Este es el bloque de Resolucion de Problemas';
                    contImg.src = "";
                    check.innerText="Activar encuesta para resolución de problemas";
                    cuerpo.style.display = 'block';
                    botonEncuesta.checked=false;
                }

            } else {
                if (event.target.id == "btM4") {
    
                    if (boton4.innerText == 'Innovacion,originalidad e iniciativa') {
                        contLorem.innerHTML = 'Este es el bloque de Innovacion,originalidad e iniciativa';
                        contImg.src = "";
                        cuerpo.style.display = 'block';
                        check.innerText="Activar encuesta para Innovacion,originalidad e iniciativa";
                        botonEncuesta.checked=false;
                    }
                    if (boton4.innerText == 'Liderazgo en red') {
                        contLorem.innerHTML = 'Este es el bloque de Liderazgo en red';
                        contImg.src = "";
                        check.innerText="Activar encuesta para Liderazgo en red";
                        cuerpo.style.display = 'block';
                        botonEncuesta.checked=false;
                    }
                   
    
                }
                else {
                    if (event.target.id == "btM5") {
        
                        if (boton5.innerText == 'Analisis y evolución de sistemas') {
                            contLorem.innerHTML = 'Este es el bloque de Analisis y evolución de sistemas';
                            contImg.src = "";
                            cuerpo.style.display = 'block';
                            check.innerText="Activar encuesta para Analisis y evolución de sistemas";
                            botonEncuesta.checked=false;
                        }
                        if (boton5.innerText == 'Trabajo en red') {
                            contLorem.innerHTML = 'Este es el bloque de Trabajo en red';
                            contImg.src = "";
                            check.innerText="Activar encuesta para Trabajo en red";
                            cuerpo.style.display = 'block';
                            botonEncuesta.checked=false;
                        }
                       
        
                    }
                    else {
                        if (event.target.id == "btM6") {
            
                            if (boton6.innerText == 'Diseños y programación de nuevas tecnológicas') {
                                contLorem.innerHTML = 'Este es el bloque de Diseños y programación de nuevas tecnológicas';
                                contImg.src = "";
                                cuerpo.style.display = 'block';
                                check.innerText="Activar encuesta para Diseños y programación de nuevas tecnológicas";
                                botonEncuesta.checked=false;
                            }
                            if (boton6.innerText == 'Aprendizaje continuo') {
                                contLorem.innerHTML = 'Este es el bloque de Aprendizaje continuo';
                                contImg.src = "";
                                check.innerText="Activar encuesta para Aprendizaje continuo";
                                cuerpo.style.display = 'block';
                                botonEncuesta.checked=false;
                            }
                           
            
                        }
                        else {
                            if (event.target.id == "btM7") {
                
                                if (boton7.innerText == 'Liderazgo e influencia social') {
                                    contLorem.innerHTML = 'Este es el bloque de Liderazgo e influencia social';
                                    contImg.src = "";
                                    cuerpo.style.display = 'block';
                                    check.innerText="Activar encuesta para Liderazgo e influencia social";
                                    botonEncuesta.checked=false;
                                }
                                if (boton7.innerText == 'Visión estratégica') {
                                    contLorem.innerHTML = 'Este es el bloque de Visión estratégica';
                                    contImg.src = "";
                                    check.innerText="Activar encuesta para Visión estratégica";
                                    cuerpo.style.display = 'block';
                                    botonEncuesta.checked=false;
                                }
                               
                
                            }
                            else {
                                if (event.target.id == "btM8") {
                    
                                    if (boton8.innerText == 'Inteligencia emocional') {
                                        contLorem.innerHTML = 'Este es el bloque de Inteligencia emocional';
                                        contImg.src = "";
                                        cuerpo.style.display = 'block';
                                        check.innerText="Activar encuesta para Inteligencia emocional";
                                        botonEncuesta.checked=false;
                                    }
                                    if (boton8.innerText == 'Orientación al cliente') {
                                        contLorem.innerHTML = 'Este es el bloque de Orientación al cliente';
                                        contImg.src = "";
                                        check.innerText="Activar encuesta para Orientación al cliente";
                                        cuerpo.style.display = 'block';
                                        botonEncuesta.checked=false;
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
    );

}
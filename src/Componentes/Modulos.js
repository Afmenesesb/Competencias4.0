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
    const mensaje=document.getElementById('mensajeExito');
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
            
            

        }
        if (boton1.innerText == 'Conocimiento digital') {
            contLorem.innerText = 'Este es el bloque de Conocimiento digital';
            contImg.src = "";
            descTab1.innerHTML = 'Tabla-Con digital';
            check.innerText="Activar encuesta para Conocimiento Digital";
            mensaje.textContent="";
            
            
        }
        if (boton1.innerText == 'Pensamiento crítico') {
            contLorem.innerText = 'Este es el bloque de PC';
            contImg.src = "";
            cuerpo.style.display = 'block';
            check.innerText="Activar encuesta para Pensamiento Critico";
            mensaje.style.display='block';
        }
    }
    else {
        if (event.target.id == "btM2") {
            if (boton2.innerText == 'Gestión de organizaciones') {
                contLorem.innerHTML = 'Este es el bloque de Ges org';
                contImg.src = "";
                check.innerText="Activar encuesta para Gestion de organizaciones";
            }
            if (boton2.innerText == 'Comunicación digital') {
                contLorem.innerHTML = 'Este es el bloque de Com Digital';
                contImg.src = "";
                check.innerText="Activar encuesta para Comunicacion Digital";
            }
            if (boton2.innerText == 'Pensamiento analítico') {
                contLorem.innerHTML = 'Este es el bloque de Pens analítico';
                contImg.src = "";
                check.innerText="Activar encuesta para Pensamiento Analitico";
            }


        }
        else {
            if (event.target.id == "btM3") {
                if (boton3.innerText == 'Análisis económico') {
                    contLorem.innerHTML = 'Este es el bloque de Analis econ';
                    contImg.src = "";
                    check.innerText="Activar encuesta para Analisis economico";
                }
                if (boton3.innerText == 'Gestión de la información') {
                    contLorem.innerHTML = 'Este es el bloque de Ges inf';
                    contImg.src = "";
                    check.innerText="Activar encuesta para Gestion de la Informacion";
                }
                if (boton3.innerText == 'Resolución de problemas') {
                    contLorem.innerHTML = 'Este es el bloque de Res problem';
                    contImg.src = "";
                    check.innerText="Activar encuesta para Resolucion de problemas";
                }

            }
        }
    }
}
export default function ModulosGestor() {

    const [pregunta, setPregunta] = useState([{ name: "Loading...", id: "initial" }]);

    useEffect(
        () =>
            onSnapshot(collection(db, "Pregunta"), (snapshot) =>
                setPregunta(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            ),
        []
    );
    return (
        <div class="btn-groupM" role="group" aria-label="Basic example">
            <button onClick={(e) => { modificarCont(e) }} id="btM1" type="button" class="btn btn-success"></button>
            <button onClick={(e) => { modificarCont(e) }} id="btM2" type="button" class="btn btn-success"></button>
            <button onClick={(e) => { modificarCont(e) }} id="btM3" type="button" class="btn btn-success"></button>
            <ul>
                {pregunta.map((p) => (
                    <li key={p.id}>
                        <a href="#">{p.texto}</a>
                    </li>
                ))}
            </ul>
        </div>
    );

}
import React, { Component, useState, useEffect } from "react";
import { setDoc, doc, getDoc, collection, query, getDocs, onSnapshot } from "firebase/firestore";
import db from "../firebaseConfig";
import './../Estilos/buttongroup.css';
import infCont1 from './../Recursos/img-informacionContable.jpg';


const modificarCont = async (event) => {
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
    const check = document.getElementById('moduloEncuesta');
    const alerta = document.getElementById('alerta');
    const botonEncuesta = document.getElementById('flexSwitchCheckDefault');
    var docRef = null;
    var snap = null;


    if (event.target.id == "btM1") {
        if (boton1.innerText == 'Información contable') {
            docRef = doc(db, "Modulo", "Informacion Contable");
            snap = await getDoc(docRef);
            contLorem.innerText = snap.get("Informacion");
            contImg.src = infCont1;
            cuerpo.style.display = 'block';
            check.innerText = "Activar encuesta para Informacion Contable";
            botonEncuesta.checked = false;
        }
        if (boton1.innerText == 'Conocimiento digital') {
            docRef = doc(db, "Modulo", "Conocimiento Digital");
            snap = await getDoc(docRef);
            contLorem.innerText = snap.get("Informacion");
            contImg.src = "";
            descTab1.innerHTML = 'Tabla-Con digital';
            check.innerText = "Activar encuesta para Conocimiento Digital";
            botonEncuesta.checked = false;

        }
        if (boton1.innerText == 'Pensamiento crítico') {
            docRef = doc(db, "Modulo", "Pensamiento Critico");
            snap = await getDoc(docRef);
            contLorem.innerText = snap.get("Informacion");
            contImg.src = "";
            cuerpo.style.display = 'block';
            check.innerText = "Activar encuesta para Pensamiento Critico";
            botonEncuesta.checked = false;

        }
    }
    else {
        if (event.target.id == "btM2") {
            if (boton2.innerText == 'Gestión de organizaciones') {
                docRef = doc(db, "Modulo", "Gestion de organizaciones");
                snap = await getDoc(docRef);
                contLorem.innerText = snap.get("Informacion");
                contImg.src = "";
                cuerpo.style.display = 'block';
                check.innerText = "Activar encuesta para Gestion de organizaciones";
                botonEncuesta.checked = false;
            }
            if (boton2.innerText == 'Comunicacion digital') {
                docRef = doc(db, "Modulo", "Comunicacion Digital");
                snap = await getDoc(docRef);
                contLorem.innerText = snap.get("Informacion");
                contImg.src = "";
                check.innerText = "Activar encuesta para Comunicacion Digital";
                cuerpo.style.display = 'block';
                botonEncuesta.checked = false;
            }
            if (boton2.innerText == 'Pensamiento analitico') {
                docRef = doc(db, "Modulo", "Pensamiento Analitico");
                snap = await getDoc(docRef);
                contLorem.innerText = snap.get("Informacion");
                contImg.src = "";
                check.innerText = "Activar encuesta para Pensamiento Analitico";
                cuerpo.style.display = 'block';
                botonEncuesta.checked = false;
            }
        }
        else {
            if (event.target.id == "btM3") {

                if (boton3.innerText == 'Análisis económico') {
                    docRef = doc(db, "Modulo", "Analisis Economico");
                    snap = await getDoc(docRef);
                    contLorem.innerText = snap.get("Informacion");
                    contImg.src = "";
                    cuerpo.style.display = 'block';
                    check.innerText = "Activar encuesta para Analisis Economico";
                    botonEncuesta.checked = false;
                }
                if (boton3.innerText == 'Gestión de la información') {
                    docRef = doc(db, "Modulo", "Gestion de la informacion");
                    snap = await getDoc(docRef);
                    contLorem.innerText = snap.get("Informacion");
                    contImg.src = "";
                    check.innerText = "Activar encuesta para Gestion de la Informacion";
                    cuerpo.style.display = 'block';
                    botonEncuesta.checked = false;
                }

                if (boton3.innerText == 'Resolución de problemas') {
                    docRef = doc(db, "Modulo", "Solucion de problemas");
                    snap = await getDoc(docRef);
                    contLorem.innerText = snap.get("Informacion");
                    contImg.src = "";
                    check.innerText = "Activar encuesta para resolución de problemas";
                    cuerpo.style.display = 'block';
                    botonEncuesta.checked = false;
                }

            } else {
                if (event.target.id == "btM4") {

                    if (boton4.innerText == 'Innovacion,originalidad e iniciativa') {
                        docRef = doc(db, "Modulo", "Innovacion, Originalidad e iniciativa");
                        snap = await getDoc(docRef);
                        contLorem.innerText = snap.get("Informacion");
                        contImg.src = "";
                        cuerpo.style.display = 'block';
                        check.innerText = "Activar encuesta para Innovacion,originalidad e iniciativa";
                        botonEncuesta.checked = false;
                    }
                    if (boton4.innerText == 'Liderazgo en red') {
                        docRef = doc(db, "Modulo", "Liderazgo en red");
                        snap = await getDoc(docRef);
                        contLorem.innerText = snap.get("Informacion");
                        contImg.src = "";
                        check.innerText = "Activar encuesta para Liderazgo en red";
                        cuerpo.style.display = 'block';
                        botonEncuesta.checked = false;
                    }


                }
                else {
                    if (event.target.id == "btM5") {

                        if (boton5.innerText == 'Analisis y evolución de sistemas') {
                            docRef = doc(db, "Modulo", "Analisis y evolucion de sistemas");
                            snap = await getDoc(docRef);
                            contLorem.innerText = snap.get("Informacion");
                            contImg.src = "";
                            cuerpo.style.display = 'block';
                            check.innerText = "Activar encuesta para Analisis y evolución de sistemas";
                            botonEncuesta.checked = false;
                        }
                        if (boton5.innerText == 'Trabajo en red') {
                            docRef = doc(db, "Modulo", "Trabajo en red");
                            snap = await getDoc(docRef);
                            contLorem.innerText = snap.get("Informacion");
                            contImg.src = "";
                            check.innerText = "Activar encuesta para Trabajo en red";
                            cuerpo.style.display = 'block';
                            botonEncuesta.checked = false;
                        }


                    }
                    else {
                        if (event.target.id == "btM6") {

                            if (boton6.innerText == 'Diseños y programación de nuevas tecnológicas') {
                                docRef = doc(db, "Modulo", "Diseño y programacion de nuevas tecnologias");
                                snap = await getDoc(docRef);
                                contLorem.innerText = snap.get("Informacion");
                                contImg.src = "";
                                cuerpo.style.display = 'block';
                                check.innerText = "Activar encuesta para Diseños y programación de nuevas tecnológicas";
                                botonEncuesta.checked = false;
                            }
                            if (boton6.innerText == 'Aprendizaje continuo') {
                                docRef = doc(db, "Modulo", "Aprendizaje Continuo");
                                snap = await getDoc(docRef);
                                contLorem.innerText = snap.get("Informacion");
                                contImg.src = "";
                                check.innerText = "Activar encuesta para Aprendizaje continuo";
                                cuerpo.style.display = 'block';
                                botonEncuesta.checked = false;
                            }


                        }
                        else {
                            if (event.target.id == "btM7") {

                                if (boton7.innerText == 'Liderazgo e influencia social') {
                                    docRef = doc(db, "Modulo", "Liderazgo e influencia social");
                                    snap = await getDoc(docRef);
                                    contLorem.innerText = snap.get("Informacion");
                                    contImg.src = "";
                                    cuerpo.style.display = 'block';
                                    check.innerText = "Activar encuesta para Liderazgo e influencia social";
                                    botonEncuesta.checked = false;
                                }
                                if (boton7.innerText == 'Visión estratégica') {
                                    docRef = doc(db, "Modulo", "Vision Estrategica");
                                    snap = await getDoc(docRef);
                                    contLorem.innerText = snap.get("Informacion");
                                    contImg.src = "";
                                    check.innerText = "Activar encuesta para Visión estratégica";
                                    cuerpo.style.display = 'block';
                                    botonEncuesta.checked = false;
                                }


                            }
                            else {
                                if (event.target.id == "btM8") {

                                    if (boton8.innerText == 'Inteligencia emocional') {
                                        docRef = doc(db, "Modulo", "Inteligencia Emocional");
                                        snap = await getDoc(docRef);
                                        contLorem.innerText = snap.get("Informacion");
                                        contImg.src = "";
                                        cuerpo.style.display = 'block';
                                        check.innerText = "Activar encuesta para Inteligencia emocional";
                                        botonEncuesta.checked = false;
                                    }
                                    if (boton8.innerText == 'Orientación al cliente') {
                                        docRef = doc(db, "Modulo", "Orientacion al cliente");
                                        snap = await getDoc(docRef);
                                        contLorem.innerText = snap.get("Informacion");
                                        contImg.src = "";
                                        check.innerText = "Activar encuesta para Orientación al cliente";
                                        cuerpo.style.display = 'block';
                                        botonEncuesta.checked = false;
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
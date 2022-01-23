import { formatMs } from "@material-ui/core";
import React, { Component, useState, useEffect } from "react";
import './../Estilos/encuesta.css';
import Cuerpo from "./Cuerpo";
import Formulario from "./Formulario";
import swal from 'sweetalert';
import db from "../firebaseConfig";
import { onSnapshot, collection, doc, getDoc } from "firebase/firestore";



export default function Encuestas() {
  window.bandCuest = null;
  const [modulo1, setModulo1] = useState(false);
  const [modulo2, setModulo2] = useState(false);
  const checkbtn = document.getElementById('moduloEncuesta');
  var pregModulo = [];
  var preguntas = [];
  var respuestas = [];
  var respuestasModulo = [];
  var contenidoRespuesta = "";
  var aleatorios = [];
  var aleatoriosRespuesta=[];
  const modificarForm = (event) => {
    const btn1 = document.getElementById('v-pills-con-tab');
    const btn2 = document.getElementById('v-pills-compdi-tab');
    const btn3 = document.getElementById('v-pills-act-tab');
    if (window.bandCuest == false) {
      swal(
        {
          title: "Realizando encuesta",
          text: "Se está realizando una encuesta",
          icon: "info",
          button: "Aceptar",
          timer: "5000"
        }
      );
    }
    else {

      swal(
        {
          title: "Comenzar encuesta",
          text: "No podrá salir de la encuesta hasta finalizar la misma",
          icon: "info",
          buttons: ["No", "Si"],
          timer: "5000"
        }
      ).then(respuesta => {
        if (respuesta) {
          btn1.disabled = true;
          btn2.disabled = true;
          btn3.disabled = true;
          window.bandCuest = false;
          swal({
            text: "Ha iniciado la encuesta",
            icon: "success"

          })
          const formula = document.getElementById('divForm');
          formula.style.display = 'block';
          event.target.disabled = true;
        }
      });
    }





  }
  const [pregunta, setPregunta] = useState([{ name: "Loading...", id: "initial" }]);
  const [respuesta, setRespuesta] = useState([{ name: "Loading...", id: "initial" }]);

  useEffect(
    () =>
      onSnapshot(collection(db, "Pregunta"), (snapshot) =>
        setPregunta(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  const obtenerRespuestas = async (ref, inicio) => {
    var document = await getDoc(ref);
    var contenido = document.get("texto");
    contenidoRespuesta = contenido;
    respuestasModulo.push(contenidoRespuesta);

    if ((respuestasModulo.length%4)==0) {
      var inicial = 4 * inicio;
      var final =inicial+4;
      console.log(final);
      console.log(inicial);
      console.log(respuestasModulo.length);
      llenarArregloRespuestasAleatorias(respuestasModulo.length);
      console.log(aleatoriosRespuesta);
      console.log(respuestasModulo);
      for (let step = inicial; step < final; step++) {
        var posicion = aleatoriosRespuesta[0];
        respuestas[step].innerText = respuestasModulo[posicion];
        aleatoriosRespuesta.splice(0,1);
        console.log(aleatoriosRespuesta);
      }
    }

  }

  const añadirRespuestas = (modulo, numPreguntas, inicio) => {

    for (let index2 = 0; index2 < 4; index2++) {
      const docRef2 = doc(db, "Modulo", modulo, "Preguntas", "Pregunta" + numPreguntas, "Respuestas", "Respuesta" + (index2 + 1));
      console.log("entra");
      obtenerRespuestas(docRef2, inicio);
    }

  }
  const llenarArregloRespuestasAleatorias = (numeroRespuestas) => {

    var inicio=numeroRespuestas-4;
    for (let index = inicio; index < numeroRespuestas; index++) {
      aleatoriosRespuesta.push(index);
    }
    var i, j, k;
    for (i = aleatoriosRespuesta.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = aleatoriosRespuesta[i - 1];
      aleatoriosRespuesta[i - 1] = aleatoriosRespuesta[j];
      aleatoriosRespuesta[j] = k;
    }
  }
  const llenarArregloPreguntasAleatorias = (numeroPreg) => {
    for (let index = 0; index < numeroPreg; index++) {
      aleatorios.push(index);
    }
    var i, j, k;
    for (i = aleatorios.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = aleatorios[i - 1];
      aleatorios[i - 1] = aleatorios[j];
      aleatorios[j] = k;
    }
  }
  const añadirPreguntas = async (modulo) => {

    var snap = null;

    for (let index = 0; index < 5; index++) {
      const docRef = doc(db, "Modulo", modulo, "Preguntas", "Pregunta" + (index + 1));
      snap = await getDoc(docRef);
      console.log(snap.get("texto"));
      pregModulo.push(snap.get("texto"));
    }
    llenarArregloPreguntasAleatorias(pregModulo.length);
    console.log(aleatorios);
    var aux = pregModulo.length;
    for (let step = 0; step < aux; step++) {
      var posicion = aleatorios[step];
      preguntas[posicion].innerText = (step + 1) + ") " + pregModulo[step];
      añadirRespuestas(modulo, (step + 1), aleatorios[step]);
    }


  }
  const modificarModulos = (event) => {


    const formul = document.getElementById('v-pills-tabContent');
    formul.style.display = 'block';


    const moduloPregunta = document.getElementById('moduloEncuesta');
    const modulo = moduloPregunta.innerText.substring(22);


    for (let step = 1; step < 6; step++) {

      const aux = document.getElementById('pregunta' + step);
      preguntas.push(aux);

    }
    for (let step = 1; step < 21; step++) {

      const aux = document.getElementById('respuesta' + step);
      respuestas.push(aux);

    }

    añadirPreguntas(modulo);


  }
  return (
    <div id="menuEncuesta" class="mencuesta">

      <div class="nav flex-column nav-pills me-3" id="botones" role="tablist" aria-orientation="vertical">
        <h2 id="area">AREAS</h2>
        <button class="btn btn-success" onClick={(e) => { modificarModulos(e) }} id="v-pills-con-tab" data-bs-toggle="pill" data-bs-target="#v-pills-con" type="button" role="tab" aria-controls="v-pills-con" aria-selected="true" >Conocimiento</button>
        <button class="btn btn-success" onClick={(e) => { modificarModulos(e) }} id="v-pills-compdi-tab" data-bs-toggle="pill" data-bs-target="#v-pills-compdi" type="button" role="tab" aria-controls="v-pills-compdi" aria-selected="true">Competencias digitales</button>
        <button class="btn btn-success" onClick={(e) => { modificarModulos(e) }} id="v-pills-act-tab" data-bs-toggle="pill" data-bs-target="#v-pills-act" type="button" role="tab" aria-controls="v-pills-act" aria-selected="true">Actitud</button>
      </div>
      <div class="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-con" role="tabpanel" aria-labelledby="v-pills-con-tab">
          <h2 id="modulo">MODULOS</h2>
          <button onClick={(e) => { modificarForm(e) }} class="btn1" id="v-pills-infcont-tab" data-bs-toggle="pill" data-bs-target="#v-pills-infcont" type="button" role="tab" aria-controls="v-pills-infcont" aria-selected="true" >Informacion contable</button>
          <button onClick={(e) => { modificarForm(e) }} class="btn1" id="v-pills-gesorg-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gesorg" type="button" role="tab" aria-controls="v-pills-gesorg" aria-selected="true" >Gestión de organizaciones</button>
          <button onClick={(e) => { modificarForm(e) }} class="btn1" id="v-pills-anec-tab" data-bs-toggle="pill" data-bs-target="#v-pills-anec" type="button" role="tab" aria-controls="v-pills-anec" aria-selected="true" >Análisis económico</button>
        </div>
        <div class="tab-pane fade" id="v-pills-compdi" role="tabpanel" aria-labelledby="v-pills-profile-tab">
          <h2 id="modulo">MODULOS</h2>
          <button onClick={(e) => { modificarForm(e) }} class="btn1" id="v-pills-contdig-tab" data-bs-toggle="pill" data-bs-target="#v-pills-contdig" type="button" role="tab" aria-controls="v-pills-contdig" aria-selected="true" >Conocimiento digital</button>
          <button onClick={(e) => { modificarForm(e) }} class="btn1" id="v-pills-comdig-tab" data-bs-toggle="pill" data-bs-target="#v-pills-comdig" type="button" role="tab" aria-controls="v-pills-comdig" aria-selected="true" >Comunicación digital</button>
          <button onClick={(e) => { modificarForm(e) }} class="btn1" id="v-pills-gesin-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gesin" type="button" role="tab" aria-controls="v-pills-gesin" aria-selected="true" >Gestión de la información</button>
        </div>
        <div class="tab-pane fade" id="v-pills-act" role="tabpanel" aria-labelledby="v-pills-act-tab">
          <h2 id="modulo">MODULOS</h2>
          <button onClick={(e) => { modificarForm(e) }} class="btn1" id="v-pills-pencri-tab" data-bs-toggle="pill" data-bs-target="#v-pills-pencri" type="button" role="tab" aria-controls="v-pills-pencri" aria-selected="true" >Pensamiento crítico</button>
          <button onClick={(e) => { modificarForm(e) }} class="btn1" id="v-pills-penana-tab" data-bs-toggle="pill" data-bs-target="#v-pills-penana" type="button" role="tab" aria-controls="v-pills-penana" aria-selected="true" >Pensamiento Analítico</button>
          <button onClick={(e) => { modificarForm(e) }} class="btn1" id="v-pills-respro-tab" data-bs-toggle="pill" data-bs-target="#v-pills-respro" type="button" role="tab" aria-controls="v-pills-respro" aria-selected="true" >Resolución de problemas</button></div>
      </div>
      <br />
      <div id="divForm" class="form">
        <Formulario />
      </div>
    </div>

  );
}





import { setDoc, doc, collection} from "firebase/firestore";
import React, { Component, useState } from "react";
import db from "../firebaseConfig";
import swal from 'sweetalert';
import '../Estilos/estadisticas.css';

const mostrarEstadisticaI= (e) => {
    document.getElementById('bloqueIndividual').style.display = 'block'
    document.getElementById('bloqueGrupal').style.display = 'none'
  }
  const mostrarEstadisticaG= (e) => {
    document.getElementById('bloqueIndividual').style.display = 'none'
    document.getElementById('bloqueGrupal').style.display = 'block'
  }
export default function Estadisticas() {
    return (
        <div id="formEstadisticas">
       <div id="btnsGrafica" class="btn-group1" role="group" aria-label="Basic example">
        <h2 id="tituloEstadisticas">ESTADISTICAS</h2>
        <button  id="btEI" onClick={(e) => {mostrarEstadisticaI(e)}} type="button" class="btn btn-success">Estadisticas INDIVIDUALES</button>
        <button  id="btEG" onClick={(e) => {mostrarEstadisticaG(e)}} type="button" class="btn btn-success">Estadisticas GRUPALES</button>
      </div>
      <div id="bloqueIndividual">
      <textarea id="textoBusqueda"placeholder="Ingrese el correo... "></textarea>
      <button id="botonBuscar" class="btn btn-warning">Buscar</button> 
      </div>
      <div id="bloqueGrupal">
      <h2 id="tituloEstadisticas">AREA</h2>
        <button  id="btEI" type="button" class="btn btn-success">Competencia</button>
        <button  id="btEG" type="button" class="btn btn-success">Conocimiento</button>
        <button  id="btEI" type="button" class="btn btn-success">Actitud</button>

      </div>
        </div>
    );

}
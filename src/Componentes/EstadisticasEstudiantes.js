import { setDoc, doc, collection } from "firebase/firestore";
import React, { Component, useState } from "react";
import db from "../firebaseConfig";
import swal from 'sweetalert';
import '../Estilos/estIndividual.css';
import DiagramaRadar from "./Radar";

function estadisticaActi(e) {

}
function estadistica(e) {

}
export default function EstadisticasEstudiantes() {
    return (
        <div id="estadisticasEstudiantes" class="mencuesta">
            
            <div>Hola mundo</div>
            <DiagramaRadar/>
        </div>


    );


}
import React, { Component, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import './../Estilos/cuerpo.css';
import infCont from './../Recursos/img-informacionContable.jpg';
import Table from 'react-bootstrap/Table';
import swal from 'sweetalert';
import db from "../firebaseConfig";
import { onSnapshot, collection, doc, setDoc } from "firebase/firestore";


/*const verificarEncuestas= () => {

    const encuestas= doc(db, "Estudiantes");


}*/
const subirInformacion = (event) => {
    
    swal(
        {
            text:"Se ha subido la informacion al modulo seleccionado:"
        }
    )
guardarInfo();

}
const guardarInfo = async () => {


    await setDoc(doc(db, "Modulo", window.moduloAModificar), {
        Informacion:document.getElementById('textoSubir').value
    });
}
export default function CuerpoGestor() {

    /*Constantes para manejar el estado de visibilidad de los mensajes de alerta*/
    const [visibilidadAlert, setVisibilidadAlert] = useState(false);
    const modificarForm = () => {
        const formula = document.getElementById('divForm');
        formula.style.display = 'block';

    }
    const modificarEstado = () => {
    }

    
    return (
        <div id="cuerpoPrin" class="cuerpo">
            <text id="textoInfo"></text>
            <form id="formCuerpoGestor">
                <textarea id="textoSubir"placeholder="Ingrese el texto"></textarea>
            </form>
            <button id="botonSubir" class="btn btn-warning" onClick={(e) => { subirInformacion(e) }}>Subir informacion</button> 
        </div>
    );
}

    
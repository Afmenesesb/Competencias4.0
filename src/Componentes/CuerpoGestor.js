import React, { Component, useState } from "react";
import {getStorage,ref,uploadBytes}from 'firebase/storage';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import './../Estilos/cuerpo.css';
import infCont from './../Recursos/img-informacionContable.jpg';
import Table from 'react-bootstrap/Table';
import swal from 'sweetalert';
import db, { storage } from "../firebaseConfig";
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
function uploadFile(file){
        if(file==undefined){
            swal({
                text:"Debe elegir una imagen"
            })
        }
        else{
            const storageRef = ref(storage,'imagen-'+window.moduloAModificar)
            uploadBytes(storageRef,file).then(snapshot=>{
            console.log(snapshot)
        })
        }
       
    }
function uploadFile1(file){
    if(file==undefined){
        swal({
            text:"Debe elegir un archivo"
        })
    }
    else{
        const storageRef = ref(storage,'archivo1-'+window.moduloAModificar)
        uploadBytes(storageRef,file).then(snapshot=>{
        console.log(snapshot)
    })
    }
}
function uploadFile2(file){
    if(file==undefined){
        swal({
            text:"Debe elegir un archivo"
        })
    }
    else{
        const storageRef = ref(storage,'archivo2-'+window.moduloAModificar)
        uploadBytes(storageRef,file).then(snapshot=>{
        console.log(snapshot)
    })
    }
}
function uploadFile3(file){
    if(file==undefined){
        swal({
            text:"Debe elegir un archivo"
        })
    }
    else{
        const storageRef = ref(storage,'archivo3-'+window.moduloAModificar)
        uploadBytes(storageRef,file).then(snapshot=>{
        console.log(snapshot)
    })
    }
}
export default function CuerpoGestor() {

    return (
        <div id="cuerpoPrin" class="cuerpo">
            <text id="textoInfo"></text>
            <form id="formCuerpoGestor">
                <textarea id="textoSubir"placeholder="Ingrese el texto"></textarea>
            </form >
            <button id="botonSubir" class="btn btn-warning" onClick={(e) => { subirInformacion(e) }}>Subir informacion</button>
            <div>
            <input type="file" name="" onChange={e =>uploadFile(e.target.files[0])}></input>
            <input type="file" name="" onChange={e =>uploadFile1(e.target.files[0])}></input>
            <input type="file" name="" onChange={e =>uploadFile2(e.target.files[0])}></input>
            <input type="file" name="" onChange={e =>uploadFile3(e.target.files[0])}></input>
            </div>
           
    
        </div>
    );
}

    
import { ref, uploadBytes } from 'firebase/storage';
import './../Estilos/cuerpo.css';
import swal from 'sweetalert';
import db, { storage } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";


/*Funcion para que el gestor suba informacion a los modulos*/
const subirInformacion = (event) => {

    swal(
        {
            text: "Se ha subido la informacion al modulo seleccionado:"
        }
    )
    guardarInfo();

}
/*Funcion la cual sube la informacion a la base de datos*/
const guardarInfo = async () => {


    await setDoc(doc(db, "Modulo", window.moduloAModificar), {
        Informacion: document.getElementById('textoSubir').value
    });
}

/*Funcion para que el gestor suba una imagen al modulo*/
function uploadFile(file) {
    if (file == undefined) {
        swal({
            text: "Debe elegir una imagen"
        })
    }
    else {
        const storageRef = ref(storage, 'imagen-' + window.moduloAModificar)
        uploadBytes(storageRef, file).then(snapshot => {
        })
    }

}
/*Funcion para que el gestor suba un archivo al modulo*/
function uploadFile1(file) {
    if (file == undefined) {
        swal({
            text: "Debe elegir un archivo"
        })
    }
    else {
        const storageRef = ref(storage, 'archivo1-' + window.moduloAModificar)
        uploadBytes(storageRef, file).then(snapshot => {
        })
    }
}
/*Funcion para que el gestor suba el segundo archivo*/
function uploadFile2(file) {
    if (file == undefined) {
        swal({
            text: "Debe elegir un archivo"
        })
    }
    else {
        const storageRef = ref(storage, 'archivo2-' + window.moduloAModificar)
        uploadBytes(storageRef, file).then(snapshot => {

        })
    }
}
/*Funcion para que el gestor suba el tercer archivo*/
function uploadFile3(file) {
    if (file == undefined) {
        swal({
            text: "Debe elegir un archivo"
        })
    }
    else {
        const storageRef = ref(storage, 'archivo3-' + window.moduloAModificar)
        uploadBytes(storageRef, file).then(snapshot => {
        })
    }
}

/*Componentes html*/
export default function CuerpoGestor() {

    return (

        /*pantalla para subir informacion por parte del gestor de conocimiento*/
        <div id="cuerpoPrin" class="cuerpo">
            <div id="contenedorInfo">
                <text id="textoInfo" ></text>
            </div>

            <form id="formCuerpoGestor">
                <textarea id="textoSubir" placeholder="Ingrese el texto"></textarea>
            </form >
            <button id="botonSubir" class="btn btn-warning" onClick={(e) => { subirInformacion(e) }}>Subir informacion</button>
            <h2 id="area">SUBIR IMAGEN DE PRESENTACION DE MODULO</h2>
            <input type="file" id="imagen" name="" onChange={e => uploadFile(e.target.files[0])}></input>
            <h2 id="area">SUBIR DOCUMENTOS DE APOYO PARA LOS MODULOS</h2>
            <input type="file" id="archivo1" name="" onChange={e => uploadFile1(e.target.files[0])}></input>
            <h2></h2>
            <input type="file" id="archivo2" name="" onChange={e => uploadFile2(e.target.files[0])}></input>
            <h2></h2>
            <input type="file" id="archivo3" name="" onChange={e => uploadFile3(e.target.files[0])}></input>



        </div>
    );
}


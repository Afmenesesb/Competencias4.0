import { setDoc, doc, collection, getDocs, getDoc } from "firebase/firestore";
import React, { Component, useState } from "react";
import '../Estilos/respuesta.css';
import db from "../firebaseConfig";
import swal from 'sweetalert';


var respuestasPregunta = [];
var id = "Respuesta";
var numeroRespuestas = 0;

export default function Respuesta() {

    const agregarRes = async (values) => {
        /*Referencia de la coleccion o tabla donde queremos insertar*/
        try {
            const querySnapshot2 = await getDocs(collection(db, "Modulo", values.idModulo, "Preguntas", values.idPregunta, "Respuestas"));
            querySnapshot2.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                respuestasPregunta.push(doc);
            });
            var cantidad = (respuestasPregunta.length + 1);
            id = "Respuesta" + cantidad;

            const citiesRef = collection(db, "Modulo", values.idModulo, "Preguntas", values.idPregunta, "Respuestas");
            /*Insertamos los valores en la tabla*/
            await setDoc(doc(citiesRef, id), {
                texto: values.contenido, valor: values.valor
            });
            numeroRespuestas++;
        }
        catch (error) {

            const citiesRef = collection(db, "Modulo", values.idModulo, "Preguntas", values.idPregunta, "Respuestas");
            id = id + 1;
            /*Insertamos los valores en la tabla*/
            await setDoc(doc(citiesRef, id), {
                texto: values.contenido, valor: values.valor
            });

        }

        /*Reiniciamos los campos para que queden limpios*/
        swal(
            {
                title: "Respuesta guardada correctamente",
                text: "La pregunta cuenta actualmente con " + numeroRespuestas + " respuestas",
                icon: "success",
                button: "Aceptar",
                timer: "8000"
            }
        );
        respuestasPregunta=[];
        setValues({ ...initialValues});
    }
    const initialValues = {

        idModulo: '',
        idPregunta: '',
        contenido: '',
        valor: ''
    };
    const [values, setValues] = useState(initialValues);
    const handleSumit = e => {
        /*preventDefault se utiliza para cancelar el refresh de la pagina*/
        e.preventDefault();

        /*muestro los valores al dar en el boton gracuas al onSumit del from*/

        setValues({ ...initialValues });
    }
    const handleInputChange = e => {
        /*muestro el cambio en el input*/
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }



    return (
        <div id="formularioRespuesta">
            <form class="form1" onSubmit={handleSumit}>

                <div class="mb-3">
                    <label for="exampleInputTexto2" class="form-label">Nombre del Modulo</label>
                    <input id="idModulo" value={values.idModulo} onChange={handleInputChange} type="text" class="form-control" name="idModulo" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputTexto2" class="form-label">Id de la pregunta</label>
                    <input id="idPregunta" value={values.idPregunta} onChange={handleInputChange} type="text" class="form-control" name="idPregunta" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputTexto1" class="form-label">Texto de la respuesta</label>
                    <input id="idTexto" value={values.contenido} onChange={handleInputChange} type="text" class="form-control" name="contenido" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputTexto1" class="form-label">Valor de la respuesta(true o false)</label>
                    <input id="idTexto" value={values.valor} onChange={handleInputChange} type="text" class="form-control" name="valor" />
                </div>
                <button id="btnGuardarR" type="button" class="btn btn-success" onClick={(e) => { agregarRes(values) }}>Guardar</button>
            </form>

        </div>


    );
}
import { setDoc, doc, collection} from "firebase/firestore";
import React, { Component, useState } from "react";
import '../Estilos/respuesta.css';
import db from "../firebaseConfig";
import swal from 'sweetalert';


export default function Respuesta() {

    const initialValues = {

        idRespuesta: '',
        idPregunta: '',
        contenido: '',
        valor: ''
    };
    const [values, setValues] = useState(initialValues);
    const handleSumit = e => {
        /*preventDefault se utiliza para cancelar el refresh de la pagina*/
        e.preventDefault();

        /*muestro los valores al dar en el boton gracuas al onSumit del from*/
        console.log(values);
        agregarRes(values);
    }
    const handleInputChange = e => {
        /*muestro el cambio en el input*/
        console.log(e.target.value);
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    const agregarRes = async (values) => {
        /*Referencia de la coleccion o tabla donde queremos insertar*/
        const citiesRef = collection(db, "Respuesta");

        /*Insertamos los valores en la tabla*/
        await setDoc(doc(citiesRef,values.idRespuesta ), {
            idPregunta: values.idPregunta, texto: values.contenido, valor: values.valor
        });
        /*Reiniciamos los campos para que queden limpios*/
        setValues({ ...initialValues});
        swal(
            {
                title: "Pregunta",
                text: "!La pregunta se ha guardado exitosamente ¡",
                icon: "success",
                button: "Aceptar",
                timer: "8000"
            }
        );
    }

    return (
        <div id="formularioRespuesta">
            <form class="form1" onSubmit={handleSumit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Id de respuesta</label>
                    <input id="idPregunta" value={values.idRespuesta} onChange={handleInputChange} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="idRespuesta" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputTexto2" class="form-label">Id de la pregunta</label>
                    <input id="idEncuesta" value={values.idPregunta} onChange={handleInputChange} type="text" class="form-control" id="exampleInputPassword1" name="idPregunta" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputTexto1" class="form-label">Texto de la respuesta</label>
                    <input id="idTexto" value={values.contenido} onChange={handleInputChange} type="text" class="form-control" id="exampleInputPassword1" name="contenido" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputTexto1" class="form-label">Valor de la respuesta</label>
                    <input id="idTexto" value={values.valor} onChange={handleInputChange} type="text" class="form-control" id="exampleInputPassword1" name="valor" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button id="btnGuardar" type="submit" class="btn btn-success">Guardar</button>
            </form>

        </div>


    );
}
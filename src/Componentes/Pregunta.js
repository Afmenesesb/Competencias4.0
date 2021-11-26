import { setDoc, doc, collection} from "firebase/firestore";
import React, { Component, useState } from "react";
import '../Estilos/gestorPregunta.css';
import db from "../firebaseConfig";

export default function Pregunta() {



    const initialValues = {

        id: '',
        encuesta: '',
        contenido: ''
    };
    const [values, setValues] = useState(initialValues);
    const handleSumit = e => {
        /*preventDefault se utiliza para cancelar el refresh de la pagina*/
        e.preventDefault();

        /*muestro los valores al dar en el boton gracuas al onSumit del from*/
        console.log(values);
        agregarPreg(values);
    }
    const handleInputChange = e => {
        /*muestro el cambio en el input*/
        console.log(e.target.value);
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    const agregarPreg = async (values) => {
        /*Referencia de la coleccion o tabla donde queremos insertar*/
        const citiesRef = collection(db, "Pregunta");

        /*Insertamos los valores en la tabla*/
        await setDoc(doc(citiesRef,values.id ), {
            idEncuesta: values.encuesta, texto: values.contenido
        });
        /*Reiniciamos los campos para que queden limpios*/
        setValues({ ...initialValues});
        console.log("que viva el vicio hptaa");
    }

    return (
        <div>
            <form class="form1" onSubmit={handleSumit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Id de la pregunta</label>
                    <input id="idPregunta" value={values.id} onChange={handleInputChange} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="id" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputTexto2" class="form-label">id de la Encuesta</label>
                    <input id="idEncuesta" value={values.encuesta} onChange={handleInputChange} type="text" class="form-control" id="exampleInputPassword1" name="encuesta" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputTexto1" class="form-label">Texto de la pregunta</label>
                    <input id="idTexto" value={values.contenido} onChange={handleInputChange} type="text" class="form-control" id="exampleInputPassword1" name="contenido" />
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
import { setDoc, doc, collection, query, QuerySnapshot, getDoc, getDocs } from "firebase/firestore";
import React, { Component, useState } from "react";
import '../Estilos/gestorPregunta.css';
import db from "../firebaseConfig";
import swal from 'sweetalert';

var preguntasModulo = [];



export default function Pregunta() {
    const agregarPreg = async (values) => {

        /*Referencia de la coleccion o tabla donde queremos insertar*/
        const querySnapshot = await getDocs(collection(db, "Modulo", values.modulo, "Preguntas"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            preguntasModulo.push(doc);
        });
    
        var id= "Pregunta" + (preguntasModulo.length + 1);
    
        const citiesRef = collection(db, "Modulo", values.modulo, "Preguntas");
    
        /*Insertamos los valores en la tabla*/
        await setDoc(doc(citiesRef, id), {
            texto: values.contenido
        });

        swal(
            {
                title: "La pregunta se guardo exitosamente",
                text: "recuerde el id de la pregunta: " + id,
                icon: "success",
                button: "Aceptar",
                timer: "12000"
            }
        );
        /*Reiniciamos los campos para que queden limpios*/
    
        limpiar();
        preguntasModulo=[];    
    }

    const limpiar=()=>{
        setValues({ ...initialValues});
       
    }
    const initialValues = {

        id: '',
        modulo: '',
        contenido: ''
    };
    const [values, setValues] = useState(initialValues);
    const handleSumit = e => {
        /*preventDefault se utiliza para cancelar el refresh de la pagina*/
        e.preventDefault();

        /*muestro los valores al dar en el boton gracuas al onSumit del from*/
        console.log(values);
        setValues({ ...initialValues });
    }
    const handleInputChange = e => {
        /*muestro el cambio en el input*/
        console.log(e.target.value);
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }
    return (
        <div id="formularioPregunta" >
            <form class="form1" onSubmit={handleSumit}>
                <div class="mb-3">
                    <label for="exampleInputTexto2" class="form-label">Nombre del modulo</label>
                    <input id="idmodulo" value={values.modulo} onChange={handleInputChange} type="text" class="form-control" name="modulo" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputTexto1" class="form-label">Texto de la pregunta</label>
                    <input id="idTexto" value={values.contenido} onChange={handleInputChange} type="text" class="form-control" name="contenido" />
                </div>
                <button id="btnGuardar" type="button" class="btn btn-success" onClick={(e) => { agregarPreg(values) }}>Guardar</button>
            </form>

        </div>


    );

}
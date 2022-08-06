import React, { Component, useState, useEffect } from "react";
import swal from 'sweetalert';
import Encuestas from "./Encuestas";
import db from "../firebaseConfig";
import { onSnapshot, collection, doc, setDoc } from "firebase/firestore";
import './../Estilos/formulario.css';
import { useAuth0 } from '@auth0/auth0-react';


var usuario = "";
var email = "";
var contador = 0;

export const identificarCalificacion= () => {
    var cal= "Su calificacion es :";
    return(cal);
  }



const ConteoRespuestas = (event) => {
    usuario = document.getElementById('usuario').innerText;
    email = document.getElementById('email').innerText;
    const btn1 = document.getElementById('v-pills-con-tab');
    const btn2 = document.getElementById('v-pills-compdi-tab');
    const btn3 = document.getElementById('v-pills-act-tab');
    var auxChecked = document.getElementById('cantPreguntas');
    var pregChecked = auxChecked.innerText.substring(25, 26);
    var contador2 = 0;
    contador=0;



    console.log(pregChecked);
    const terminarEncuesta = () => {

        for (let index = 0; index < pregChecked; index++) {

            var checked_pregunta = document.querySelector('input[name = "pregunta' + (index + 1) + '"]:checked');
            if (checked_pregunta != null) {
                checked_pregunta.checked = false;
            }


        }
        const formula = document.getElementById('divForm');
        formula.style.display = 'none';
        btn1.disabled = false;
        btn2.disabled = false;
        btn3.disabled = false;
        window.bandCuest = null;


        guardarInfo();
        guardarNota();

        /* ciclo con el fin de ocultar las preguntas de los modulos que tienen menos de 5 preguntas*/
        for (let index = 3; index < 6; index++) {

            var texto = document.getElementById('pregunta' + index);
            if (texto.style.display = 'none') {
                texto.style.display = 'block';
            }

            /*ciclo para ocultar las respuestas a las preguntas del formulario que no se le dieron valores*/
            for (let index2 = 1; index2 < 5; index2++) {
                var aux2 = document.getElementById('respuesta' + index + '.' + index2);
                if (aux2.style.display = 'none') {
                    aux2.style.display = 'block';
                }

            }
        }

    }

    for (let index = 0; index < pregChecked; index++) {

        var checked_pregunta = document.querySelector('input[name = "pregunta' + (index + 1) + '"]:checked');
        if (checked_pregunta == null) {
            console.log("que pasa");
            swal(
                {
                    title: "Error de selección",
                    text: "Debe seleccionar mínimo una respuesta para cada pregunta",
                    icon: "warning",
                    button: "Aceptar",
                    timer: "8000"
                }
            );
        }
        else {
            if (checked_pregunta.value == "C") {
                contador++;
            }
            contador2++;
        }


    }
    console.log(contador2);
    if (contador2 == pregChecked) {
        swal(
            {
                title: "Terminó la encuesta",
                text: usuario + " Usted ha tenido " + contador + " respuestas correctas",
                icon: "success",
                button: "Aceptar",
                timer: "8000"
            }
        );
        terminarEncuesta();
    }

    


}
const guardarInfo = async () => {


    await setDoc(doc(db, "Estudiantes", email), {
        nombre: usuario
    });
}
const guardarNota = async () => {


    await setDoc(doc(db, "Estudiantes", email, "Notas", window.modulo), {
        nota: contador
    });
    console.log("se guardo");
    contador = 0;
}



export default function Formulario() {

    const [pregunta, setPregunta] = useState([{ name: "Loading...", id: "initial" }]);
    const [respuesta, setRespuesta] = useState([{ name: "Loading...", id: "initial" }]);
    const { user } = useAuth0();

    useEffect(
        () =>
            onSnapshot(collection(db, "Pregunta"), (snapshot) =>
                setPregunta(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            ),
        []
    );
    useEffect(
        () =>
            onSnapshot(collection(db, "Respuesta"), (snapshot) =>
                setRespuesta(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            ),
        []
    );


    return (
        <div class="formularioC" id="formularioC">
            <h2 id="encuesta">ENCUESTA</h2>
            <h3 id="cantPreguntas"></h3>
            <br></br>
            <label for="pregunta 1" class="form-label" id="pregunta1"></label>
            <div class="form-check">
                <input type="radio" id="r1" name="pregunta1" />
                <label for="casa" id="respuesta1">
                </label>
            </div>

            <div class="form-check">
                <input type="radio" id="r2" name="pregunta1" />
                <label for="dewey" id="respuesta2">Falsa

                </label>
            </div>

            <div class="form-check">
                <input type="radio" id="r3" name="pregunta1" />
                <label for="dewey" id="respuesta3">Falsa

                </label>
            </div>

            <div class="form-check">
                <input type="radio" id="r4" name="pregunta1" />
                <label for="dewey" id="respuesta4">Falsa
                </label>
            </div>





            <label for="pregunta 2" class="form-label" id="pregunta2">Pregunta 2</label>


            <div class="form-check" id="respuesta2.1">
                <input type="radio" id="r5" name="pregunta2" />
                <label for="dewey" id="respuesta5">Falsa

                </label>
            </div>

            <div class="form-check" id="respuesta2.2">
                <input type="radio" id="r6" name="pregunta2" />
                <label for="dewey" id="respuesta6">Falsa

                </label>
            </div>

            <div class="form-check" id="respuesta2.3">
                <input type="radio" id="r7" name="pregunta2" />
                <label for="dewey" id="respuesta7">Falsa

                </label>
            </div>

            <div class="form-check" id="respuesta2.4">
                <input type="radio" id="r8" name="pregunta2" />
                <label for="dewey" id="respuesta8">Correcta
                </label>
            </div>

            <label for="pregunta 2" class="form-label" id="pregunta3">Pregunta 3</label>


            <div class="form-check" id="respuesta3.1">
                <input type="radio" id="r9" name="pregunta3" />
                <label for="dewey" id="respuesta9">Falsa
                </label>
            </div>

            <div class="form-check" id="respuesta3.2">
                <input type="radio" id="r10" name="pregunta3" />
                <label for="dewey" id="respuesta10">Correcta
                </label>
            </div>
            <div class="form-check" id="respuesta3.3">
                <input type="radio" id="r11" name="pregunta3" />
                <label for="dewey" id="respuesta11">Falsa
                </label>
            </div>
            <div class="form-check" id="respuesta3.4">
                <input type="radio" id="r12" name="pregunta3" />
                <label for="dewey" id="respuesta12">Falsa
                </label>
            </div>



            <label for="pregunta 4" class="form-label" id="pregunta4">Pregunta 4</label>


            <div class="form-check" id="respuesta4.1">
                <input type="radio" id="r13" name="pregunta4" />
                <label for="dewey" id="respuesta13">Correcta
                </label>
            </div>

            <div class="form-check" id="respuesta4.2">
                <input type="radio" id="r14" name="pregunta4" />
                <label for="dewey" id="respuesta14">Falsa
                </label>
            </div>

            <div class="form-check" id="respuesta4.3">
                <input type="radio" id="r15" name="pregunta4" />
                <label for="dewey" id="respuesta15">Falsa

                </label>
            </div>

            <div class="form-check" id="respuesta4.4">
                <input type="radio" id="r16" name="pregunta4" />
                <label for="dewey" id="respuesta16">Falsa

                </label>
            </div>


            <label for="pregunta 5" class="form-label" id="pregunta5">Pregunta 5</label>


            <div class="form-check" id="respuesta5.1">
                <input type="radio" id="r17" name="pregunta5" />
                <label for="dewey" id="respuesta17">Correcta

                </label>
            </div>

            <div class="form-check" id="respuesta5.2">
                <input type="radio" id="r18" name="pregunta5" />
                <label for="dewey" id="respuesta18">Falsa

                </label>
            </div>

            <div class="form-check" id="respuesta5.3">
                <input type="radio" id="r19" name="pregunta5" />
                <label for="dewey" id="respuesta19">
                </label>
            </div>

            <div class="form-check" id="respuesta5.4">
                <input type="radio" id="r20" name="pregunta5" />
                <label for="dewey" id="respuesta20">Falsa
                </label>
            </div>
            <br />
            <button onClick={() => { ConteoRespuestas() }} class="btn btn-success" id="btnEnviar">Enviar</button>
            <br />
            <br />
        </div>

    );
}



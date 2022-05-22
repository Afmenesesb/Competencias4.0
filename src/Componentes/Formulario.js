import React, { Component, useState, useEffect } from "react";
import swal from 'sweetalert';
import Encuestas from "./Encuestas";
import db from "../firebaseConfig";
import { onSnapshot, collection, doc, setDoc } from "firebase/firestore";
import './../Estilos/formulario.css';
import { useAuth0 } from '@auth0/auth0-react';


var usuario="";
var email="";
var contador = 0;
const ConteoRespuestas = (event) => {
    usuario = document.getElementById('usuario').innerText;
    email = document.getElementById('email').innerText;
    var checked_pregunta1 = document.querySelector('input[name = "pregunta1"]:checked');
    var checked_pregunta2 = document.querySelector('input[name = "pregunta2"]:checked');
    var checked_pregunta3 = document.querySelector('input[name = "pregunta3"]:checked');
    var checked_pregunta4 = document.querySelector('input[name = "pregunta4"]:checked');
    var checked_pregunta5 = document.querySelector('input[name = "pregunta5"]:checked');
    const btn1 = document.getElementById('v-pills-con-tab');
    const btn2 = document.getElementById('v-pills-compdi-tab');
    const btn3 = document.getElementById('v-pills-act-tab');




    
    if (checked_pregunta1 != null && checked_pregunta2 != null &&
        checked_pregunta3 != null && checked_pregunta4 != null &&
        checked_pregunta5 != null) {
        if (checked_pregunta1.value == "C") {
            contador++;
        }
        if (checked_pregunta2.value == "C") {
            contador++;
        }
        if (checked_pregunta3.value == "C") {
            contador++;
        }
        if (checked_pregunta4.value == "C") {
            contador++;
        }
        if (checked_pregunta5.value == "C") {
            contador++;
        }
        swal(
            {
                title: "Terminó la encuesta",
                text: usuario + " Usted ha tenido " + contador + " respuestas correctas",
                icon: "success",
                button: "Aceptar",
                timer: "8000"
            }
        );
        checked_pregunta1.checked = false;
        checked_pregunta2.checked = false;
        checked_pregunta3.checked = false;
        checked_pregunta4.checked = false;
        checked_pregunta5.checked = false;

        const formula = document.getElementById('divForm');
        formula.style.display = 'none';
        btn1.disabled = false;
        btn2.disabled = false;
        btn3.disabled = false;
        window.bandCuest = null;
    } else {
        swal(
            {
                title: "Error de selección",
                text: "Debe seleccionar mínimo una respuesta para cada pregunta",
                icon: "warning",
                button: "Aceptar"
            }
        );
    }
    guardarInfo();
    guardarNota();

}
const guardarInfo = async () => {
   
    
    await setDoc(doc(db, "Estudiantes",email), {
        nombre: usuario
      });
}
const guardarNota = async () => {
   
    
    await setDoc(doc(db, "Estudiantes",email, "Notas", window.modulo ), {
        nota: contador
      });
      contador=0;
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
        <div class="formularioC">
            <h2 id="encuesta">ENCUESTA</h2>
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


            <div class="form-check">
                <input type="radio" id="r5" name="pregunta2" />
                <label for="dewey" id="respuesta5">Falsa

                </label>
            </div>

            <div class="form-check">
                <input type="radio" id="r6" name="pregunta2" />
                <label for="dewey" id="respuesta6">Falsa

                </label>
            </div>

            <div class="form-check">
                <input type="radio" id="r7" name="pregunta2" />
                <label for="dewey" id="respuesta7">Falsa

                </label>
            </div>

            <div class="form-check">
                <input type="radio" id="r8" name="pregunta2" />
                <label for="dewey" id="respuesta8">Correcta
                </label>
            </div>

            <label for="pregunta 2" class="form-label" id="pregunta3">Pregunta 3</label>


            <div class="form-check">
                <input type="radio" id="r9" name="pregunta3" />
                <label for="dewey" id="respuesta9">Falsa
                </label>
            </div>

            <div class="form-check">
                <input type="radio" id="r10" name="pregunta3" />
                <label for="dewey" id="respuesta10">Correcta
                </label>
            </div>
            <div class="form-check">
                <input type="radio" id="r11" name="pregunta3" />
                <label for="dewey" id="respuesta11">Falsa
                </label>
            </div>
            <div class="form-check">
                <input type="radio" id="r12" name="pregunta3" />
                <label for="dewey" id="respuesta12">Falsa
                </label>
            </div>



            <label for="pregunta 4" class="form-label" id="pregunta4">Pregunta 4</label>


            <div class="form-check">
                <input type="radio" id="r13" name="pregunta4" />
                <label for="dewey" id="respuesta13">Correcta
                </label>
            </div>

            <div class="form-check">
                <input type="radio" id="r14" name="pregunta4" />
                <label for="dewey" id="respuesta14">Falsa
                </label>
            </div>

            <div class="form-check">
                <input type="radio" id="r15" name="pregunta4" />
                <label for="dewey" id="respuesta15">Falsa

                </label>
            </div>

            <div class="form-check">
                <input type="radio" id="r16" name="pregunta4" />
                <label for="dewey" id="respuesta16">Falsa

                </label>
            </div>


            <label for="pregunta 5" class="form-label" id="pregunta5">Pregunta 5</label>


            <div class="form-check">
                <input type="radio" id="r17" name="pregunta5" />
                <label for="dewey" id="respuesta17">Correcta

                </label>
            </div>

            <div class="form-check">
                <input type="radio" id="r18" name="pregunta5" />
                <label for="dewey" id="respuesta18">Falsa

                </label>
            </div>

            <div class="form-check">
                <input type="radio" id="r19" name="pregunta5" />
                <label for="dewey" id="respuesta19">
                </label>
            </div>

            <div class="form-check">
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



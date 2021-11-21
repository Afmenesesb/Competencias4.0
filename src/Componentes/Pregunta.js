import React, { Component } from "react";
import '../Estilos/gestorPregunta.css';

export default function Pregunta() {

    return (
        <div>
            <form class="form1">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Id de la pregunta</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputTexto2" class="form-label">id de la Encuesta</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputTexto1" class="form-label">id de la Encuesta</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class ="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-success">Guardar</button>
            </form>

        </div>


    );
}
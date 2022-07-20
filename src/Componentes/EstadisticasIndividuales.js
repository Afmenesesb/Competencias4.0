import { setDoc, doc, collection} from "firebase/firestore";
import React, { Component, useState } from "react";
import '../Estilos/gestorPregunta.css';
import db from "../firebaseConfig";
import swal from 'sweetalert';

export default function EstadisticasIndividuales() {



    return (
        <div id="formularioBusquedaEst" >
            <form class="form1" onSubmit={handleSumit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Correo del estidiante</label>
                    <input id="correo" value={values.id} onChange={handleInputChange} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="id" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button id="btnGuardar" type="submit" class="btn btn-success" >Buscar</button>
            </form>

        </div>


    );


}
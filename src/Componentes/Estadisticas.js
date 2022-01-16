import { setDoc, doc, collection} from "firebase/firestore";
import React, { Component, useState } from "react";
import db from "../firebaseConfig";
import swal from 'sweetalert';


export default function Estadisticas() {
   
    return (
        
        <div id="comp" class="btn-group" role="group" aria-label="Basic example">
                <button id="btC1" onClick={} type="button" class="btn btn-success">Generales</button>
                <button id="btC2" onClick={} type="button" class="btn btn-success">Individuales</button>
        </div>
    );

}
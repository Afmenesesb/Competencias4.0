import { setDoc, doc, collection } from "firebase/firestore";
import React, { Component, useState } from "react";
import db from "../firebaseConfig";
import swal from 'sweetalert';
import '../Estilos/estIndividual.css';


export default function EstadisticasEstudiantes() {
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
      const config = {
        type: 'pie',
        data: data,
      };
    
    return (
        <div id="estadisticasEstudiantes" class="mencuesta">
            <div>Hola mundo</div>
            
        </div>


    );


}
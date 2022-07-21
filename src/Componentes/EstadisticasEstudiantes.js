import { setDoc, doc, collection } from "firebase/firestore";
import React, { Component, useState } from "react";
import db from "../firebaseConfig";
import swal from 'sweetalert';
import '../Estilos/estIndividual.css';
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );
  const data = {
    labels: [
        'Información contable',
        'Gestión de organizaciones',
        'Analisis Economico',
        'Conocimiento digital',
        'Aprendizaje continuo',
        'Comunicacion Digital',
        'Conocimiento Digital',
        'Gestion de la informacion',
        'Liderazgo en red',
        'Orientacion al cliente',
        'Trabajo en red',
        'Vision estrategica',
        'Analisis y evolucion de sistemas',
        'Diseño y programacion de nuevas tecnologias',
        'Innovacion,originalidad e iniciativa',
        'Inteligencia emocional',
        'Liderazgo e influencia social',
        'Pensamiento analítico',
        'Pensamiento crítico',
        'Solucion de problemas'
    ],
    datasets: [{
      label: 'Conocimiento',
      data: [3, 5,2],
      order:1,
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Competencias digitales',
      data: [3,5,4],
      order:1,
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
      
    },{
      label: 'Actitud',
      data: [3,2,1],
      order:3,
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };
  const config = {
    type: 'radar',
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  };

function estadisticaActi(e) {

}
function estadistica(e) {

}
export default function EstadisticasEstudiantes() {
    return (
        <div id="estadisticasEstudiantes" class="mencuesta">
            <div><Radar data={data} /></div>
            
        </div>


    );


}
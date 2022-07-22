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
    function estadisticaA(e) {
        document.getElementById('graficasEstudiantes').style.display='block'
    }
    function estadisticaM(e) {
        document.getElementById('graficasEstudiantes').style.display='none'
        
    }
  const dataConocimiento = {
    labels: [
        'Información contable',
        'Gestión de organizaciones',
        'Analisis Economico'
    ],
    datasets: [{
      label: '#Preguntas correctas',
      data: [3, 5,2],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    },{
        label: '',
        data: [0],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }]
  };
  const dataActitud = {
    labels: [
        'Analisis y evolucion de sistemas',
        'Diseño y programacion de nuevas tecnologias',
        'Innovacion,originalidad e iniciativa',
        'Inteligencia emocional',
        'Liderazgo e influencia social',
        'Pensamiento analítico',
        'Pensamiento crítico',
        'Solucion de problemas',
    ],
    datasets: [{
      label: '#Preguntas correctas',
      data: [3, 5,2,4,5,3,4,4],
      fill: true,
      spengaps:true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
      
    },{
        label: 'Base',
        data: [0],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }
    ]
    
  };
  const dataCompetencias = {
    labels: [
        'Conocimiento digital',
        'Aprendizaje continuo',
        'Comunicacion Digital',
        'Conocimiento Digital',
        'Gestion de la informacion',
        'Liderazgo en red',
        'Orientacion al cliente',
        'Trabajo en red'
    ],
    datasets: [{
      label: '#Preguntas correctas',
      data: [3,2,5,4,2,3,4,5],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    },{
        label: '',
        data: [0],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }]
  };


export default function EstadisticasEstudiantes() {
    return (
        
        <div>
            <div id="btnsGraficas" class="btn-group" role="group" aria-label="Basic example">
            <button onClick={(e) => {estadisticaA(e)}} id="btEA" type="button" class="btn btn-success">Estadisticas AREA</button>
            <button onClick={(e) => {estadisticaM(e)}} id="btEM" type="button" class="btn btn-success">Estadisticas MODULO</button>
        </div>
        <div id="graficasEstudiantes" class="mencuesta">
            <div id="grfCon" class="mengraf">CONOCIMIENTO<Radar data={dataConocimiento} /></div>
            <div id="grfCom" class="mengraf">COMPETENCIAS<Radar data={dataCompetencias} /></div>
            <div id="grfAct" class="mengraf">ACTITUD<Radar data={dataActitud} /></div>
            </div>
            
        </div>
        


    );


}
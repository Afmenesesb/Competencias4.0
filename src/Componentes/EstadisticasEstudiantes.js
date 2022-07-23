import { setDoc, doc, collection } from "firebase/firestore";
import React, { Component, useState } from "react";
import db from "../firebaseConfig";
import swal from 'sweetalert';
import Encuestas from "./Encuestas";
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
import { Email } from "@material-ui/icons";
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );
  
  
export default function EstadisticasEstudiantes() {
  var email= '';
  var informacionCon=0;
  var gestionOrg=0;
  var analisisEco=0;
  var analisisEvo=0;
  var diseñoPro=0;
  var inteligenciaEmo=0;
  var innovacionOri=3;
  var liderazgoInfl=0;
  var pensamientoAna=0;
  var pensamientoCri=0;
  var solucionPro=0;
  var conocimientoDig=0;
  var aprendizajeCon=0;
  var comunicacionDig=0;
  var gestionInf=0;
  var liderazgoRed=0;
  var trabajoRed=0;
  var visionEst=0;
  var orientacionCli=0; 
  var actitudM=0;
  var competenciasM=0;
  var conocimientoM=0;
  var colorActi='rgba(27, 105, 17, 0.774)';
  var colorActiR='rgba(75, 216, 56, 0.774)';
  var colorComp='';
  var colorCompR='';
  var colorCono='';
  var colorConoR='';

  function estadisticaA(e){
      window.innovacionOri=4;
      swal(
        {
            title: "Generando estadisticas",
            text: " Usted ha querido generar las estadisticas por AREA",
            icon: "success",
            button: "Aceptar",
            timer: "8000"
        }
    );
      email = document.getElementById('email').innerText;  
      //actitudM=analisisEvo+diseñoPro+innovacionOri+inteligenciaEmo+liderazgoInfl+pensamientoAna+pensamientoCri+solucionPro;
      actitudM=12;
      competenciasM=conocimientoDig+aprendizajeCon+comunicacionDig+visionEst+gestionInf+liderazgoRed+orientacionCli+trabajoRed;
      conocimientoM=informacionCon+gestionOrg+analisisEco;
      if(actitudM>=25){
        colorActi='rgba(27, 105, 17, 0.774)';
        colorActiR='rgba(75, 216, 56, 0.774)';
      }else{
        if(actitudM<25&&actitudM>=16){
          colorActi='rgba(238, 255, 0, 0.774)';
          colorActiR='rgba(238, 255, 0, 0.862)';
        }
        else{
          colorActi='rgba(175, 28, 28, 0.774)';
          colorActiR='rgba(249, 61, 61, 0.774)';
        }
      }
      document.getElementById('graficasEstudiantes').style.display='block'
   }
  function estadisticaM(e) {
      document.getElementById('graficasEstudiantes').style.display='none'
      email = document.getElementById('email').innerText;  
   }

  const dataConocimiento = {
    labels: [
        'Información contable',
        'Gestión de organizaciones',
        'Analisis Economico'
    ],
    datasets: [{
      label: '#Preguntas correctas',
      data: [informacionCon,gestionOrg,analisisEco],
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
  var dataActitud = {
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
      data: [analisisEvo,diseñoPro,innovacionOri,inteligenciaEmo,liderazgoInfl,pensamientoAna,pensamientoCri,solucionPro],
      fill: true,
      spengaps:true,
      backgroundColor: colorActi,
      borderColor: colorActiR,
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
      }
    ]
    
  };
  var dataCompetencias = {
    labels: [
        'Conocimiento digital',
        'Aprendizaje continuo',
        'Comunicacion Digital',
        'Vision estrategica',
        'Gestion de la informacion',
        'Liderazgo en red',
        'Orientacion al cliente',
        'Trabajo en red'
    ],
    datasets: [{
      label: '#Preguntas correctas',
      data: [conocimientoDig,aprendizajeCon,comunicacionDig,visionEst,gestionInf,liderazgoRed,orientacionCli,trabajoRed],
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
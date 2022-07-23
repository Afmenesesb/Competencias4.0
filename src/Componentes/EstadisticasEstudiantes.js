import { setDoc, doc, collection } from "firebase/firestore";
import React, { Component, useState } from "react";
import db from "../firebaseConfig";
import swal from 'sweetalert';
import Encuestas from "./Encuestas";
import '../Estilos/estIndividual.css';
import { Radar,Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement
  } from 'chart.js';
import { Email } from "@material-ui/icons";
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement
  );
  
  
export default function EstadisticasEstudiantes() {
  var informacionCon
  var gestionOrg
  var analisisEco
  var analisisEvo
  var diseñoPro
  var inteligenciaEmo
  var innovacionOri
  var liderazgoInfl
  var pensamientoAna
  var pensamientoCri
  var solucionPro
  var conocimientoDig
  var aprendizajeCon
  var comunicacionDig
  var gestionInf
  var liderazgoRed
  var trabajoRed
  var visionEst
  var orientacionCli
  var actitudM
  var competenciasM
  var conocimientoM
  var colorActi
  var colorActiR
  var colorComp
  var colorCompR
  var colorCono
  var colorConoR
  var colorInfCont,colorInfContR
  var colorGestionOrg,colorGestionOrgR
  var colorInfCont,colorInfContR
  var colorInfCont,colorInfContR
  var colorInfCont,colorInfContR
  var colorInfCont,colorInfContR
  var colorInfCont,colorInfContR
  var colorInfCont,colorInfContR
  var colorInfCont,colorInfContR
  var colorInfCont,colorInfContR
  var colorInfCont,colorInfContR
  var colorInfCont,colorInfContR
  var colorInfCont,colorInfContR
  var colorInfCont,colorInfContR
  var colorInfCont,colorInfContR
  var colorInfCont,colorInfContR
  var colorInfCont,colorInfContR
  var colorInfCont,colorInfContR

  estadisticas();
  const dataModulosCono = {
    labels:[
      'Información contable',
      'Gestión de organizaciones',
      'Analisis Economico'
  ] ,
    datasets: [{
      label: '#Preguntas correctas',
      data: [informacionCon,gestionOrg,analisisEco],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };
  const dataModulosComp = {
    labels:[
      'Conocimiento digital',
      'Aprendizaje continuo',
      'Comunicacion Digital',
      'Vision estrategica',
      'Gestion de la informacion',
      'Liderazgo en red',
      'Orientacion al cliente',
      'Trabajo en red'
  ] ,
    datasets: [{
      label: '#Preguntas correctas',
      data: [conocimientoDig,aprendizajeCon,comunicacionDig,visionEst,gestionInf,liderazgoRed,orientacionCli,trabajoRed],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };
  const dataModulosAct = {
    labels:[
      'Analisis y evolucion de sistemas',
        'Diseño y programacion de nuevas tecnologias',
        'Innovacion,originalidad e iniciativa',
        'Inteligencia emocional',
        'Liderazgo e influencia social',
        'Pensamiento analítico',
        'Pensamiento crítico',
        'Solucion de problemas',
  ] ,
    datasets: [{
      label: '#Preguntas correctas',
      data: [analisisEvo,diseñoPro,innovacionOri,inteligenciaEmo,liderazgoInfl,pensamientoAna,pensamientoCri,solucionPro],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };
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
      backgroundColor: colorConoR,
      borderColor: colorCono,
      pointBackgroundColor: colorCono,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    },{
        label: '',
        data: [0],
        backgroundColor: colorConoR,
        borderColor: colorCono,
        pointBackgroundColor: colorCono,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }]
  };
  
  const dataCompetencias = {
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
      backgroundColor: colorCompR,
      borderColor: colorComp,
      pointBackgroundColor: colorComp,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    },{
        label: '',
        data: [0],
        backgroundColor: colorCompR,
        borderColor: colorComp,
        pointBackgroundColor: colorComp,
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
      data: [analisisEvo,diseñoPro,innovacionOri,inteligenciaEmo,liderazgoInfl,pensamientoAna,pensamientoCri,solucionPro],
      fill: true,
      spengaps:true,
      backgroundColor: colorActiR,
      borderColor: colorActi,
      pointBackgroundColor: colorActi,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
      
    },{
        label: '',
        data: [0],
        backgroundColor: colorActiR,
        borderColor: colorActi,
        pointBackgroundColor: colorActi,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }
    ]
    
  };
  
  function estadisticas(){
      informacionCon=3;
      gestionOrg=5;
      analisisEco=2;
      analisisEvo=2;
      diseñoPro=2;
      inteligenciaEmo=3;
      innovacionOri=1;
      liderazgoInfl=5;
      pensamientoAna=3;
      pensamientoCri=4;
      solucionPro=2;
      conocimientoDig=5;
      aprendizajeCon=2;
      comunicacionDig=3;
      gestionInf=1;
      liderazgoRed=2;
      trabajoRed=3;
      visionEst=4;
      orientacionCli=3;

      actitudM=analisisEvo+diseñoPro+innovacionOri+inteligenciaEmo+liderazgoInfl+pensamientoAna+pensamientoCri+solucionPro;
      competenciasM=conocimientoDig+aprendizajeCon+comunicacionDig+visionEst+gestionInf+liderazgoRed+orientacionCli+trabajoRed;
      conocimientoM=informacionCon+gestionOrg+analisisEco;


      if(conocimientoM>=12){
        colorCono='rgba(27, 105, 17, 0.774)';
        colorConoR='rgba(41, 253, 3, 0.400)';
      }
      
      //Graficas CONOCIMIENTO
      if(conocimientoM>=12){
        colorCono='rgba(27, 105, 17, 0.774)';
        colorConoR='rgba(41, 253, 3, 0.400)';
      }else{
        if(conocimientoM<12&&conocimientoM>=8){
          colorCono='rgba(253, 165, 3, 0.774)';
          colorConoR='rgba(253, 253, 3, 0.400)';
        }
        else{
          colorCono='rgba(175, 28, 28, 0.774)';
          colorConoR='rgba(249, 61, 61, 0.400)';
        }
      }
      //Graficas COMPETENCIAS
      if(competenciasM>=30){
        colorComp='rgba(27, 105, 17, 0.774)';
        colorCompR='rgba(41, 253, 3, 0.400)';
      }else{
        if(competenciasM<30&&competenciasM>=19){
          colorComp='rgba(253, 165, 3, 0.774)';
          colorCompR='rgba(253, 253, 3, 0.400)';
        }
        else{
          colorComp='rgba(175, 28, 28, 0.774)';
          colorCompR='rgba(249, 61, 61, 0.400)';
        }
      }
      //Graficas ACTITUD
      if(actitudM>=25){
        colorActi='rgba(27, 105, 17, 0.774)';
        colorActiR='rgba(41, 253, 3, 0.400)';
      }else{
        if(actitudM<25&&actitudM>=16){
          colorActi='rgba(253, 165, 3, 0.774)';
          colorActiR='rgba(253, 253, 3, 0.400)';
        }
        else{
          colorActi='rgba(175, 28, 28, 0.774)';
          colorActiR='rgba(249, 61, 61, 0.400)';
        }
      }
   }
   function mostrarEstadisticaA(e) {
    document.getElementById('graficasEstudiantes').style.display='block'
    document.getElementById('graficasEstudiantesM').style.display='none'
   }
  function mostrarEstadisticaM(e) {
    document.getElementById('graficasEstudiantes').style.display='none'
    document.getElementById('graficasEstudiantesM').style.display='block'
   }

 
    return (
        <div>
            <div id="btnsGraficas" class="btn-group" role="group" aria-label="Basic example">
            <button onClick={(e) => {mostrarEstadisticaA(e)}} id="btEA" type="button" class="btn btn-success">Estadisticas AREA</button>
            <button onClick={(e) => {mostrarEstadisticaM(e)}} id="btEM" type="button" class="btn btn-success">Estadisticas MODULO</button>
        </div>
        <div id="graficasEstudiantes" class="mencuesta">
            <div id="grfCom" class="mengraf">COMPETENCIAS<Radar data={dataCompetencias} /></div>
            <div id="grfCon" class="mengraf">CONOCIMIENTO<Radar data={dataConocimiento} /></div>
            <div id="grfAct" class="mengraf">ACTITUD<Radar data={dataActitud} /></div>
        </div>
        <div id="graficasEstudiantesM" class="mencuesta">
            <div id="grfConM" class="mengraf">CONOCIMIENTO por MODULO<Bar data={dataModulosCono} /></div>
            <div id="grfComM" class="mengraf">COMPETENCIAS por MODULO<Bar data={dataModulosComp} /></div>
            <div id="grfActM" class="mengraf">ACTITUD por MODULO<Bar data={dataModulosAct} /></div>
        </div>
      </div>
        


    );


}
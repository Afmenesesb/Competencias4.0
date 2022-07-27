import { setDoc, doc,getDoc, collection, query, getDocs, onSnapshot } from "firebase/firestore";
import React, { Component, useState } from "react";
import db from "../firebaseConfig";
import swal from 'sweetalert';
import Encuestas from "./Encuestas";
import '../Estilos/estIndividual.css';
import { Radar, Bar } from 'react-chartjs-2';
import { useAuth0 } from "@auth0/auth0-react";
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
  var InformacionContable =0;
  var Gestion = 0;
  var AnalisisEconomico = 0;
  var Analisisyevolucion = 0;
  var Diseñoyprogramacion = 0;
  var InteligenciaEmocional = 0;
  var Innovacion = 0;
  var Liderazgoeinfluencia = 0;
  var PensamientoAnalitico = 0;
  var PensamientoCritico = 0;
  var Solucion = 0;
  var ConocimientoDigital = 0;
  var AprendizajeContinuo = 0;
  var ComunicacionDigital = 0;
  var Gestiondelainformacion = 0;
  var Liderazgoenred = 0;
  var Trabajoenred = 0;
  var VisionEstrategica = 0;
  var Orientacionalcliente = 0;
  var competenciasEstudiante = ["Informacion Contable", "Gestion de organizaciones", "Analisis Economico",
    "Analisis y evolucion de sistemas", "Diseño y programacion de nuevas tecnologias", "Inteligencia Emocional",
    "Innovacion, Originalidad e iniciativa", "Liderazgo e influencia social", "Pensamiento Analitico", "Pensamiento Critico",
    "Solucion de problemas", "Conocimiento Digital", "Aprendizaje Continuo", "Comunicacion Digital", "Gestion de la informacion",
    "Liderazgo en red", "Trabajo en red", "Vision Estrategica", "Orientacion al cliente"];
  var actitudM = 0;
  var competenciasM = 0;
  var conocimientoM = 0;
  var colorActi = 0;
  var colorActiR = 0;
  var colorComp = 0;
  var colorCompR = 0;
  var colorCono = 0;
  var colorConoR = 0;
  var colorInfCont, colorInfContR
  var colorGestion, colorGestionR
  var colorInfCont, colorInfContR
  var colorInfCont, colorInfContR
  var colorInfCont, colorInfContR
  var colorInfCont, colorInfContR
  var colorInfCont, colorInfContR
  var colorInfCont, colorInfContR
  var colorInfCont, colorInfContR
  var colorInfCont, colorInfContR
  var colorInfCont, colorInfContR
  var colorInfCont, colorInfContR
  var colorInfCont, colorInfContR
  var colorInfCont, colorInfContR
  var colorInfCont, colorInfContR
  var colorInfCont, colorInfContR
  var colorInfCont, colorInfContR
  var colorInfCont, colorInfContR
  var notasEstudiante = [];
  
export default function EstadisticasEstudiantes() {
  const estadisticas = () => {
    obtenerNotas();
    actitudM = Analisisyevolucion + Diseñoyprogramacion + Innovacion + InteligenciaEmocional + Liderazgoeinfluencia + PensamientoAnalitico + PensamientoCritico + Solucion;
    competenciasM = ConocimientoDigital + AprendizajeContinuo + ComunicacionDigital + VisionEstrategica + Gestiondelainformacion + Liderazgoenred + Orientacionalcliente + Trabajoenred;
    conocimientoM = InformacionContable + Gestion + AnalisisEconomico;
    
    if (conocimientoM >= 12) {
      colorCono = 'rgba(27, 105, 17, 0.774)';
      colorConoR = 'rgba(41, 253, 3, 0.400)';
    }

    //Graficas CONOCIMIENTO
    if (conocimientoM >= 12) {
      colorCono = 'rgba(27, 105, 17, 0.774)';
      colorConoR = 'rgba(41, 253, 3, 0.400)';
    } else {
      if (conocimientoM < 12 && conocimientoM >= 8) {
        colorCono = 'rgba(253, 165, 3, 0.774)';
        colorConoR = 'rgba(253, 253, 3, 0.400)';
      }
      else {
        colorCono = 'rgba(175, 28, 28, 0.774)';
        colorConoR = 'rgba(249, 61, 61, 0.400)';
      }
    }
    //Graficas COMPETENCIAS
    if (competenciasM >= 30) {
      colorComp = 'rgba(27, 105, 17, 0.774)';
      colorCompR = 'rgba(41, 253, 3, 0.400)';
    } else {
      if (competenciasM < 30 && competenciasM >= 19) {
        colorComp = 'rgba(253, 165, 3, 0.774)';
        colorCompR = 'rgba(253, 253, 3, 0.400)';
      }
      else {
        colorComp = 'rgba(175, 28, 28, 0.774)';
        colorCompR = 'rgba(249, 61, 61, 0.400)';
      }
    }
    //Graficas ACTITUD
    if (actitudM >= 25) {
      colorActi = 'rgba(27, 105, 17, 0.774)';
      colorActiR = 'rgba(41, 253, 3, 0.400)';
    } else {
      if (actitudM < 25 && actitudM >= 16) {
        colorActi = 'rgba(253, 165, 3, 0.774)';
        colorActiR = 'rgba(253, 253, 3, 0.400)';
      }
      else {
        colorActi = 'rgba(175, 28, 28, 0.774)';
        colorActiR = 'rgba(249, 61, 61, 0.400)';
      }
    }
  }
  const obtenerNotas = async () => {
    AnalisisEconomico=5;
    var email = document.getElementById('email').innerText;
    const docRef = doc(db, "Estudiantes",email,"Notas","Analisis Economico");
    const docSnap = await getDoc(docRef);
    AnalisisEconomico=docSnap.data();
    if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
    AnalisisEconomico=3;
  };
  estadisticas();
  const dataModulosCono = {
    labels: [
      'Información contable',
      'Gestión de organizaciones',
      'Analisis Economico'
    ],
    datasets: [{
      label: '#Preguntas correctas',
      data: [InformacionContable, Gestion, AnalisisEconomico],
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
      data: [ConocimientoDigital, AprendizajeContinuo, ComunicacionDigital, VisionEstrategica, Gestiondelainformacion, Liderazgoenred, Orientacionalcliente, Trabajoenred],
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
      data: [Analisisyevolucion, Diseñoyprogramacion, Innovacion, InteligenciaEmocional, Liderazgoeinfluencia, PensamientoAnalitico, PensamientoCritico, Solucion],
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
      data: [InformacionContable, Gestion, AnalisisEconomico],
      fill: true,
      backgroundColor: colorConoR,
      borderColor: colorCono,
      pointBackgroundColor: colorCono,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
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
      data: [ConocimientoDigital, AprendizajeContinuo, ComunicacionDigital, VisionEstrategica, Gestiondelainformacion, Liderazgoenred, Orientacionalcliente, Trabajoenred],
      fill: true,
      backgroundColor: colorCompR,
      borderColor: colorComp,
      pointBackgroundColor: colorComp,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }, {
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
      data: [Analisisyevolucion, Diseñoyprogramacion, Innovacion, InteligenciaEmocional, Liderazgoeinfluencia, PensamientoAnalitico, PensamientoCritico, Solucion],
      fill: true,
      spengaps: true,
      backgroundColor: colorActiR,
      borderColor: colorActi,
      pointBackgroundColor: colorActi,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'

    }, {
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
  const mostrarEstadisticaA = (e) => {
    estadisticas();
    document.getElementById('graficasEstudiantes').style.display = 'block'
    document.getElementById('graficasEstudiantesM').style.display = 'none'
  }
  const mostrarEstadisticaM = (e) => {
    document.getElementById('graficasEstudiantes').style.display = 'none'
    document.getElementById('graficasEstudiantesM').style.display = 'block'
  }


  return (
    <div>
      <div id="btnsGraficas" class="btn-group1" role="group" aria-label="Basic example">
      <h2 id="tituloEstadisticas">ESTADISTICAS</h2>
        <button onClick={(e) => { mostrarEstadisticaA(e) }} id="btEA" type="button" class="btn btn-success">Estadisticas AREA</button>
        <button onClick={(e) => { mostrarEstadisticaM(e) }} id="btEM" type="button" class="btn btn-success">Estadisticas MODULO</button>
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
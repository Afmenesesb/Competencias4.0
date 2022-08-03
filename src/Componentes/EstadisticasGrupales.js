import { setDoc, doc, getDoc, collection, query, getDocs, onSnapshot } from "firebase/firestore";
import React, { Component, useState } from "react";
import db from "../firebaseConfig";
import swal from 'sweetalert';
import Encuestas from "./Encuestas";
import '../Estilos/estIndividual.css';
import { Radar, Bar, Chart,Pie} from 'react-chartjs-2';
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
  BarElement,
  ArcElement
} from 'chart.js';
import { Email } from "@material-ui/icons";
import { async } from "@firebase/util";
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement
);
var compAlto=0,compBajo=0,compMedio=0;
var conAlto=0,conBajo=0,conMedio=0;
var actAlto=0,actBajo=0,actMedio=0;
var actitudM;
var conocimientoM;
var competenciasM;
var contador = 1;
var InformacionContable = 0;
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
var barChart = null;
var barChart2 = null;
var barChart3 = null;
var pieChart = null;
var pieChart2 = null;
var pieChart3 = null;
var competenciasEstudiante = ["Informacion Contable", "Gestion de organizaciones", "Analisis Economico",
  "Analisis y evolucion de sistemas", "Diseño y programacion de nuevas tecnologias", "Inteligencia Emocional",
  "Innovacion, Originalidad e iniciativa", "Liderazgo e influencia social", "Pensamiento Analitico", "Pensamiento Critico",
  "Solucion de problemas", "Conocimiento Digital", "Aprendizaje Continuo", "Comunicacion Digital", "Gestion de la informacion",
  "Liderazgo en red", "Trabajo en red", "Vision Estrategica", "Orientacion al cliente"];
const obtenerEmail = async () => {
    const e=query(collection(db, "Estudiantes"));
    const querySnapshotE=await getDocs(e);
    querySnapshotE.forEach((docE)=>{
        obtenerNotas(docE.id)
    });
  var speedCanvas = document.getElementById("PieChartCompetencias");
  var speedData = {
    label: '#Cantidad alumnos',
    data: [compAlto, compMedio, compBajo],
  };
  var speedCanvas2 = document.getElementById("PieChartConocimento");
  var speedData2 = {

    label: '#Cantidad alumnos',
    data: [conAlto,conMedio,conBajo],
  };
  var speedCanvas3 = document.getElementById("PieChartActitud");
  var speedData3 = {
    label: '#Cantidad alumnos',
    data: [actAlto,actMedio,actBajo],
  };
  var radarCanvas = document.getElementById("BarChartCompetencias");
  var radarData = {
    label: 'Preguntas Correctas',
    data: [ConocimientoDigital, AprendizajeContinuo, ComunicacionDigital, VisionEstrategica, Gestiondelainformacion, Liderazgoenred, Orientacionalcliente, Trabajoenred],
  };


  //CONOCIMIENTO
  var radarCanvas2 = document.getElementById("BarChartConocimiento");

  var radarData2 = {
    label: 'Preguntas Correctas',
    data: [InformacionContable, Gestion, AnalisisEconomico],
  };


  var radarCanvas3 = document.getElementById("BarChartActitud");
  var radarData3 = {
    label: 'Preguntas Correctas',
    data: [Analisisyevolucion, Diseñoyprogramacion, Innovacion, InteligenciaEmocional, Liderazgoeinfluencia, PensamientoAnalitico, PensamientoCritico, Solucion],
  };

  pieChart = new ChartJS(speedCanvas,
    {
      type: 'pie',
      data: {
        labels: ['Nivel alto',
          'Nivel medio',
          'Nivel bajo'],
        datasets: [speedData]
      },
      backgroundColor: [
        'green',
        'yellow',
        'red'
      ]
    });
  pieChart2 = new ChartJS(speedCanvas2,
    {
      type: 'pie',
      data: {
        labels: ['Nivel alto',
          'Nivel medio',
          'Nivel bajo'],
        datasets: [speedData2]
      },
      backgroundColor: [
        'green',
        'yellow',
        'red'
      ]
    });
  pieChart3 = new ChartJS(speedCanvas3,
    {
      type: 'pie',
      data: {
        labels: ['Nivel alto',
          'Nivel medio',
          'Nivel bajo'],
        datasets: [speedData3]
      },
      backgroundColor: [
        'green',
        'yellow',
        'red'
      ]
    });
  barChart = new ChartJS(radarCanvas, {

    type: 'pie',
    data: {
      labels: ["Nivel alto",
        'Nivel medio',
        'Nivel bajo'],
      datasets: [radarData]
    }
  });
  barChart2 = new ChartJS(radarCanvas2, {

    type: 'pie',
    data: {
      labels: ['Información contable',
        'Gestión de organizaciones',
        'Analisis Economico'],
      datasets: [radarData2],
    }
  });
  barChart3 = new ChartJS(radarCanvas3, {

    type: 'pie',
    data: {
      labels: ['Analisis y evolucion de sistemas',
        'Diseño y programacion de nuevas tecnologias',
        'Innovacion,originalidad e iniciativa',
        'Inteligencia emocional',
        'Liderazgo e influencia social',
        'Pensamiento analítico',
        'Pensamiento crítico',
        'Solucion de problemas'],
      datasets: [radarData3]
    }
  });
  contador++;
  if (contador > 0) {
    console.log("entre")
    pieChart.destroy()
    pieChart2.destroy()
    pieChart3.destroy()
    barChart.destroy()
    barChart2.destroy()
    barChart3.destroy()
  }
  }
  const obtenerNotas = async (email) => {
      InformacionContable = 0;
      Gestion = 0;
      AnalisisEconomico = 0;
      Analisisyevolucion = 0;
      Diseñoyprogramacion = 0;
      InteligenciaEmocional = 0;
      Innovacion = 0;
      Liderazgoeinfluencia = 0;
      PensamientoAnalitico = 0;
      PensamientoCritico = 0;
      Solucion = 0;
      ConocimientoDigital = 0;
      AprendizajeContinuo = 0;
      ComunicacionDigital = 0;
      Gestiondelainformacion = 0;
      Liderazgoenred = 0;
      Trabajoenred = 0;
      VisionEstrategica = 0;
      Orientacionalcliente = 0;
      compAlto=0
      compBajo=0
      compMedio=0
      conAlto=0
      conBajo=0
      conMedio=0
      actAlto=0
      actBajo=0
      actMedio=0
    const q = query(collection(db, "Estudiantes", email, "Notas"));
        try {
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            for (let index = 0; index < competenciasEstudiante.length; index++) {
              if (doc.id == competenciasEstudiante[index]) {
                if (index == 0) {
                  InformacionContable = doc.get("nota");
                  break;
                }
                if (index == 1) {
                  Gestion = doc.get("nota");
                  break;
                }
                if (index == 2) {
                  AnalisisEconomico = doc.get("nota");
                  break;
                }
                if (index == 3) {
                  Analisisyevolucion = doc.get("nota");
                  break;
                }
                if (index == 4) {
                  Diseñoyprogramacion = doc.get("nota");
                  break;
                }
                if (index == 5) {
                  InteligenciaEmocional = doc.get("nota");
                  break;
                }
                if (index == 6) {
                  Innovacion = doc.get("nota");
                  break;
                }
                if (index == 7) {
                  Liderazgoeinfluencia = doc.get("nota");
                  break;
                }
                if (index == 8) {
                  PensamientoAnalitico = doc.get("nota");
                  break;
                }
                if (index == 9) {
                  PensamientoCritico = doc.get("nota");
                  break;
                }
                if (index == 10) {
                  Solucion = doc.get("nota");
                  break;
                }
                if (index == 11) {
                  ConocimientoDigital = doc.get("nota");
                  break;
                }
                if (index == 12) {
                  AprendizajeContinuo = doc.get("nota");
                  break;
                }
                if (index == 13) {
                  ComunicacionDigital = doc.get("nota");
                  break;
                }
                if (index == 14) {
                  Gestiondelainformacion = doc.get("nota");
                  break;
                }
                if (index == 15) {
                  Liderazgoenred = doc.get("nota");
                  break;
                }
                if (index == 16) {
                  Trabajoenred = doc.get("nota");
                  break;
                }
                if (index == 17) {
                  VisionEstrategica = doc.get("nota");
                  break;
                }
                if (index == 18) {
                  Orientacionalcliente = doc.get("nota");
                  break;
                }
              }
            }
            
            
          });
        } catch (error) {
          swal({
            text: "El error fue: " + error
          })
        }
            actitudM = Analisisyevolucion + Diseñoyprogramacion + Innovacion + InteligenciaEmocional + Liderazgoeinfluencia + PensamientoAnalitico + PensamientoCritico + Solucion;
            competenciasM = ConocimientoDigital + AprendizajeContinuo + ComunicacionDigital + VisionEstrategica + Gestiondelainformacion + Liderazgoenred + Orientacionalcliente + Trabajoenred;
            conocimientoM = InformacionContable + Gestion + AnalisisEconomico;
            if (conocimientoM >= 12) {
                conAlto+=1
              } else {
                if (conocimientoM < 12 && conocimientoM >= 8) {
                    conMedio+=1
                }
                else {
                    conBajo+=1
                }
              }
              if (competenciasM >= 30) {
                compAlto+=1
              } else {
                if (competenciasM < 30 && competenciasM >= 19) {
                    compMedio+=1
                }
                else {
                  compBajo+=1
                }
              }
              if (actitudM >= 25) {
                actAlto+=1
              } else {
                if (actitudM < 25 && actitudM >= 16) {
                  actMedio+=1
                }
                else {
                  actBajo+=1
                }
              }
  }

export default function EstadisticasGrupales() {



    return (
        <div id="bloqueGrupal" >
          <h2 id="tituloEstadisticasGraf">AREA</h2>
        <button  onClick={(e) => {obtenerEmail(e)}} id="btEI" type="button" class="btn btn-success">Competencia</button>
        <button  onClick={(e) => {obtenerEmail(e)}} id="btEG" type="button" class="btn btn-success">Conocimiento</button>
        <button  onClick={(e) => {obtenerEmail(e)}} id="btEI" type="button" class="btn btn-success">Actitud</button>
        <div id="bloqueCompetencias">
        <div id="separador">
        <h2 id="tituloEstadisticas">Area COMPETENCIAS</h2>
        <canvas id="PieChartCompetencias" width="600" height="400">Competencias</canvas>
      </div>
      <div id="separador">
         <h2 id="tituloEstadisticas">Modulo COMPETENCIAS</h2>
        <canvas id="BarChartCompetencias" width="600" height="400">Conocimiento</canvas>
      </div>
        </div>
        <div id="bloqueConocimiento">
        <div id="separador">
        <h2 id="tituloEstadisticas">Area CONOCIMIENTO</h2>
        <canvas id="PieChartConocimiento" width="600" height="400">Competencias</canvas>
      </div>
      <div id="separador">
         <h2 id="tituloEstadisticas">Modulo CONOCIMIENTO</h2>
        <canvas id="BarChartConocimiento" width="600" height="400">Conocimiento</canvas>
      </div>
        </div>
        <div id="bloqueActitud">
        <div id="separador">
        <h2 id="tituloEstadisticas">Area ACTITUD</h2>
        <canvas id="PieChartActitud" width="600" height="400">Competencias</canvas>
      </div>
      <div id="separador">
         <h2 id="tituloEstadisticas">Modulo ACTITUD</h2>
        <canvas id="BarChartActitud" width="600" height="400">Conocimiento</canvas>
      </div>
        </div>
        </div>


    );


}
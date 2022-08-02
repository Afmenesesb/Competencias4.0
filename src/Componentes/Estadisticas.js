import { setDoc, doc, getDoc, collection, query, getDocs, onSnapshot } from "firebase/firestore";
import React, { Component, useState } from "react";
import db from "../firebaseConfig";
import swal from 'sweetalert';
import Encuestas from "./Encuestas";
import '../Estilos/estIndividual.css';
import { Radar, Bar, Chart } from 'react-chartjs-2';
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
);
var contador = 0;
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
var colorAnaEco, colorAnaEcoR
var colorAnaEvo, colorAnaEvoR
var colorDiseño, colorDiseñoR
var colorIntEmo, colorIntEmoR
var colorInno, colorInnoR
var colorLiderazgo, colorLiderazgoR
var colorPensAna, colorPensAnaR
var colorPensCri, colorPensCriR
var colorSolucion, colorSolucionR
var colorConoDig, colorConoDigR
var colorApCon, colorApConR
var colorComDig, colorComDigR
var colorGestionInf, colorGestionInfR
var colorLidRed, colorLidRedR
var colorTraRed, colorTraRedR
var colorVision, colorVisionR
var colorOriCli, colorOriCliR
var colorInfCont, colorInfContR
var colorGestion, colorGestionR
var notasEstudiante = [];
var barChart = null;
var barChart2 = null;
var barChart3 = null;
var radChart = null;
var radChart2 = null;
var radChart3 = null;
const obtenerNotas = async () => {
  var email = document.getElementById('textoBusqueda').value
  const q = query(collection(db, "Estudiantes", email, "Notas"));
  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      notasEstudiante.push(doc.id);
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
  estadisticas();
}

const estadisticas = () => {

  console.log(InformacionContable);
  actitudM = Analisisyevolucion + Diseñoyprogramacion + Innovacion + InteligenciaEmocional + Liderazgoeinfluencia + PensamientoAnalitico + PensamientoCritico + Solucion;
  competenciasM = ConocimientoDigital + AprendizajeContinuo + ComunicacionDigital + VisionEstrategica + Gestiondelainformacion + Liderazgoenred + Orientacionalcliente + Trabajoenred;
  conocimientoM = InformacionContable + Gestion + AnalisisEconomico;
  //InformacionContable
  if (InformacionContable == 5) {
    colorInfCont = 'rgba(27, 105, 17, 0.774)';
    colorInfContR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (InformacionContable == 4 || InformacionContable == 3) {
      colorInfCont = 'rgba(253, 165, 3, 0.774)';
      colorInfContR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorInfCont = 'rgba(175, 28, 28, 0.774)';
      colorInfContR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  //Gestion
  if (Gestion == 5) {
    colorGestion = 'rgba(27, 105, 17, 0.774)';
    colorGestionR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (Gestion == 4 || Gestion == 3) {
      colorGestion = 'rgba(253, 165, 3, 0.774)';
      colorGestionR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorGestion = 'rgba(175, 28, 28, 0.774)';
      colorGestionR = 'rgba(249, 61, 61, 0.400)';
    }
  }

  //AnalisisEconomico
  if (AnalisisEconomico == 5) {
    colorAnaEco = 'rgba(27, 105, 17, 0.774)';
    colorAnaEcoR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (AnalisisEconomico == 4 || AnalisisEconomico == 3) {
      colorAnaEco = 'rgba(253, 165, 3, 0.774)';
      colorAnaEcoR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorAnaEco = 'rgba(175, 28, 28, 0.774)';
      colorAnaEcoR = 'rgba(249, 61, 61, 0.400)';
    }
  }

  //AnalisisyEvolucion
  if (Analisisyevolucion == 4) {
    colorAnaEvo = 'rgba(27, 105, 17, 0.774)';
    colorAnaEvoR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (Analisisyevolucion == 3 || Analisisyevolucion == 2) {
      colorAnaEvo = 'rgba(253, 165, 3, 0.774)';
      colorAnaEvoR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorAnaEvo = 'rgba(175, 28, 28, 0.774)';
      colorAnaEvoR = 'rgba(249, 61, 61, 0.400)';
    }
  }

  //Conocimiento digital
  if (ConocimientoDigital == 5) {
    colorConoDig = 'rgba(27, 105, 17, 0.774)';
    colorConoDigR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (ConocimientoDigital == 4 || ConocimientoDigital == 3) {
      colorConoDig = 'rgba(253, 165, 3, 0.774)';
      colorConoDigR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorConoDig = 'rgba(175, 28, 28, 0.774)';
      colorConoDigR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (ComunicacionDigital == 5) {
    colorComDig = 'rgba(27, 105, 17, 0.774)';
    colorComDigR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (ComunicacionDigital == 4 || ComunicacionDigital == 3) {
      colorComDig = 'rgba(253, 165, 3, 0.774)';
      colorComDigR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorComDig = 'rgba(175, 28, 28, 0.774)';
      colorComDigR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (AprendizajeContinuo == 4) {
    colorApCon = 'rgba(27, 105, 17, 0.774)';
    colorApConR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (AprendizajeContinuo == 3 || AprendizajeContinuo == 2) {
      colorApCon = 'rgba(253, 165, 3, 0.774)';
      colorApConR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorApCon = 'rgba(175, 28, 28, 0.774)';
      colorApConR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (VisionEstrategica == 4) {
    colorVision = 'rgba(27, 105, 17, 0.774)';
    colorVisionR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (VisionEstrategica == 3 || VisionEstrategica == 2) {
      colorVision = 'rgba(253, 165, 3, 0.774)';
      colorVisionR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorVision = 'rgba(175, 28, 28, 0.774)';
      colorVisionR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (Orientacionalcliente == 4) {
    colorOriCli = 'rgba(27, 105, 17, 0.774)';
    colorOriCliR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (Orientacionalcliente == 3 || Orientacionalcliente == 2) {
      colorOriCli = 'rgba(253, 165, 3, 0.774)';
      colorOriCliR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorOriCli = 'rgba(175, 28, 28, 0.774)';
      colorOriCliR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (PensamientoAnalitico == 4) {
    colorPensAna = 'rgba(27, 105, 17, 0.774)';
    colorPensAnaR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (PensamientoAnalitico == 3 || PensamientoAnalitico == 2) {
      colorPensAna = 'rgba(253, 165, 3, 0.774)';
      colorPensAnaR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorPensAna = 'rgba(175, 28, 28, 0.774)';
      colorPensAnaR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (Solucion == 4) {
    colorSolucion = 'rgba(27, 105, 17, 0.774)';
    colorSolucionR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (Solucion == 3 || Solucion == 2) {
      colorSolucion = 'rgba(253, 165, 3, 0.774)';
      colorSolucionR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorSolucion = 'rgba(175, 28, 28, 0.774)';
      colorSolucionR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (Gestiondelainformacion == 5) {
    colorGestionInf = 'rgba(27, 105, 17, 0.774)';
    colorGestionInfR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (Gestiondelainformacion == 4 || Gestiondelainformacion == 3) {
      colorGestionInf = 'rgba(253, 165, 3, 0.774)';
      colorGestionInfR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorGestionInf = 'rgba(175, 28, 28, 0.774)';
      colorGestionInfR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (Liderazgoenred == 5) {
    colorLidRed = 'rgba(27, 105, 17, 0.774)';
    colorLidRedR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (Liderazgoenred == 4 || Liderazgoenred == 3) {
      colorLidRed = 'rgba(253, 165, 3, 0.774)';
      colorLidRedR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorLidRed = 'rgba(175, 28, 28, 0.774)';
      colorLidRedR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (Trabajoenred == 5) {
    colorTraRed = 'rgba(27, 105, 17, 0.774)';
    colorTraRedR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (Trabajoenred == 4 || Trabajoenred == 3) {
      colorTraRed = 'rgba(253, 165, 3, 0.774)';
      colorTraRedR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorTraRed = 'rgba(175, 28, 28, 0.774)';
      colorTraRedR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (PensamientoCritico == 5) {
    colorPensCri = 'rgba(27, 105, 17, 0.774)';
    colorPensCriR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (PensamientoCritico == 4 || PensamientoCritico == 3) {
      colorPensCri = 'rgba(253, 165, 3, 0.774)';
      colorPensCriR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorPensCri = 'rgba(175, 28, 28, 0.774)';
      colorPensCriR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (Diseñoyprogramacion == 2) {
    colorDiseño = 'rgba(27, 105, 17, 0.774)';
    colorDiseñoR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (Diseñoyprogramacion == 1) {
      colorDiseño = 'rgba(253, 165, 3, 0.774)';
      colorDiseñoR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorDiseño = 'rgba(175, 28, 28, 0.774)';
      colorDiseñoR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (Innovacion == 4) {
    colorInno = 'rgba(27, 105, 17, 0.774)';
    colorInnoR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (Innovacion == 2 || Innovacion == 3) {
      colorInno = 'rgba(253, 165, 3, 0.774)';
      colorInnoR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorInno = 'rgba(175, 28, 28, 0.774)';
      colorInnoR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (InteligenciaEmocional == 4) {
    colorIntEmo = 'rgba(27, 105, 17, 0.774)';
    colorIntEmoR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (InteligenciaEmocional == 2 || InteligenciaEmocional == 3) {
      colorIntEmo = 'rgba(253, 165, 3, 0.774)';
      colorIntEmoR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorIntEmo = 'rgba(175, 28, 28, 0.774)';
      colorIntEmoR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (Liderazgoeinfluencia == 4) {
    colorLiderazgo = 'rgba(27, 105, 17, 0.774)';
    colorLiderazgoR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (Liderazgoeinfluencia == 2 || Liderazgoeinfluencia == 3) {
      colorLiderazgo = 'rgba(253, 165, 3, 0.774)';
      colorLiderazgoR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorLiderazgo = 'rgba(175, 28, 28, 0.774)';
      colorLiderazgoR = 'rgba(249, 61, 61, 0.400)';
    }
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
  var base = {
    label: '',
    data: [0],
  };

  var speedCanvas = document.getElementById("modConocimiento");
  var speedData = {

    label: '#Respuestas correctas',
    data: [InformacionContable, Gestion, AnalisisEconomico],
    axis: 'y',
    backgroundColor: [
      colorInfContR,
      colorGestionR,
      colorAnaEcoR
    ],
    borderColor: [
      colorInfCont,
      colorGestion,
      colorAnaEco
    ],
    borderWidth: 1
  };
  var speedCanvas2 = document.getElementById("modCompetecias");
  var speedData2 = {

    label: '#Respuestas correctas',
    data: [ConocimientoDigital, AprendizajeContinuo, ComunicacionDigital, VisionEstrategica, Gestiondelainformacion, Liderazgoenred, Orientacionalcliente, Trabajoenred],
    axis: 'y',
    backgroundColor: [
      colorConoDigR,
      colorApConR,
      colorComDigR,
      colorVisionR,
      colorGestionInfR,
      colorLidRedR,
      colorOriCliR,
      colorTraRedR
    ],
    borderColor: [
      colorConoDig,
      colorApCon,
      colorComDig,
      colorVision,
      colorGestionInf,
      colorLidRed,
      colorOriCli,
      colorTraRed
    ],
    borderWidth: 1
  };
  var speedCanvas3 = document.getElementById("modActitud");
  var speedData3 = {

    label: '#Respuestas correctas',
    data: [Analisisyevolucion, Diseñoyprogramacion, Innovacion, InteligenciaEmocional, Liderazgoeinfluencia, PensamientoAnalitico, PensamientoCritico, Solucion],
    axis: 'y',
    backgroundColor: [
      colorAnaEvoR,
      colorDiseñoR,
      colorInnoR,
      colorIntEmoR,
      colorLiderazgoR,
      colorPensAnaR,
      colorPensCriR,
      colorSolucionR
    ],
    borderColor: [
      colorAnaEvo,
      colorDiseño,
      colorInno,
      colorIntEmo,
      colorLiderazgo,
      colorPensAna,
      colorPensCri,
      colorSolucion
    ],
    borderWidth: 1
  };
  var radarCanvas = document.getElementById("RadarChartCom");
  var radarData = {
    label: 'Preguntas Correctas',
    data: [ConocimientoDigital, AprendizajeContinuo, ComunicacionDigital, VisionEstrategica, Gestiondelainformacion, Liderazgoenred, Orientacionalcliente, Trabajoenred],
    backgroundColor: colorCompR,
    borderColor: colorComp,
    pointBackgroundColor: colorComp,
  };


  //CONOCIMIENTO
  var radarCanvas2 = document.getElementById("RadarChartCon");

  var radarData2 = {
    label: 'Preguntas Correctas',
    data: [InformacionContable, Gestion, AnalisisEconomico],
    backgroundColor: colorConoR,
    borderColor: colorCono,
    pointBackgroundColor: colorCono,

  };


  var radarCanvas3 = document.getElementById("RadarChartAct");
  var radarData3 = {
    label: 'Preguntas Correctas',
    data: [Analisisyevolucion, Diseñoyprogramacion, Innovacion, InteligenciaEmocional, Liderazgoeinfluencia, PensamientoAnalitico, PensamientoCritico, Solucion],
    backgroundColor: colorActiR,
    borderColor: colorActi,
    pointBackgroundColor: colorActi,
  };

  if (contador > 0) {

    barChart.destroy();
    barChart2.destroy();
    barChart3.destroy();
    radChart.destroy();
    radChart2.destroy();
    radChart3.destroy();
    console.log("entre");
  }

  barChart = new ChartJS(speedCanvas,
    {
      type: 'bar',
      data: {
        labels: ['Información contable',
          'Gestión de organizaciones',
          'Analisis Economico'],
        datasets: [speedData]

      },
      options: {
        indexAxis: 'y',
      } 
    });
  console.log(barChart.data.datasets.at(0))
  barChart2 = new ChartJS(speedCanvas2,
    {
      type: 'bar',
      data: {
        labels: ["Conocimiento digital",
          'Aprendizaje continuo',
          'Comunicacion Digital',
          'Vision estrategica',
          'Gestion de la informacion',
          'Liderazgo en red',
          'Orientacion al cliente',
          'Trabajo en red'],
        datasets: [speedData2]

      },
      options: {
        indexAxis: 'y',
      } 
    });
   barChart3 = new ChartJS(speedCanvas3,
    {
      type: 'bar',
      data: {
        labels: ['Analisis y evolucion de sistemas',
          'Diseño y programacion de nuevas tecnologias',
          'Innovacion,originalidad e iniciativa',
          'Inteligencia emocional',
          'Liderazgo e influencia social',
          'Pensamiento analítico',
          'Pensamiento crítico',
          'Solucion de problemas'],
        datasets: [speedData3]

      },
      options: {
        indexAxis: 'y',
      } 
    });
  radChart = new ChartJS(radarCanvas, {

    type: 'radar',
    data: {
      labels: ["Conocimiento digital",
        'Aprendizaje continuo',
        'Comunicacion Digital',
        'Vision estrategica',
        'Gestion de la informacion',
        'Liderazgo en red',
        'Orientacion al cliente',
        'Trabajo en red'],
      datasets: [radarData, base]
    }
  });
  radChart2 = new ChartJS(radarCanvas2, {

    type: 'radar',
    data: {
      labels: ['Información contable',
        'Gestión de organizaciones',
        'Analisis Economico'],
      datasets: [radarData2, base],
    }
  });
  radChart3 = new ChartJS(radarCanvas3, {

    type: 'radar',
    data: {
      labels: ['Analisis y evolucion de sistemas',
        'Diseño y programacion de nuevas tecnologias',
        'Innovacion,originalidad e iniciativa',
        'Inteligencia emocional',
        'Liderazgo e influencia social',
        'Pensamiento analítico',
        'Pensamiento crítico',
        'Solucion de problemas'],
      datasets: [radarData3, base]
    }
  });
  contador++;
}
const mostrarEstadisticaI= (e) => {

    document.getElementById('bloqueIndividual').style.display = 'block'
    document.getElementById('bloqueGrupal').style.display = 'none'
  }
  const mostrarEstadisticaG= (e) => {
    document.getElementById('bloqueIndividual').style.display = 'none'
    document.getElementById('bloqueGrupal').style.display = 'block'
  }
  const buscarGraficasCorreo= (e) => {
    obtenerNotas();
    document.getElementById('graficasIndividuales').style.display = 'block'
  }
export default function Estadisticas() {
    return (
        <div id="formEstadisticas">
       <div id="btnsGrafica" class="btn-group1" role="group" aria-label="Basic example">
        <h2 id="tituloEstadisticas">ESTADISTICAS</h2>
        <button  id="btEI" onClick={(e) => {mostrarEstadisticaI(e)}} type="button" class="btn btn-success">Estadisticas INDIVIDUALES</button>
        <button  id="btEG" onClick={(e) => {mostrarEstadisticaG(e)}} type="button" class="btn btn-success">Estadisticas GRUPALES</button>
      </div>
      <div id="bloqueIndividual">
      <textarea id="textoBusqueda"placeholder="Ingrese el correo del estudiante..."></textarea>
      <button id="botonBuscar" onClick={(e) => {buscarGraficasCorreo(e)}}class="btn btn-warning">Buscar</button>
      <div id="graficasIndividuales">
      <div id="convenciones">
      <button disabled="true" id="btnRojo">Nivel bajo</button>
      <button disabled="true"id="btnAmarillo">Nivel medio</button>
      <button disabled="true"id="btnVerde"> Nivel alto</button>
      </div>
      <div id="separador">
      <h2 id="tituloEstadisticas">Area COMPETENCIAS</h2>
        <canvas id="RadarChartCom" width="600" height="400">Competencias</canvas>
      </div>
      <div id="separador">
      <h2 id="tituloEstadisticas">Area CONOCIMIENTO</h2>
        <canvas id="RadarChartCon" width="600" height="400">Conocimiento</canvas>
      </div>
      <div id="separador">
      <h2 id="tituloEstadisticas">Area ACTITUD</h2>
        <canvas id="RadarChartAct" width="600" height="400">Actitud</canvas>
      </div>  
      <div id="separador">
      <h2 id="tituloEstadisticas">CONOCIMIENTO por Modulo</h2>
        <canvas id="modConocimiento" width="600" height="400">Conocimiento por Modulo</canvas>
      </div>
      <div id="separador">
      <h2 id="tituloEstadisticas">COMPETENCIAS por Modulo</h2>
        <canvas id="modCompetecias" width="600" height="400">Competencias por Modulo</canvas>
      </div >
      <div id="separador">
      <h2 id="tituloEstadisticas">ACTITUD por Modulo</h2>
        <canvas id="modActitud" width="300" height="200">Actitud por Modulo</canvas>
      </div>
      </div>
        </div> 
        </div>
    );

}
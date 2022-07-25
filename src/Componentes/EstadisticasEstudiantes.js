import { setDoc, doc, collection, query, getDocs, onSnapshot } from "firebase/firestore";
import React, { Component, useState } from "react";
import db from "../firebaseConfig";
import swal from 'sweetalert';
import Encuestas from "./Encuestas";
import '../Estilos/estIndividual.css';
import { Radar, Bar } from 'react-chartjs-2';
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
var InformacionContable = 0;
var Gestion = 0;
var AnalisisEconomico = 0;
var Analisisyevolucion=0;
var Diseñoyprogramacion=0;
var InteligenciaEmocional=0;
var Innovacion=0;
var Liderazgoeinfluencia=0;
var PensamientoAnalitico=0;
var PensamientoCritico=0;
var Solucion=0;
var ConocimientoDigital=0;
var AprendizajeContinuo=0;
var ComunicacionDigital=0;
var Gestiondelainformacion=0;
var Liderazgoenred=0;
var Trabajoenred=0;
var VisionEstrategica=0;
var Orientacionalcliente=0;
var competenciasEstudiante = ["Informacion Contable", "Gestion de organizaciones", "Analisis Economico",
 "Analisis y evolucion de sistemas", "Diseño y programacion de nuevas tecnologias","Inteligencia Emocional", 
 "Innovacion, Originalidad e iniciativa", "Liderazgo e influencia social", "Pensamiento Analitico", "Pensamiento Critico",
  "Solucion de problemas","Conocimiento Digital", "Aprendizaje Continuo", "Comunicacion Digital", "Gestion de la informacion", 
  "Liderazgo en red", "Trabajo en red","Vision Estrategica", "Orientacion al cliente"];
var actitudM
var competenciasM
var conocimientoM
var colorActi
var colorActiR
var colorComp
var colorCompR
var colorCono
var colorConoR
var colorInfCont, colorInfContR
var colorGestion, colorGestionR
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

var notasEstudiante = [];
const obtenerNotas = async () => {
  var emailEstudiante = document.getElementById('email').innerText;
  const q = query(collection(db, "Estudiantes", emailEstudiante, "Notas"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    for (let index = 0; index < competenciasEstudiante; index++) {
      if(doc.id==competenciasEstudiante[index])
      {
        if(index==0)
        {
          InformacionContable=doc.get("nota");
          break;
        }
        if(index==1)
        {
          Gestion=doc.get("nota");
          break;
        }
        if(index==2)
        {
          AnalisisEconomico=doc.get("nota");
          break;
        }
        if(index==3)
        {
          Analisisyevolucion=doc.get("nota");
          break;
        }
        if(index==4)
        {
          Diseñoyprogramacion=doc.get("nota");
          break;
        }
        if(index==5)
        {
          InteligenciaEmocional=doc.get("nota");
          break;
        }
        if(index==6)
        {
          Innovacion=doc.get("nota");
          break;
        }
        if(index==7)
        {
          Liderazgoeinfluencia=doc.get("nota");
          break;
        }
        if(index==8)
        {
          PensamientoAnalitico=doc.get("nota");
          break;
        }
        if(index==9)
        {
          PensamientoCritico=doc.get("nota");
          break;
        }
        if(index==10)
        {
          Solucion=doc.get("nota");
          break;
        }
        if(index==11)
        {
          ConocimientoDigital=doc.get("nota");
          break;
        }
        if(index==12)
        {
          AprendizajeContinuo=doc.get("nota");
          break;
        }
        if(index==13)
        {
          ComunicacionDigital=doc.get("nota");
          break;
        }
        if(index==14)
        {
          Gestiondelainformacion=doc.get("nota");
          break;
        }
        if(index==15)
        {
          Liderazgoenred=doc.get("nota");
          break;
        }
        if(index==16)
        {
          Trabajoenred=doc.get("nota");
          break;
        }
        if(index==17)
        {
          VisionEstrategica=doc.get("nota");
          break;
        }
        if(index==18)
        {
          Orientacionalcliente=doc.get("nota");
          break;
        }
        
      }
      
    }
  });
  
  console.log(InteligenciaEmocional);
}

export default function EstadisticasEstudiantes() {

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



  function estadisticas() {
    InformacionContable = 3;
    Gestion = 5;
    AnalisisEconomico = 2;
    Analisisyevolucion = 2;
    Diseñoyprogramacion = 2;
    InteligenciaEmocional = 3;
    Innovacion = 1;
    Liderazgoeinfluencia = 4;
    PensamientoAnalitico = 3;
    PensamientoCritico = 4;
    Solucion = 2;
    ConocimientoDigital = 5;
    AprendizajeContinuo = 2;
    ComunicacionDigital = 3;
    Gestiondelainformacion = 1;
    Liderazgoenred = 2;
    Trabajoenred = 3;
    VisionEstrategica = 4;
    Orientacionalcliente = 3;

    actitudM = Analisisyevolucion + Diseñoyprogramacion + Innovacion + InteligenciaEmocional + Liderazgoeinfluencia + PensamientoAnalitico + PensamientoCritico + Solucion;
    competenciasM = ConocimientoDigital + AprendizajeContinuo + ComunicacionDigital + VisionEstrategica + Gestiondelainformacion + Liderazgoenred + Orientacionalcliente + Trabajoenred;
    conocimientoM = InformacionContable + Gestion + AnalisisEconomico;

    //InformacionContable
    if (InformacionContable==5) {
      colorInfCont = 'rgba(27, 105, 17, 0.774)';
      colorInfContR = 'rgba(41, 253, 3, 0.400)';
    } else {
      if (InformacionContable==4 || InformacionContable==3) {
        colorInfCont = 'rgba(253, 165, 3, 0.774)';
        colorInfContR = 'rgba(253, 253, 3, 0.400)';
      }
      else {
        colorInfCont = 'rgba(175, 28, 28, 0.774)';
        colorInfContR = 'rgba(249, 61, 61, 0.400)';
      }
    }
    //Gestion
    if (Gestion==5) {
      colorGestion = 'rgba(27, 105, 17, 0.774)';
      colorGestionR = 'rgba(41, 253, 3, 0.400)';
    } else {
      if (Gestion==4 || Gestion==3) {
        colorGestion = 'rgba(253, 165, 3, 0.774)';
        colorGestionR = 'rgba(253, 253, 3, 0.400)';
      }
      else {
        colorGestion = 'rgba(175, 28, 28, 0.774)';
        colorGestionR = 'rgba(249, 61, 61, 0.400)';
      }
    }
    
    //AnalisisEconomico
     if (AnalisisEconomico==5) {
      colorAnaEco = 'rgba(27, 105, 17, 0.774)';
      colorAnaEcoR = 'rgba(41, 253, 3, 0.400)';
    } else {
      if (AnalisisEconomico==4 || AnalisisEconomico==3) {
        colorAnaEco = 'rgba(253, 165, 3, 0.774)';
        colorAnaEcoR = 'rgba(253, 253, 3, 0.400)';
      }
      else {
        colorAnaEco = 'rgba(175, 28, 28, 0.774)';
        colorAnaEcoR = 'rgba(249, 61, 61, 0.400)';
      }
    } 
    
    //AnalisisyEvolucion
    if (Analisisyevolucion==4) {
     colorAnaEvo= 'rgba(27, 105, 17, 0.774)';
     colorAnaEvoR = 'rgba(41, 253, 3, 0.400)';
   } else {
     if (Analisisyevolucion==3 || Analisisyevolucion==2) {
       colorAnaEvo = 'rgba(253, 165, 3, 0.774)';
       colorAnaEvoR = 'rgba(253, 253, 3, 0.400)';
     }
     else {
       colorAnaEvo = 'rgba(175, 28, 28, 0.774)';
       colorAnaEvoR = 'rgba(249, 61, 61, 0.400)';
     }
   }

   //Conocimiento digital
   if (ConocimientoDigital==5) {
    colorConoDig= 'rgba(27, 105, 17, 0.774)';
    colorConoDigR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (ConocimientoDigital==4 || ConocimientoDigital==3) {
      colorConoDig = 'rgba(253, 165, 3, 0.774)';
      colorConoDigR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorConoDig = 'rgba(175, 28, 28, 0.774)';
      colorConoDigR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (ComunicacionDigital==5) {
    colorComDig= 'rgba(27, 105, 17, 0.774)';
    colorComDigR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (ComunicacionDigital==4 || ComunicacionDigital==3) {
      colorComDig = 'rgba(253, 165, 3, 0.774)';
      colorComDigR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorComDig = 'rgba(175, 28, 28, 0.774)';
      colorComDigR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (AprendizajeContinuo==4) {
    colorApCon= 'rgba(27, 105, 17, 0.774)';
    colorApConR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (AprendizajeContinuo==3 || AprendizajeContinuo==2) {
      colorApCon = 'rgba(253, 165, 3, 0.774)';
      colorApConR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorApCon = 'rgba(175, 28, 28, 0.774)';
      colorApConR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (VisionEstrategica==4) {
    colorVision= 'rgba(27, 105, 17, 0.774)';
    colorVisionR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (VisionEstrategica==3 || VisionEstrategica==2) {
      colorVision = 'rgba(253, 165, 3, 0.774)';
      colorVisionR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorVision = 'rgba(175, 28, 28, 0.774)';
      colorVisionR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (Orientacionalcliente==4) {
    colorOriCli= 'rgba(27, 105, 17, 0.774)';
    colorOriCliR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (Orientacionalcliente==3 || Orientacionalcliente==2) {
      colorOriCli = 'rgba(253, 165, 3, 0.774)';
      colorOriCliR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorOriCli = 'rgba(175, 28, 28, 0.774)';
      colorOriCliR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (PensamientoAnalitico==4) {
    colorPensAna= 'rgba(27, 105, 17, 0.774)';
    colorPensAnaR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (PensamientoAnalitico==3 || PensamientoAnalitico==2) {
      colorPensAna = 'rgba(253, 165, 3, 0.774)';
      colorPensAnaR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorPensAna = 'rgba(175, 28, 28, 0.774)';
      colorPensAnaR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (Solucion==4) {
    colorSolucion= 'rgba(27, 105, 17, 0.774)';
    colorSolucionR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (Solucion==3 || Solucion==2) {
      colorSolucion = 'rgba(253, 165, 3, 0.774)';
      colorSolucionR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorSolucion = 'rgba(175, 28, 28, 0.774)';
      colorSolucionR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (Gestiondelainformacion==5) {
    colorGestionInf= 'rgba(27, 105, 17, 0.774)';
    colorGestionInfR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (Gestiondelainformacion==4 || Gestiondelainformacion==3) {
      colorGestionInf = 'rgba(253, 165, 3, 0.774)';
      colorGestionInfR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorGestionInf = 'rgba(175, 28, 28, 0.774)';
      colorGestionInfR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (Liderazgoenred==5) {
    colorLidRed= 'rgba(27, 105, 17, 0.774)';
    colorLidRedR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (Liderazgoenred==4 || Liderazgoenred==3) {
      colorLidRed = 'rgba(253, 165, 3, 0.774)';
      colorLidRedR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorLidRed = 'rgba(175, 28, 28, 0.774)';
      colorLidRedR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (Trabajoenred==5) {
    colorTraRed= 'rgba(27, 105, 17, 0.774)';
    colorTraRedR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (Trabajoenred==4 || Trabajoenred==3) {
      colorTraRed = 'rgba(253, 165, 3, 0.774)';
      colorTraRedR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorTraRed = 'rgba(175, 28, 28, 0.774)';
      colorTraRedR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (PensamientoCritico==5) {
    colorPensCri= 'rgba(27, 105, 17, 0.774)';
    colorPensCriR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (PensamientoCritico==4 || PensamientoCritico==3) {
      colorPensCri = 'rgba(253, 165, 3, 0.774)';
      colorPensCriR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorPensCri = 'rgba(175, 28, 28, 0.774)';
      colorPensCriR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (Diseñoyprogramacion==2) {
    colorDiseño= 'rgba(27, 105, 17, 0.774)';
    colorDiseñoR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (Diseñoyprogramacion==1) {
      colorDiseño = 'rgba(253, 165, 3, 0.774)';
      colorDiseñoR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorDiseño = 'rgba(175, 28, 28, 0.774)';
      colorDiseñoR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (Innovacion==4) {
    colorInno= 'rgba(27, 105, 17, 0.774)';
    colorInnoR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (Innovacion==2 || Innovacion==3) {
      colorInno = 'rgba(253, 165, 3, 0.774)';
      colorInnoR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorInno = 'rgba(175, 28, 28, 0.774)';
      colorInnoR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (InteligenciaEmocional==4) {
    colorIntEmo= 'rgba(27, 105, 17, 0.774)';
    colorIntEmoR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (InteligenciaEmocional==2 || InteligenciaEmocional==3) {
      colorIntEmo = 'rgba(253, 165, 3, 0.774)';
      colorIntEmoR = 'rgba(253, 253, 3, 0.400)';
    }
    else {
      colorIntEmo = 'rgba(175, 28, 28, 0.774)';
      colorIntEmoR = 'rgba(249, 61, 61, 0.400)';
    }
  }
  if (Liderazgoeinfluencia==4) {
    colorLiderazgo= 'rgba(27, 105, 17, 0.774)';
    colorLiderazgoR = 'rgba(41, 253, 3, 0.400)';
  } else {
    if (Liderazgoeinfluencia==2 || Liderazgoeinfluencia==3) {
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
  }

  function mostrarEstadisticaA(e) {
    obtenerNotas();
    document.getElementById('graficasEstudiantes').style.display = 'block'
    document.getElementById('graficasEstudiantesM').style.display = 'none'
  }
  function mostrarEstadisticaM(e) {
    document.getElementById('graficasEstudiantes').style.display = 'none'
    document.getElementById('graficasEstudiantesM').style.display = 'block'
  }


  return (
    <div>
      <div id="btnsGraficas" class="btn-group" role="group" aria-label="Basic example">
        <button onClick={(e) => { mostrarEstadisticaA(e) }} id="btEA" type="button" class="btn btn-success">Estadisticas AREA</button>
        <button onClick={(e) => { mostrarEstadisticaM(e) }} id="btEM" type="button" class="btn btn-success">Estadisticas MODULO</button>
      </div>
      <div id="graficasEstudiantes" class="mencuesta">
        <h1 id="tituloCaracteristicasArea" class="tituloCaracteristicas">Caracterización
        </h1>
        <h1 id="textoCaracteristicasArea" class="textoCaracteristicas">Cada una de las áreas contiene una caracterización por nivel, los cuales son:
            Nivel alto:
            Nivel Medio:
            Nivel Alto:
        </h1>
        <div id="grfCom" class="mengraf">COMPETENCIAS<Radar data={dataCompetencias} /></div>
        <div id="grfCon" class="mengraf">CONOCIMIENTO<Radar data={dataConocimiento} /></div>
        <div id="grfAct" class="mengraf">ACTITUD<Radar data={dataActitud} /></div>
      </div>
      <div id="graficasEstudiantesM" class="mencuesta">
      <h1 id="tituloCaracteristicasArea" class="tituloCaracteristicas">Caracterización
        </h1>
        <h1 id="textoCaracteristicasArea" class="textoCaracteristicas">Cada una de las áreas contiene una caracterización por nivel, los cuales son:
            Nivel alto:
            Nivel Medio:
            Nivel Alto:
        </h1>
        <div id="grfConM" class="mengraf">CONOCIMIENTO por MODULO<Bar data={dataModulosCono} /></div>
        <div id="grfComM" class="mengraf">COMPETENCIAS por MODULO<Bar data={dataModulosComp} /></div>
        <div id="grfActM" class="mengraf">ACTITUD por MODULO<Bar data={dataModulosAct} /></div>
      </div>
    </div>



  );


}
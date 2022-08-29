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
  ArcElement,
} from 'chart.js';
import { Email, TramRounded } from "@material-ui/icons";
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
  ArcElement,
);

var gesIAlto=0,gesIMedio=0,gesIBajo=0;
var compAlto=0,compBajo=0,compMedio=0;
var conAlto=0,conBajo=0,conMedio=0;
var actAlto=0,actBajo=0,actMedio=0;
var infConAlto=0,infConMedio=0,infConBajo=0;
var gesAlto=0,gesMedio=0,gesBajo=0;
var anaEcoAlto=0,anaEcoMedio=0,anaEcoBajo=0;
var anaEvoAlto=0,anaEvoMedio=0,anaEvoBajo=0;
var diProAlto=0,diProMedio=0,diProBajo=0;
var inEmAlto=0,inEmMedio=0,inEmBajo=0;
var innoAlto=0,innoMedio=0,innoBajo=0;
var lidAlto=0,lidMedio=0,lidBajo=0;
var penaAlto=0,penaMedio=0,penaBajo=0;
var pencAlto=0,pencMedio=0,pencBajo=0;
var solAlto=0,solMedio=0,solBajo=0;
var condAlto=0,condMedio=0,condBajo=0;
var aprcAlto=0,aprcMedio=0,aprcBajo=0;
var comdAlto=0,comdMedio=0,comdBajo=0;
var lidredAlto=0,lidredMedio=0,lidredBajo=0;
var traredAlto=0,traredMedio=0,traredBajo=0;
var viseAlto=0,viseMedio=0,viseBajo=0;
var orcliAlto=0,orcliMedio=0,orcliBajo=0;
var actitudM=0;
var conocimientoM=0;
var competenciasM=0;
var contador = 0;
var bandera =0;
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
    compAlto=0
    compBajo=0
    compMedio=0
    conAlto=0
    conBajo=0
    conMedio=0
    actAlto=0
    actBajo=0
    actMedio=0
    infConAlto=0
    infConMedio=0
    infConBajo=0
    gesAlto=0
    gesMedio=0
    gesBajo=0
    anaEcoAlto=0
    anaEcoMedio=0
    anaEcoBajo=0
    anaEvoAlto=0
    anaEvoMedio=0
    anaEvoBajo=0
    diProAlto=0
    diProMedio=0
    diProBajo=0;
    inEmAlto=0
    inEmMedio=0
    inEmBajo=0
    innoAlto=0
    innoMedio=0
    innoBajo=0
    lidAlto=0
    lidMedio=0
    lidBajo=0
    penaAlto=0
    penaMedio=0
    penaBajo=0
    pencAlto=0
    pencMedio=0
    pencBajo=0
    solAlto=0
    solMedio=0
    solBajo=0
    condAlto=0
    condMedio=0
    condBajo=0;
    aprcAlto=0
    aprcMedio=0
    aprcBajo=0;
    comdAlto=0
    comdMedio=0
    comdBajo=0;
    lidredAlto=0
    lidredMedio=0
    lidredBajo=0;
    traredAlto=0
    traredMedio=0
    traredBajo=0;
    viseAlto=0
    viseMedio=0
    viseBajo=0
    orcliAlto=0
    orcliMedio=0
    orcliBajo=0
    gesIAlto=0;gesIMedio=0;gesIBajo=0;
    querySnapshotE.forEach((docE)=>{
        obtenerNotas(docE.id)
    });
  }
  /*Funcion para obtener las notas de los usuarios*/
  const obtenerNotas = async (email) => {
    
    const q = query(collection(db, "Estudiantes", email, "Notas"));
        try {
          const querySnapshot = await getDocs(q);
          actitudM=0;
          competenciasM=0;
          conocimientoM=0;
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
          querySnapshot.forEach((doc) => {
            for (let index = 0; index < competenciasEstudiante.length; index++) {
              if (doc.id == competenciasEstudiante[index]) {
                if (index == 0) {
                  InformacionContable = doc.get("nota");
                  if (InformacionContable == 5) {
                    infConAlto++
                  } else {
                    if (InformacionContable == 4 || InformacionContable == 3) {
                     infConMedio++
                    }
                    else {
                      infConBajo++
                    }
                  }
                  break;
                }
                if (index == 1) {
                  Gestion = doc.get("nota");
                  if (Gestion == 5) {
                    gesAlto++
                  } else {
                    if (Gestion == 4 || Gestion == 3) {
                      gesMedio++
                    }
                    else {
                      gesBajo++
                    }
                  }
                  break;
                }
                if (index == 2) {
                  AnalisisEconomico = doc.get("nota");
                  if (AnalisisEconomico == 5) {
                    anaEcoAlto++
                  } else {
                    if (AnalisisEconomico == 4 || AnalisisEconomico == 3) {
                      anaEcoMedio++
                    }
                    else {
                      anaEcoBajo++
                    }
                  }
                  break;
                }
                if (index == 3) {
                  Analisisyevolucion = doc.get("nota");
                  if (Analisisyevolucion == 4) {
                    anaEvoAlto++
                  } else {
                    if (Analisisyevolucion == 3 || Analisisyevolucion == 2) {
                      anaEvoMedio++
                    }
                    else {
                      anaEvoBajo++
                    }
                  }
                  break;
                }
                if (index == 4) {
                  Diseñoyprogramacion = doc.get("nota");
                  if (Diseñoyprogramacion == 2) {
                    diProAlto++
                  } else {
                    if (Diseñoyprogramacion == 1) {
                    diProMedio++
                    }
                    else {
                     diProBajo++
                    }
                  }
                  break;
                }
                if (index == 5) {
                  InteligenciaEmocional = doc.get("nota");
                  if (InteligenciaEmocional == 4) {
                    inEmAlto++
                  } else {
                    if (InteligenciaEmocional == 2 || InteligenciaEmocional == 3) {
                      inEmMedio++
                    }
                    else {
                      inEmBajo++
                    }
                  }
                  break;
                }
                if (index == 6) {
                  Innovacion = doc.get("nota");
                  if (Innovacion == 4) {
                    innoAlto++
                  } else {
                    if (Innovacion == 2 || Innovacion == 3) {
                     innoMedio++
                    }
                    else {
                    innoBajo++
                    }
                  }
                  break;
                }
                if (index == 7) {
                  Liderazgoeinfluencia = doc.get("nota");
                  if (Liderazgoeinfluencia == 4) {
                    lidAlto++
                  } else {
                    if (Liderazgoeinfluencia == 2 || Liderazgoeinfluencia == 3) {
                      lidMedio++
                    }
                    else {
                      lidBajo++
                    }
                  }
                  break;
                }
                if (index == 8) {
                  PensamientoAnalitico = doc.get("nota");
                  if (PensamientoAnalitico == 4) {
                    penaAlto++
                  } else {
                    if (PensamientoAnalitico == 3 || PensamientoAnalitico == 2) {
                      penaMedio++
                    }
                    else {
                      penaBajo++
                    }
                  }
                  break;
                }
                if (index == 9) {
                  PensamientoCritico = doc.get("nota");
                  if (PensamientoCritico == 5) {
                    pencAlto++
                  } else {
                    if (PensamientoCritico == 4 || PensamientoCritico == 3) {
                     pencMedio++
                    }
                    else {
                     pencBajo++
                    }
                  }
                  break;
                }
                if (index == 10) {
                  Solucion = doc.get("nota");
                  if (Solucion == 4) {
                    solAlto++
                  } else {
                    if (Solucion == 3 || Solucion == 2) {
                      solMedio++
                    }
                    else {
                      solBajo++
                    }
                  }
                  break;
                }
                if (index == 11) {
                  ConocimientoDigital = doc.get("nota");
                  if (ConocimientoDigital == 5) {
                    condAlto++
                  } else {
                    if (ConocimientoDigital == 4 || ConocimientoDigital == 3) {
                      condMedio++
                    }
                    else {
                      condBajo++
                    }
                  }
                  break;
                }
                if (index == 12) {
                  AprendizajeContinuo = doc.get("nota");
                  if (AprendizajeContinuo == 4) {
                    aprcAlto++
                  } else {
                    if (AprendizajeContinuo == 3 || AprendizajeContinuo == 2) {
                      aprcMedio++
                    }
                    else {
                      aprcBajo++
                    }
                  }
                  break;
                }
                if (index == 13) {
                  ComunicacionDigital = doc.get("nota");
                  if (ComunicacionDigital == 5) {
                    comdAlto++
                  } else {
                    if (ComunicacionDigital == 4 || ComunicacionDigital == 3) {
                      comdMedio++
                    }
                    else {
                      comdBajo++
                    }
                  }
                  break;
                }
                if (index == 14) {
                  Gestiondelainformacion = doc.get("nota");
                  if (Gestiondelainformacion == 5) {
                    gesIAlto++
                  } else {
                    if (Gestiondelainformacion == 4 || Gestiondelainformacion == 3) {
                     gesIMedio++
                    }
                    else {
                      gesIBajo++
                    }
                  }
                  break;
                }
                if (index == 15) {
                  Liderazgoenred = doc.get("nota");
                  if (Liderazgoenred == 5) {
                   lidredAlto++
                  } else {
                    if (Liderazgoenred == 4 || Liderazgoenred == 3) {
                      lidredMedio++
                    }
                    else {
                      lidredBajo++
                    }
                  }
                  break;
                }
                if (index == 16) {
                  Trabajoenred = doc.get("nota");
                  if (Trabajoenred == 5) {
                    traredAlto++
                  } else {
                    if (Trabajoenred == 4 || Trabajoenred == 3) {
                      traredMedio++
                    }
                    else {
                      traredBajo++
                    }
                  }
                  break;
                }
                if (index == 17) {
                  VisionEstrategica = doc.get("nota");
                  if (VisionEstrategica == 4) {
                    viseAlto++
                  } else {
                    if (VisionEstrategica == 3 || VisionEstrategica == 2) {
                     viseMedio++
                    }
                    else {
                     viseBajo++
                    }
                  }
                  break;
                }
                if (index == 18) {
                  Orientacionalcliente = doc.get("nota");
                  if (Orientacionalcliente == 4) {
                    orcliAlto++
                  } else {
                    if (Orientacionalcliente == 3 || Orientacionalcliente == 2) {
                    orcliMedio++
                    }
                    else {
                      orcliBajo++
                    }
                  }
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
          var speedCanvas = document.getElementById("PieChartCompetencias");
          var speedData = {
            label: '#Cantidad alumnos',
            data: [compAlto, compMedio, compBajo],
            backgroundColor: [
              'rgba(41, 253, 3, 0.400)',
              'rgba(253, 253, 3, 0.400)',
              'rgba(249, 61, 61, 0.400)'
            ],
            borderColor:[
              'rgba(27, 105, 17, 0.774)',
              'rgba(253, 165, 3, 0.774)',
              'rgba(175, 28, 28, 0.774)'
              

            ],
            hoverOffset: 4
          };
          var speedCanvas2 = document.getElementById("PieChartConocimiento");
          var speedData2 = {
        
            label: '#Cantidad alumnos',
            data: [conAlto,conMedio,conBajo],
            backgroundColor: [
              'rgba(41, 253, 3, 0.400)',
              'rgba(253, 253, 3, 0.400)',
              'rgba(249, 61, 61, 0.400)'
            ],
            borderColor:[
              'rgba(27, 105, 17, 0.774)',
              'rgba(253, 165, 3, 0.774)',
              'rgba(175, 28, 28, 0.774)'
              

            ],
            hoverOffset: 4
          };
          var speedCanvas3 = document.getElementById("PieChartActitud");
          var speedData3 = {
            label: '#Cantidad alumnos',
            data: [actAlto,actMedio,actBajo],
            backgroundColor: [
              'rgba(41, 253, 3, 0.400)',
              'rgba(253, 253, 3, 0.400)',
              'rgba(249, 61, 61, 0.400)'
            ],
            borderColor:[
              'rgba(27, 105, 17, 0.774)',
              'rgba(253, 165, 3, 0.774)',
              'rgba(175, 28, 28, 0.774)'
            ],
            hoverOffset: 4
          };
          var radarCanvas = document.getElementById("BarChartCompetencias");
          var radarData = {
            labels: ["Conocimiento digital",
            'Aprendizaje continuo',
            'Comunicacion Digital',
            'Vision estrategica',
            'Gestion de la informacion',
            'Liderazgo en red',
            'Orientacion al cliente',
            'Trabajo en red'],
            datasets: [
              {
                label: 'Nivel alto',
                data: [condAlto,aprcAlto,comdAlto,viseAlto,gesAlto,lidredAlto,orcliAlto,traredAlto],
                backgroundColor: 'rgba(41, 253, 3, 0.400)',
                borderColor:'rgba(27, 105, 17, 0.774)'
              },
              {
                label: 'Nivel medio',
                data: [condMedio,aprcMedio,comdMedio,viseMedio,gesMedio,lidredMedio,orcliMedio,traredMedio],
                backgroundColor: 'rgba(253, 253, 3, 0.400)',
                borderColor:'rgba(253, 165, 3, 0.774)'
              },
              {
                label: 'Nivel bajo',
                data: [condBajo,aprcBajo,comdBajo,viseBajo,gesBajo,lidredBajo,orcliBajo,traredBajo],
                backgroundColor: 'rgba(249, 61, 61, 0.400)',
                borderColor:'rgba(175, 28, 28, 0.774)'
              },
            ]
          };
        
        
          //CONOCIMIENTO
          var radarCanvas2 = document.getElementById("BarChartConocimiento");
        
          var radarData2 = {
            
            labels: ['Información contable',
            'Gestión de organizaciones',
            'Analisis Economico'],
            datasets: [
              {
                label: 'Nivel alto',
                data: [infConAlto,gesAlto,anaEcoAlto],
                backgroundColor: 'rgba(41, 253, 3, 0.400)',
                borderColor:'rgba(27, 105, 17, 0.774)'
              },
              {
                label: 'Nivel medio',
                data: [infConMedio,gesMedio,anaEcoMedio],
                backgroundColor: 'rgba(253, 253, 3, 0.400)',
                borderColor:'rgba(253, 165, 3, 0.774)'
              },
              {
                label: 'Nivel bajo',
                data: [infConBajo,gesBajo,anaEcoBajo],
                backgroundColor: 'rgba(249, 61, 61, 0.400)',
                borderColor:'rgba(175, 28, 28, 0.774)'
              },
            ]
          };
        
        
          var radarCanvas3 = document.getElementById("BarChartActitud");
          var radarData3 = {
            labels: ['Analisis y evolucion de sistemas',
            'Diseño y programacion de nuevas tecnologias',
            'Innovacion,originalidad e iniciativa',
            'Inteligencia emocional',
            'Liderazgo e influencia social',
            'Pensamiento analítico',
            'Pensamiento crítico',
            'Solucion de problemas'],
            datasets: [
              {
                label: 'Nivel alto',
                data: [anaEvoAlto,diProAlto,innoAlto,inEmAlto,lidAlto,penaAlto,pencAlto,solAlto],
                backgroundColor: 'rgba(41, 253, 3, 0.400)',
                borderColor:'rgba(27, 105, 17, 0.774)'
              },
              {
                label: 'Nivel medio',
                data: [anaEvoMedio,diProMedio,innoMedio,inEmMedio,lidMedio,penaMedio,pencMedio,solMedio],
                backgroundColor: 'rgba(253, 253, 3, 0.400)',
                borderColor:'rgba(253, 165, 3, 0.774)'
              },
              {
                label: 'Nivel bajo',
                data: [anaEvoBajo,diProBajo,innoBajo,inEmBajo,lidBajo,penaBajo,pencBajo,solBajo],
                backgroundColor: 'rgba(249, 61, 61, 0.400)',
                borderColor:'rgba(175, 28, 28, 0.774)'
              },
            ]
          };
          if(bandera>0){
            pieChart.destroy();
            pieChart2.destroy()
            pieChart3.destroy()
            barChart.destroy()
            barChart2.destroy()
            barChart3.destroy()
          }
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
          
              type: 'bar',
              data: radarData,
              options: {
                responsive: true,
                scales: {
                  x: {
                    stacked: true,
                  },
                  y: {
                    stacked: true
                  }
                }
              }
            });
            barChart2 = new ChartJS(radarCanvas2, {
          
              type: 'bar',
              data: radarData2,
              options: {
                responsive: true,
                scales: {
                  x: {
                    stacked: true,
                  },
                  y: {
                    stacked: true
                  }
                }
              }
            });
            barChart3 = new ChartJS(radarCanvas3, {
          
              type: 'bar',
              data: radarData3,
              options: {
                responsive: true,
                scales: {
                  x: {
                    stacked: true,
                  },
                  y: {
                    stacked: true
                  }
                }
              }
            });
            bandera++;
  }

export default function EstadisticasGrupales() {

  /*Funcion para gestionar la visibilidad del area conocimiento*/
  const mostrarConocimiento = (e) => {
    obtenerEmail()
    document.getElementById('bloqueCompetencias').style.display = 'none'
    document.getElementById('bloqueActitud').style.display = 'none'
    document.getElementById('bloqueConocimiento').style.display = 'block'
  }
  /*Funcion para gestionar la visibilidad del area competencia*/
  const mostrarCompetencia = (e) => {
    obtenerEmail()
    document.getElementById('bloqueCompetencias').style.display = 'block'
    document.getElementById('bloqueActitud').style.display = 'none'
    document.getElementById('bloqueConocimiento').style.display = 'none'
  }
  /*Funcion para gestionar la visibilidad del area actitud*/
  const mostrarActitud = (e) => {
    obtenerEmail()
    document.getElementById('bloqueCompetencias').style.display = 'none'
    document.getElementById('bloqueActitud').style.display = 'block'
    document.getElementById('bloqueConocimiento').style.display = 'none'
  }
  


/*Componentes html*/
    return (
        <div id="bloqueGrupal" >
          <h2 id="area">AREA</h2>
        <button  onClick={(e) => {mostrarCompetencia(e)}} id="btEI" type="button" class="btn btn-success">Competencia</button>
        <button  onClick={(e) => {mostrarConocimiento(e)}} id="btEG" type="button" class="btn btn-success">Conocimiento</button>
        <button  onClick={(e) => {mostrarActitud(e)}} id="btEI" type="button" class="btn btn-success">Actitud</button>
        <div id="bloqueCompetencias">
        <div id="separador">
        <h2 id="area">Area COMPETENCIAS</h2>
        <canvas id="PieChartCompetencias" width="600" height="400">Competencias</canvas>
      </div>
      <div id="separador">
         <h2 id="area">Modulo COMPETENCIAS</h2>
        <canvas id="BarChartCompetencias" width="600" height="400">Conocimiento</canvas>
      </div>
        </div>
        <div id="bloqueConocimiento">
        <div id="separador">
        <h2 id="area">Area CONOCIMIENTO</h2>
        <canvas id="PieChartConocimiento" width="600" height="400">Competencias</canvas>
      </div>
      <div id="separador">
         <h2 id="area">Modulo CONOCIMIENTO</h2>
        <canvas id="BarChartConocimiento" width="600" height="400">Conocimiento</canvas>
      </div>
        </div>
        <div id="bloqueActitud">
        <div id="separador">
        <h2 id="area">Area ACTITUD</h2>
        <canvas id="PieChartActitud" width="600" height="400">Competencias</canvas>
      </div>
      <div id="separador">
         <h2 id="area">Modulo ACTITUD</h2>
        <canvas id="BarChartActitud" width="600" height="400">Conocimiento</canvas>
      </div>
        </div>
        </div>


    );


}
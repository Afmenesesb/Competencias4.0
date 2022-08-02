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
var compAlto=0,compBajo=0,compMedio=0;
var conAlto=0,conBajo=0,conMedio=0;
var actAlto=0,actBajo=0,actMedio=0;
var actitudM;
var conocimientoM;
var competenciasM;
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
const obtenerEmail = async () => {
    var contador=0;
    const e=query(collection(db, "Estudiantes"));
    const querySnapshotE=await getDocs(e);
    querySnapshotE.forEach((docE)=>{
        obtenerNotas(docE.id)
        contador+=1
    });
    console.log("Al email entró"+contador)
  }
  const obtenerNotas = async (email) => {
    compAlto=0
    compBajo=0
    compMedio=0
    conAlto=0
    conBajo=0
    conMedio=0
    actAlto=0
    actBajo=0
    actMedio=0
    var contador1=0;
    const q = query(collection(db, "Estudiantes", email, "Notas"));
        try {
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            contador1+=1
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
                console.log(email)
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
              console.log("Alta comp :"+ compAlto+
              "Media comp :"+ compMedio+
              "Baja comp :"+ compBajo+
              "Alta cono:"+ conAlto+
              "Media cono :"+ conMedio+
              "Baja cono :"+ conBajo+
              "Alta act:"+ actAlto+
              "Media act :"+ actMedio+
              "Baja act :"+ actBajo)

  }

export default function EstadisticasGrupales() {



    return (
        <div id="estadisticasGrupales" >
            <button id="botonGenerar" onClick={(e) => {obtenerEmail(e)}} >Click</button>
        </div>


    );


}
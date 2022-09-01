import React, { Component } from "react";
import './../Estilos/buttongroup.css';

/*Funcion para la interaccion y coneccion entre los botones de competencia*/
export const testIdentificar= (evento) => {
    var prueba=""
    if(evento=="btC1"){
        prueba="boton1"
    }
    else{
        prueba="boton2"
    }
    return(prueba)
}
/*Funcion para mostrar la informacion ocrrespondiente a cada modulo segun la accion que realizo el usuario*/
export const identificar = (event) => {
    /*Se obtienen los elementos por medio del getElementById*/
    const boton1 = document.getElementById('btM1');
    const boton2 = document.getElementById('btM2');
    const boton3 = document.getElementById('btM3');
    const boton4 = document.getElementById('btM4');
    const boton5 = document.getElementById('btM5');
    const boton6 = document.getElementById('btM6');
    const boton7 = document.getElementById('btM7');
    const boton8 = document.getElementById('btM8');
    boton1.style.display='none';
    boton2.style.display='none';
    boton3.style.display='none';
    boton4.style.display='none';
    boton5.style.display='none';
    boton6.style.display='none';
    boton7.style.display='none';
    boton8.style.display='none';

    if (event.target.id == "btC1") {
        boton1.innerText = 'Información contable';
        boton1.style.display='block';
        boton2.innerText = 'Gestión de organizaciones';
        boton2.style.display='block';
        boton3.innerText = 'Análisis económico';
        boton3.style.display='block';
    }
    else {
        if (event.target.id == "btC2") {
            boton1.innerText = 'Conocimiento digital';
            boton1.style.display='block';
            boton2.innerText = 'Comunicacion digital';
            boton2.style.display='block';
            boton3.innerText = 'Gestión de la información';
            boton3.style.display='block';
            boton4.innerText = 'Liderazgo en red';
            boton4.style.display='block';
            boton5.innerText = 'Trabajo en red';
            boton5.style.display='block';
            boton6.innerText = 'Aprendizaje continuo';
            boton6.style.display='block';
            boton7.innerText = 'Visión estratégica';
            boton7.style.display='block';
            boton8.innerText = 'Orientación al cliente';
            boton8.style.display='block';
        }
        else {
            if (event.target.id == "btC3") {
                boton1.innerText = 'Pensamiento crítico';
                boton1.style.display='block';
                boton2.innerText = 'Pensamiento analitico';
                boton2.style.display='block';
                boton3.innerText = 'Resolución de problemas';
                boton3.style.display='block';
                boton4.innerText = 'Innovacion,originalidad e iniciativa';
                boton4.style.display='block';
                boton5.innerText = 'Analisis y evolución de sistemas';
                boton5.style.display='block';
                boton6.innerText = 'Diseños y programación de nuevas tecnológicas';
                boton6.style.display='block';
                boton7.innerText = 'Liderazgo e influencia social';   
                boton7.style.display='block';
                boton8.innerText = 'Inteligencia emocional';
                boton8.style.display='block';
              
            }
        }
    }


}
/*componentes html*/
class Competencias extends Component {

    render() {
        return (
            /*Estructura de grupo de botones de competencias*/
            <div id="comp" class="btn-group1" role="group" aria-label="Basic example">
                <h2 id="area">AREAS</h2>
                <button id="btC1" onClick={(e) => { identificar(e) }} type="button" class="btn btn-success">Conocimiento</button>
                <button id="btC2" onClick={(e) => { identificar(e) }} type="button" class="btn btn-success">Competencias digitales</button>
                <button id="btC3" onClick={(e) => { identificar(e) }} type="button" class="btn btn-success">Actitud</button>
                <h2 id="moduloTitulo">MODULOS</h2>
            </div>
        );
    }

}

export default Competencias;
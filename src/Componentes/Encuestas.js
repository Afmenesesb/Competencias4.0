import React, { Component, useState, useEffect } from "react";
import './../Estilos/encuesta.css';
import Cuerpo from "./Cuerpo";



export default function Encuestas() {

  const [modulo1, setModulo1] = useState(false);
  const [modulo2, setModulo2] = useState(false);
  const modificarModulos = (event) => {


    const modulo = document.getElementById('flexSwitchCheckDefault');
    const texto = document.getElementById('moduloEncuesta');

    if (texto.innerText == 'Activar encuesta para Informacion Contable') {
      setModulo1(false);
      setModulo2(false);

    }
    if (texto.innerText == 'Activar encuesta para Conocimiento Digital')
    {
      setModulo1(true);
      setModulo2(false);
    }
  }
  return (
    <div id="menuEncuesta" class="mencuesta">
      <div class="nav flex-column nav-pills me-3" id="botones" role="tablist" aria-orientation="vertical">
        <button disabled={modulo1} class="btn0" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">HOME</button>
        <button disabled={modulo2} class="btn1" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">PERFIL</button>
        <button class="btn2" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">MENSAJES</button>
        <button onClick={(e) => { modificarModulos(e) }} class="btn3" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">AJUSTES</button>
      </div>
      <div class="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
      </div>
    </div>
  );
}





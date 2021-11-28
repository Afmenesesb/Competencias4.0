import React, { Component, useState, useEffect } from "react";
import swal from 'sweetalert';
import Encuestas from "./Encuestas";


const conteoRespuestas = (event) => {
    var checked_pregunta1 = document.querySelector('input[name = "pregunta1"]:checked');
    var checked_pregunta2 = document.querySelector('input[name = "pregunta2"]:checked');
    var checked_pregunta3 = document.querySelector('input[name = "pregunta3"]:checked');
    var checked_pregunta4 = document.querySelector('input[name = "pregunta4"]:checked');
    var checked_pregunta5 = document.querySelector('input[name = "pregunta5"]:checked');
    const btn1 = document.getElementById('v-pills-con-tab');
    const btn2 = document.getElementById('v-pills-compdi-tab');
    const btn3 = document.getElementById('v-pills-act-tab');
    var contador=0;
    if(checked_pregunta1 != null && checked_pregunta2 != null && 
        checked_pregunta3 != null && checked_pregunta4 != null && 
        checked_pregunta5 != null){  
        if(checked_pregunta1.value=="C"){
            contador++;
        }
        if(checked_pregunta2.value=="C"){
            contador++;
        }
        if(checked_pregunta3.value=="C"){
            contador++;
        }
        if(checked_pregunta4.value=="C"){
            contador++;
        }
        if(checked_pregunta5.value=="C"){
            contador++;
        }
        swal(
            {
                title:"Terminó la encuesta",
                text:"Usted ha tenido "+ contador+" respuestas correctas",
                icon:"success",
                button: "Aceptar",
                timer:"2000"
            }
        );
        const formula = document.getElementById('divForm');
        formula.style.display = 'none';
        btn1.disabled = false;
        btn2.disabled = false;
        btn3.disabled = false;
        } else {
            swal(
                {
                    title:"Error de selección",
                    text:"Debe seleccionar mínimo una respuesta para cada pregunta",
                    icon:"warning",
                    button: "Aceptar"
                }
            );
        }
    
  }
class Formulario extends React.Component {

    render() {
        return (
                <div class="mb-3">
                    <label for="pregunta 1" class="form-label">Pregunta 1 </label>
                    <div class="form-check">
                    <input type="radio" id="casa" name="pregunta1" value="C" />
                    <label for="casa"> 
                        </label>Correcta
                    </div>

                    <div class="form-check">
                    <input type="radio" id="r02" name="pregunta1" value="F" />
                    <label for="dewey">Falsa 
                             
                        </label>
                    </div>

                    <div class="form-check">
                    <input type="radio" id="r03" name="pregunta1" value="F" />
                    <label for="dewey">Falsa 
                             
                        </label>
                    </div>

                    <div class="form-check">
                    <input type="radio" id="r04" name="pregunta1" value="F" />
                    <label for="dewey">Falsa 
                        </label>
                    </div>





                    <label for="pregunta 2" class="form-label">Pregunta 2</label>


                    <div class="form-check">
                    <input type="radio" id="r11" name="pregunta2" value="F" />
                    <label for="dewey">Falsa 
                             
                        </label>
                    </div>

                    <div class="form-check">
                    <input type="radio" id="r12" name="pregunta2" value="F" />
                    <label for="dewey">Falsa 
                             
                        </label>
                    </div>

                    <div class="form-check">
                    <input type="radio" id="r13" name="pregunta2" value="F" />
                    <label for="dewey">Falsa 
                             
                        </label>
                    </div>

                    <div class="form-check">
                    <input type="radio" id="r14" name="pregunta2" value="C" />
                    <label for="dewey">Correcta        
                        </label>
                    </div>

                    <label for="pregunta 2" class="form-label">Pregunta 3</label>


                    <div class="form-check">
                    <input type="radio" id="r21" name="pregunta3" value="F" />
                    <label for="dewey">Falsa 
                        </label>
                    </div>

                    <div class="form-check">
                    <input type="radio" id="r22" name="pregunta3" value="C" />
                    <label for="dewey">Correcta
                        </label>
                    </div>
                    <div class="form-check">
                    <input type="radio" id="r23" name="pregunta3" value="F" />
                    <label for="dewey">Falsa    
                        </label>
                    </div>
                    <div class="form-check">
                    <input type="radio" id="r24" name="pregunta3" value="F" />
                    <label for="dewey">Falsa          
                        </label>
                    </div>



                    <label for="pregunta 4" class="form-label">Pregunta 4</label>


                    <div class="form-check">
                    <input type="radio" id="r31" name="pregunta4" value="C" />
                    <label for="dewey">Correcta  
                        </label>
                    </div>

                    <div class="form-check">
                    <input type="radio" id="r32" name="pregunta4" value="F" />
                    <label for="dewey">Falsa 
                        </label>
                    </div>

                    <div class="form-check">
                    <input type="radio" id="r33" name="pregunta4" value="F" />
                    <label for="dewey">Falsa 
                             
                        </label>
                    </div>

                    <div class="form-check">
                    <input type="radio" id="r34" name="pregunta4" value="F" />
                    <label for="dewey">Falsa 
                             
                        </label>
                    </div>


                    <label for="pregunta 5" class="form-label">Pregunta 5</label>


                    <div class="form-check">
                    <input type="radio" id="r41" name="pregunta5" value="C" />
                    <label for="dewey">Correcta
                            
                        </label>
                    </div>

                    <div class="form-check">
                    <input type="radio" id="r42" name="pregunta5" value="F" />
                    <label for="dewey">Falsa 
                            
                        </label>
                    </div>

                    <div class="form-check">
                    <input type="radio" id="r43" name="pregunta5" value="F" />
                    <label for="dewey">Falsa 
                        </label>
                    </div>

                    <div class="form-check">
                    <input type="radio" id="r44" name="pregunta5" value="F" />
                    <label for="dewey">Falsa 
                        </label>
                    </div>
                <button onClick={(e) => {conteoRespuestas(e)}} class="btn btn-primary">Enviar</button>
                </div>

        )

    }
}
export default Formulario;


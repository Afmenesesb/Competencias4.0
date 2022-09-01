import React, { useState } from "react";
import './../Estilos/cuerpo.css';
import Table from 'react-bootstrap/Table';
import swal from 'sweetalert';
import { getStorage, ref, getDownloadURL } from "firebase/storage";


/*Funcion para gestionar la descarga de archivos de apoyo*/
export function descargarArchivo1() {
    const storage = getStorage();
    getDownloadURL(ref(storage, 'archivo1-' + window.moduloADescargar))
        .then((url) => {
            window.open(url, '_blank');
        })
        .catch((error) => {
            switch (error.code) {
                case 'storage/object-not-found':
                    swal({
                        text: "El archivo no se ha subido"
                    })
                    break;
                case 'storage/unauthorized':
                    swal({
                        text: "Usted no tiene permiso"
                    })
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;

                // ...

                case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    break;
            }
        })
}
/*Funcion para gestionar la descarga de archivos de apoyo link 2*/
export function descargarArchivo2() {
    const storage = getStorage();
    getDownloadURL(ref(storage, 'archivo2-' + window.moduloADescargar))
        .then((url) => {
            window.open(url, '_blank');
        }).catch((error) => {
            switch (error.code) {
                case 'storage/object-not-found':
                    swal({
                        text: "El archivo no se ha subido"
                    })
                    break;
                case 'storage/unauthorized':
                    swal({
                        text: "Usted no tiene permiso"
                    })
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;

                // ...

                case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    break;
            }
        })
}

/*Funcion para gestionar la descarga de archivos de apoyo link 3*/
export function descargarArchivo3() {
    const storage = getStorage();
    getDownloadURL(ref(storage, 'archivo3-' + window.moduloADescargar))
        .then((url) => {
            window.open(url, '_blank');
        }).catch((error) => {
            switch (error.code) {
                case 'storage/object-not-found':
                    swal({
                        text: "El archivo no se ha subido"
                    })
                    break;
                case 'storage/unauthorized':
                    swal({
                        text: "Usted no tiene permiso"
                    })
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;

                // ...

                case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    break;
            }
        })
}


export default function Cuerpo() {

    /*Constantes para manejar el estado de visibilidad de los mensajes de alerta*/
    const [visibilidadAlert, setVisibilidadAlert] = useState(false);

    /*Funcion para gestionar la informacion de cada modulo*/
    const modificarEstado = () => {
        /*Se obtienen los elementos por medio del getElementById*/

        const checkbtn = document.getElementById('moduloEncuesta');
        const btninfcont = document.getElementById('informacion contable');
        const btngesorg = document.getElementById('gestion de organizaciones');
        const btnanec = document.getElementById('analisis economico');
        const btncontdig = document.getElementById('conocimiento digital');
        const btncomdig = document.getElementById('comunicacion digital');
        const btngesin = document.getElementById('gestion de la informacion');
        const btnpencri = document.getElementById('pensamiento critico');
        const btnpenana = document.getElementById('pensamiento analitico');
        const btnrespro = document.getElementById('resolucion de problemas');
        const btnlider = document.getElementById('Liderazgo en red');
        const btntred = document.getElementById('Trabajo en red');
        const btnaprzco = document.getElementById('Aprendizaje continuo');
        const btnvisest = document.getElementById('Vision estrategica');
        const btnoricli = document.getElementById('Orientacion al cliente');
        const btninno = document.getElementById('Innovación, originalidad e iniciativa');
        const btnanaev = document.getElementById('Análisis y evolución de sistemas');
        const btndisypro = document.getElementById('Diseño y programación de nuevas tecnologías');
        const btnlidereins = document.getElementById('Liderazgo e influencia social');
        const btnintem = document.getElementById('Inteligencia emocional');

        const botonEncuesta = document.getElementById('flexSwitchCheckDefault');
        const check = document.getElementById('moduloEncuesta');
        const mensaje = check.innerText.substring(21);
        if (checkbtn.innerText == 'Activar encuesta para Informacion Contable') {
            btninfcont.style.display = 'block';
        }
        else {
            if (checkbtn.innerText == 'Activar encuesta para Gestion de organizaciones') {
                btngesorg.style.display = 'block';

            }
            else {
                if (checkbtn.innerText == 'Activar encuesta para Conocimiento Digital') {
                    btncontdig.style.display = 'block';
                }
                else {
                    if (checkbtn.innerText == 'Activar encuesta para Comunicacion Digital') {
                        btncomdig.style.display = 'block';
                    }
                    else {
                        if (checkbtn.innerText == 'Activar encuesta para Gestion de la Informacion') {
                            btngesin.style.display = 'block';
                        }
                        else {
                            if (checkbtn.innerText == 'Activar encuesta para Analisis Economico') {
                                btnanec.style.display = 'block';
                            }
                            else {
                                if (checkbtn.innerText == 'Activar encuesta para Pensamiento Critico') {
                                    btnpencri.style.display = 'block';
                                }
                                else {
                                    if (checkbtn.innerText == 'Activar encuesta para Pensamiento Analitico') {
                                        btnpenana.style.display = 'block';
                                    }
                                    else {
                                        if (checkbtn.innerText == 'Activar encuesta para resolución de problemas') {
                                            btnrespro.style.display = 'block';
                                        }
                                        else {
                                            if (checkbtn.innerText == 'Activar encuesta para Liderazgo en red') {
                                                btnlider.style.display = 'block';
                                            } else {
                                                if (checkbtn.innerText == 'Activar encuesta para Trabajo en red') {
                                                    btntred.style.display = 'block';
                                                }
                                                else {
                                                    if (checkbtn.innerText == 'Activar encuesta para Aprendizaje continuo') {
                                                        btnaprzco.style.display = 'block';
                                                    } else {
                                                        if (checkbtn.innerText == 'Activar encuesta para Visión estratégica') {
                                                            btnvisest.style.display = 'block';
                                                        } else {
                                                            if (checkbtn.innerText == 'Activar encuesta para Orientación al cliente') {
                                                                btnoricli.style.display = 'block';
                                                            } else {
                                                                if (checkbtn.innerText == 'Activar encuesta para Innovacion,originalidad e iniciativa') {
                                                                    btninno.style.display = 'block';
                                                                } else {
                                                                    if (checkbtn.innerText == 'Activar encuesta para Analisis y evolución de sistemas') {
                                                                        btnanaev.style.display = 'block';
                                                                    } else {
                                                                        if (checkbtn.innerText == 'Activar encuesta para Diseños y programación de nuevas tecnológicas') {
                                                                            btndisypro.style.display = 'block';
                                                                        } else {
                                                                            if (checkbtn.innerText == 'Activar encuesta para Liderazgo e influencia social') {
                                                                                btnlidereins.style.display = 'block';
                                                                            } else {
                                                                                if (checkbtn.innerText == 'Activar encuesta para Inteligencia emocional') {
                                                                                    btnintem.style.display = 'block';
                                                                                }

                                                                            }

                                                                        }

                                                                    }

                                                                }

                                                            }

                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }



                        }
                    }
                }
            }

        }
        if (botonEncuesta.checked == false) {

            setVisibilidadAlert(false);
        }
        else {

            swal(
                {
                    title: "Encuesta",
                    text: "Se ha activado la encuesta correspondiente a " + mensaje,
                    icon: "info",
                    button: "Aceptar",
                    timer: "3000"
                }
            );

        }
    }

/*componentes html*/
    return (
        <div id="cuerpoPrin" class="cuerpo">
            <h1 id="contLor" class="parrafo1">
            </h1>
            <div class="contenedorImg">
                <img id="imgCont" class="imgCuerpo" alt="" width={100}></img>
            </div>
            <div class="tablaLink">
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Descripción</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td id="desc1">Archivo 1</td>
                            <td >
                                <button onClick={(e) => { descargarArchivo1() }} id="btnCP1" class="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                </svg></button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td id="desc2">Archivo 2</td>
                            <td >
                                <button onClick={(e) => { descargarArchivo2() }} id="btnCP2" class="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                </svg></button>

                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td id="desc3">Archivo 3</td>
                            <td >
                                <button onClick={(e) => { descargarArchivo3() }} id="btnCP3" formAction="www.facebook.com" class="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                </svg></button>

                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div class="form-check form-switch" id="checkEncuesta">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => modificarEstado()} />
                <label id="moduloEncuesta" class="form-check-label" for="flexSwitchCheckDefault">Checked switch checkbox input</label>
            </div>
        </div>
    );
}


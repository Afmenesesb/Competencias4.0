import { Navbar, Nav, Container } from "react-bootstrap";
import iconoU from './../Recursos/iconoU.svg';
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import Competencias from "./Competencias";
import Modulos from "./Modulos";
import Cuerpo from "./Cuerpo";
import Encuestas from "./Encuestas";
import EstadisticasEstudiantes from "./EstadisticasEstudiantes";
import swal from 'sweetalert';

/*Funcion para mostrar los elementos de inicio*/
function inicio(e) {
    
    document.getElementById('inicio').style.display='block'
    document.getElementById('menuEncuesta').style.display='none'
    document.getElementById('btnsGraficas').style.display='none'
    document.getElementById('graficasEstudiantes').style.display='none'
    document.getElementById('graficasEstudiantesM').style.display='none'
    
}
/*Funcion para ocultar los elementos de encuesta y deshabilitar los demas*/
function encuesta(e) {
    
    document.getElementById('inicio').style.display='none'
    document.getElementById('menuEncuesta').style.display='block'
    document.getElementById('btnsGraficas').style.display='none'
    document.getElementById('graficasEstudiantes').style.display='none'
    document.getElementById('graficasEstudiantesM').style.display='none'

}
/*Funcion para ocultar los elementos de estadisticas y deshabilitar los demas*/
function estadistica(e) {
    
    document.getElementById('inicio').style.display='none'
    document.getElementById('menuEncuesta').style.display='none'
    document.getElementById('btnsGraficas').style.display='block'
}

/*Funcion para informar sobre el uso de la indormacion*/
function usoInformacion()
{
    swal(
        {
            title: "Uso de informacion",
            text: "La informacion suministrada se usaria unicamente para fines academicos y estadisticos",
            icon: "info",
            button: "Aceptar"
        }
    );
}

/*componentes de html*/
export default function CabeceraHome()
{
    usoInformacion();
    return (
        /*Uso del mismo formato de cabecera inicial, modificando algunos componentes segun la necesidad, en este casola del usuario del aplicativo*/
        
        <div id="cabeceraH">
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" wit>
                <Container>
                    <img
                        src={iconoU}
                        width="70"
                        height="70"
                        className="rounded float-start"
                        alt=""

                    />
                    <Navbar.Brand>ECCPI FCEAC 4.0<h6>Usuario</h6></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <button id="bInicio" class="btnEncuesta" onClick={(e)=>{inicio(e)}} >Inicio</button>
                            <button id="bEncuesta"class="btnEncuesta" onClick={(e)=>{encuesta(e)}} >Encuesta</button>
                            <button id="bEstadisticas"class="btnEncuesta" onClick={(e)=>{estadistica(e)}} >Estadisticas</button>
                        </Nav>
                        <Profile />
                        <Nav>
                            <LogoutButton />
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

            <div id="inicio">
                <Competencias />
                <Modulos />
                <Cuerpo />
            </div>
            <Encuestas/>
            <EstadisticasEstudiantes/> 
        </div >
        

    );
}



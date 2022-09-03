import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import '../Estilos/inicio.css';
import iconoAdmin from './../Recursos/Admin.png';
import iconoAdminFin from './../Recursos/AdminFin.jpg';
import iconoContaduria from './../Recursos/Contaduria.png';


/*Componentes html, cartas de presentacion de areas del conocimiento*/
export default function Home2() {
  return (
    <div class="row">
      <div class="col-sm-6" id="Admin">
        <div class="card">
          <img
            src={iconoAdmin}
            width="200"
            height="200"
            class="iconoAdmin"

          />
          <div class="card-body">
            <h5 class="card-title">Las economías de todo el mundo dependen de empresarios calificados para analizar datos y tendencias, administrar las finanzas, crear valor y distribuirlo en forma de bienes y servicios útiles para el mercado.</h5>
            <br></br>
            <a href="https://www.uniquindio.edu.co/programas/publicaciones/309/administracion-de-negocios-presencial/" class="btn btn-success" target="_blank">Mas informacion</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6" id="AdminFin">
        <div class="card">
          <img
            src={iconoAdminFin}
            width="200"
            height="200"
            class="iconoAdminFin"

          />
          <div class="card-body">
            <h5 class="card-title">El éxito y crecimiento de una compañía depende de la capacidad intelectual que tiene su equipo profesional en formular, resolver y administrar las dificultades corporativas de la empresa.</h5>
            <br></br>
            <br></br>
            <a href="https://www.uniquindio.edu.co/programas/publicaciones/306/administracion-financiera-a-distancia/" class="btn btn-success">Mas informacion</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6" id="Contaduria">
        <div class="card">
          <img
            src={iconoContaduria}
            width="200"
            height="200"
            class="iconoContaduria"

          />
          <div class="card-body">
            <h5 class="card-title">Evaluar y proponer alternativas de solución a problemas sociales, ambientales y económicos, relacionados con la Ciencia Contable teniendo en cuenta estándares nacionales e internacionales.</h5>
            <br></br>
            <a href="https://www.uniquindio.edu.co/programas/publicaciones/310/contaduria-publica/" class="btn btn-success">Mas informacion</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6" id="Economia">
        <div class="card">
          <img
            src={iconoContaduria}
            width="200"
            height="200"
            class="iconoEconomia"

          />
          <div class="card-body">
            <h5 class="card-title">La economía está llamada a ser una disciplina central en la orientación de país en la actualidad, ya que Colombia ingreso a la Organización para la Cooperación el Desarrollo Económico OCDE.</h5>
            <br></br>
            <br></br>
            <a href="https://www.uniquindio.edu.co/programas/publicaciones/310/contaduria-publica/" class="btn btn-success">Mas informacion</a>
          </div>
        </div>
      </div>
    </div>
  );
}

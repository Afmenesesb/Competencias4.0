import React, { Component } from "react";
import Admin from './../Recursos/Admin.png';
import AdminFin from './../Recursos/AdminFin.jpg';
import Contaduria from './../Recursos/Contaduria.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import './../Estilos/prueba.css';
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';
SwiperCore.use([Pagination, Navigation]);
const data = [
    {
        id: 1,
        compt: 'Administracion de negocios',
        parrafo: 'aca se escribe la descripcion del navegable',
        link: 'https://www.uniquindio.edu.co/programas/publicaciones/309/administracion-de-negocios-presencial/',
        imagen: <img class="admin" src={Admin} alt=""></img>
    },
    {
        id: 2,
        compt: 'Administracion financiera',
        parrafo: 'aca se escribe la descripcion del navegable',
        link: 'https://www.uniquindio.edu.co/programas/publicaciones/306/administracion-financiera-a-distancia/',
        imagen: <img class="admin" src={AdminFin} alt=""></img>
    },
    {
        id: 3,
        compt: 'Contaduria publica',
        parrafo: 'aca se escribe la descripcion del navegable',
        link: 'https://www.uniquindio.edu.co/programas/publicaciones/310/contaduria-publica/',
        imagen: <img class="admin" src={Contaduria} alt=""></img>
    }
];
class Slider1 extends Component {
    render() {
        return (
            <div className='app'>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    navigation
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {data.map(user => (
                        <SwiperSlide key={user.id} className='slide'>
                            <div className='slide-content'>
                                <div className='user-image'>
                                    <h3>Areas de enfoque</h3>
                                    <a href={user.link} target="_blank">{user.imagen}</a>
                                </div>
                                <h3>{user.compt}</h3>
                                <h6>{user.parrafo}</h6>
                            </div>
                        </SwiperSlide>))}
                </Swiper>
            </div>
        );
    }
}
export default Slider1;


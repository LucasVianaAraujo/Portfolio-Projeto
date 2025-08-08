import { Swiper, SwiperSlide } from 'swiper/react'

import html from './img/html.png'
import css from './img/css.png'
import js from './img/scriptjava.png'
import reacao from './img/react.png'
import scss from './img/sass.png'
import node from './img/nodejs.png'
import mysql from './img/mysql.png'
import catu from './img/github_reut.png'

function Camada3() {

    const data = [
        { id: '1', image: html },
        { id: '2', image: css },
        { id: '3', image: reacao },
        { id: '4', image: js },
        { id: '4', image: scss },
        { id: '4', image: node },
        { id: '4', image: mysql },
        { id: '4', image: catu },
    ]

    return (
        <div className="fundo_todo1">

            <div className="texto_topo">
                <h1>TECNOLOGIAS</h1>
            </div>

            <div className="swiper-container">
                <Swiper
                    slidesPerView={5}
                    pagination={{ clickable: true }}
                    navigation
                    loop={true}
                    loopedSlides={data.length}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                src={item.image}
                                alt={`Tecnologia ${item.id}`}
                                className="slide-item"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


        </div>
    )
}

export default Camada3

"use client"
import React, { useState } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import { FreeMode } from "swiper/modules";
import database from './Database';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface DetailsComponentProps {
  watched: number;
}

const Card: React.FC<DetailsComponentProps> = ({ watched }) => {

  const [users, setUsers] = useState();

  return (
    <>
      <Swiper
         
        slidesPerView={1}
        spaceBetween={30}
        loop={false}
        breakpoints={{
          0: {
            spaceBetween: 10,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          379: {
            spaceBetween: 10,
            slidesPerView: 1,
          },
          457:{
            spaceBetween:10,
            slidesPerView:2,
          },
          810: {
            spaceBetween: 15,
            slidesPerView: 3,
          },
          1320: {
            spaceBetween: 15,
            slidesPerView: 4,
          },
          1725: {
            spaceBetween: 30,
            slidesPerView: 5,
          },
          2236: {
            spaceBetween: 45,
            slidesPerView: 6,
          },
        }}
        modules={[FreeMode]}
        className="mySwiper mt-5 h-100"
      >
        <div className="justify-content-center h-100 mt-5 bg-dark">
          {database.map((data, key) => (
            <SwiperSlide key={key} className="register h-100">
              <div className='content my-24 shadow-lg mb-10 lh-base position-relative h-100 bg-body rounded-3 border border-primary '>
                <div className="overflow-hidden rounded bg-light">
                  <img className='position-absolute w-75 sm:w-50 rounded-lg translate-middle top-0 start-50 ' src={data.image_url} />
                </div>
                <div className='px-3 h-100 py-md-46 py-16 pb-12'>
                <div className="changable flex justify-content-between px-0">
                  <div className="users flex flex-column justify-content-start align-middle">
                    <FaUser size={20} color={"black"} /> 23
                  </div>
                  <div className="users flex flex-column justify-content-start align-middle">
                    <FaStar size={20} color={"orange"} /> 3.5
                  </div>
                </div>
                  <div className=''><b>Title:</b> {data.title}</div>
                  <div><b>Venue:</b> {data.venue}</div>
                  <div><b>Offline:</b> {data.offline}</div>
                  <div><b>Online:</b> {data.online}</div>
                  <div><b>Description: </b>{data.description}</div>
                  <div><b>{data.date}</b></div>
                  <button className='register btn btn-primary position-absolute top-100 start-50 translate-middle  '>
                    <Link className="btn text-white" href="/fullevent">REGISTER</Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  )
}

export default Card;
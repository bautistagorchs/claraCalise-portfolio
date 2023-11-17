import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import foto16 from "../../media/foto16.jpg";
import foto18 from "../../media/foto18.jpg";
import foto19 from "../../media/foto19.jpg";
import foto20 from "../../media/foto20.jpg";
import foto21 from "../../media/foto21.jpg";
import foto22 from "../../media/foto22.jpg";
import foto23 from "../../media/foto23.jpg";
import foto24 from "../../media/foto24.jpg";
import foto25 from "../../media/foto25.jpg";
import foto26 from "../../media/foto26.jpg";
import foto27 from "../../media/foto27.jpg";
import foto28 from "../../media/foto28.jpg";
import foto29 from "../../media/foto29.jpg";
import foto30 from "../../media/foto30.jpg";
import foto31 from "../../media/foto31.jpg";
import foto32 from "../../media/foto32.jpg";
import foto33 from "../../media/foto33.jpg";
import foto34 from "../../media/foto34.jpg";
import foto35 from "../../media/foto35.jpg";
import foto36 from "../../media/foto36.jpg";
import foto37 from "../../media/foto37.jpg";
import foto38 from "../../media/foto38.jpg";
import foto39 from "../../media/foto39.jpg";
import foto40 from "../../media/foto40.jpg";
import foto41 from "../../media/foto41.jpg";
import foto42 from "../../media/foto42.jpg";
import foto43 from "../../media/foto43.jpg";
import foto44 from "../../media/foto44.jpg";
import foto45 from "../../media/foto45.jpg";
import foto46 from "../../media/foto46.jpg";
import foto47 from "../../media/foto47.jpg";

const SwiperHorizontalPhotos = () => {
  const arrayPictures = [
    foto16,
    foto18,
    foto19,
    foto20,
    foto21,
    foto22,
    foto23,
    foto24,
    foto25,
    foto26,
    foto27,
    foto28,
    foto29,
    foto30,
    foto31,
    foto32,
    foto33,
    foto34,
    foto35,
    foto36,
    foto37,
    foto38,
    foto39,
    foto40,
    foto41,
    foto42,
    foto43,
    foto44,
    foto45,
    foto46,
    foto47,
  ];

  return (
    <Swiper
      loop={true}
      slidesPerView={4}
      className="swiper_container"
      // spaceBetween={10}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      modules={[Autoplay, Navigation]}
    >
      {arrayPictures.length &&
        arrayPictures.map((picture, i) => (
          <SwiperSlide key={i}>
            <img className="img-horizontal" src={picture} alt="no encontrada" />
          </SwiperSlide>
        ))}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default SwiperHorizontalPhotos;

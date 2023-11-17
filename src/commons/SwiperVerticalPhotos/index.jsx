import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import foto from "../../media/foto.jpg";
import foto1 from "../../media/foto1.jpg";
import foto2 from "../../media/foto2.jpg";
import foto3 from "../../media/foto3.jpg";
import foto4 from "../../media/foto4.jpg";
import foto5 from "../../media/foto5.jpg";
import foto6 from "../../media/foto6.jpg";
import foto7 from "../../media/foto7.jpg";
import foto8 from "../../media/foto8.jpg";
import foto9 from "../../media/foto9.jpg";
import foto10 from "../../media/foto10.jpg";
import foto11 from "../../media/foto11.jpg";
import foto12 from "../../media/foto12.jpg";
import foto13 from "../../media/foto13.jpg";
import foto14 from "../../media/foto14.jpg";
import foto15 from "../../media/foto15.jpg";

const SwiperVerticalPhotos = () => {
  const arrayPictures = [
    foto,
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
    foto7,
    foto8,
    foto9,
    foto10,
    foto11,
    foto12,
    foto13,
    foto14,
    foto15,
  ];
  return (
    <Swiper
      loop={true}
      slidesPerView={5}
      className="swiper_container"
      spaceBetween={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
    >
      {arrayPictures.length &&
        arrayPictures.map((picture, i) => (
          <SwiperSlide key={i}>
            <img className="img" src={picture} alt="no encontrada" />
          </SwiperSlide>
        ))}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default SwiperVerticalPhotos;

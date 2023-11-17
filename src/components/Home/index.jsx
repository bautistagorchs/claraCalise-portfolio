import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import foto1 from "../../media/foto1.png";
import foto2 from "../../media/foto2.png";
import foto3 from "../../media/foto3.png";
import foto4 from "../../media/foto4.png";
import foto5 from "../../media/foto5.png";
import foto6 from "../../media/foto6.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverFlow, Pagination, Navigation } from "swiper";

const Home = () => {
  const arrayPictures = [foto1, foto2, foto3, foto4, foto5, foto6];
  return (
    <div className="home-container">
      <div>Home</div>
      <div className="div-swiper-container">
        <Swiper
          className="swiper"
          spaceBetween={10}
          slidesPerView={4}
          navigation={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
        >
          {arrayPictures.length &&
            arrayPictures.map((picture, i) => (
              <SwiperSlide key={i}>
                <img className="img" src={picture} alt="no encontrada" />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;

import React from "react";

import SwiperVerticalPhotos from "../../commons/SwiperVerticalPhotos";
import SwiperHorizontalPhotos from "../../commons/SwiperHorizontalPhotos";

const Home = () => {
  return (
    <div className="home-container">
      <div className="title-home-page">Pictures</div>
      <div className="div-swiper-container">
        <SwiperHorizontalPhotos />
      </div>
    </div>
  );
};

export default Home;

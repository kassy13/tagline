import React from "react";
import home1 from "../../assets/home1.jpg";
import home2 from "../../assets/home2.jpg";
import home3 from "../../assets/home3.jpg";
import home4 from "../../assets/home4.jpg";
import SectionTwo from "./SectionTwo";

import { Swiper, SwiperSlide } from "swiper/react";

// import {} from "swiper";
import {
  Navigation,
  Pagination,
  Autoplay,
  Parallax,
  EffectFade,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "swiper/css/parallax";

const Home = () => {
  const parallaxEffect = {
    mousemove: true,
    scale: 0.5,
  };
  return (
    <>
      <section className="w-full h-screen justify-center items-center py-10 px-6 overflow-y-hidden mb-16 md:mb-2 md:flex md:gap-10 md:px-14">
        <div className="flex-1 flex flex-col justify-center leading-8">
          <div className="text-4xl font-extrabold tracking-wider madimi-one-regular gradient-text text-nowrap md:text-7xl">
            Welcome to TagLine
          </div>
          <h1 className="text-2xl font-bold mt-5 pb-3 text-nowrap md:text-3xl md:text-wrap">
            Tour Around the world with class
          </h1>
          <p className="leading-9 pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quasi
            non placeat recusandae aliquid? Natus quos aliquam numquam quas
            sunt?
          </p>
        </div>

        <div className="top-0 left-0 w-full h-3/4 flex flex-row items-center justify-center overflow-hidden rounded-tl-full rounded-tr-full relative">
          {/* Semicircle mask */}
          <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-white to-transparent rounded-tl-full rounded-tr-full"></div>
          </div>

          <Swiper
            className="w-full h-full"
            modules={[Navigation, Pagination, Autoplay, EffectFade, Parallax]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            effect="fade"
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            parallax={parallaxEffect}
          >
            <SwiperSlide>
              <img
                src={home1}
                alt=""
                className="w-full h-full object-cover rounded-tl-full rounded-tr-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={home2}
                alt=""
                className="w-full h-full object-cover rounded-tl-full rounded-tr-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={home3}
                alt=""
                className="w-full h-full object-cover rounded-tl-full rounded-tr-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={home4}
                alt=""
                className="w-full h-full object-cover rounded-tl-full rounded-tr-full"
              />
            </SwiperSlide>

            {/* Navigation Buttons */}
            <div className="swiper-button-next next"></div>
            <div className="swiper-button-prev prev"></div>
            {/* Pagination */}
            <div className="swiper-pagination"> </div>
          </Swiper>
        </div>
      </section>
      <SectionTwo />
    </>
  );
};

export default Home;

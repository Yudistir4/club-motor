import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { config } from "../constants";

const Home = () => {
  return (
    <div className="">
      {/* Corousel */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {config.home.carousel.map((data) => (
          <SwiperSlide key={data.title} className="h-full relative w-full">
            <img className="h-full brightness-50" src={data.img} alt="" />
            <div className="text-white absolute z-10 top-1/2 -translate-y-1/2 left-20 w-full">
              <h2 className="font-serif text-2xl md:text-6xl md:w-1/2 lg:w-1/3 ">
                {data.title}
              </h2>
              <p className="mt-3 md:mt-10 text-lg md:text-xl md:w-1/2 lg:w-1/3">
                {data.subtitle}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Sejarah */}
      <div className="xl:flex-row  gap-20 flex flex-col   max-w-6xl m-auto p-10 md:p-20 xl:px-0">
        <div className="relative xl:w-2/3 flex flex-col md:flex-row gap-10 md:justify-between md:items-center">
          <p className="absolute sm:text-7xl text-5xl text-yellow-700/5 font-serif font-bold  ">
            Motor Club Indonesia Merdeka
          </p>
          <div className="relative  ">
            <h2 className="font-serif text-5xl">MCI</h2>
            <p className="text-xl mt-5 text-gray-700">Sejarah Berdirinya</p>
          </div>
          <img
            className="drop-shadow-2xl md:w-1/2  "
            src={config.home.sejarah.img}
            alt=""
          />
        </div>
        <div className="xl:w-1/3">
          <h2 className="font-serif text-3xl">{config.home.sejarah.title}</h2>
          <p className="text-justify text-lg md:text-2xl text-gray-700/80 mt-5 leading-9">
            {config.home.sejarah.caption}
          </p>
        </div>
      </div>
      <hr />
      {/* Member */}
      <div className="flex items-center p-10 md:p-20 flex-col gap-20 ">
        <div className="text-center">
          <h2 className="text-6xl font-serif">{config.home.member.title}</h2>
          <h3 className="text-2xl mt-5 text-gray-600 ">
            {config.home.member.subtitle}
          </h3>
        </div>
        <div className="flex gap-10 text-center">
          <div className="w-1/2 text-5xl border font-serif text-gray-600 p-5 sm:p-10">
            {config.home.member.anggota}
          </div>
          <div className="w-1/2 text-5xl border font-serif text-gray-600 p-5 sm:p-10">
            {config.home.member.pengurus}
          </div>
          {/* <div className="text-5xl">{config.home.member.pengurus}</div> */}
        </div>
      </div>

      {/* Tentang Kami */}
      <div className="bg-emerald-800/5 ">
        <div className="max-w-6xl m-auto lg:flex-row w-full p-10 md:p-20 xl:px-0   flex flex-col gap-20 mb-10">
          <div className="relative mr-7 lg:w-1/2">
            <img
              className="rounded-xl h-full object-cover"
              src={config.home.tentang.img}
              alt=""
            />
            <div className="w-full h-full bg-gray-200 left-7 -z-10 absolute top-7 rounded-xl"></div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl font-serif">
              {config.home.tentang.title}{" "}
            </h2>
            <p className="text-lg text-gray-700 leading-8 text-justify mt-5 xl:text-2xl">
              {config.home.tentang.caption}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

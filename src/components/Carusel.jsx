import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import slide from "../assets/diploma.webp";
import slide2 from "../assets/XXL.webp";
import "swiper/css";
import "swiper/css/pagination";
import "./Carusel.css";

const SwiperSlider = () => {
  return (
    <div className="container  pt-[80px] h-screen pb-10">
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        mousewheel={true}
        keyboard={true}
        slidesPerView={1}
        className="rounded-lg h-full"
      >
        <SwiperSlide className="relative flex justify-center items-center h-full bg-blue-500 text-white text-xl font-semibold">
          <img
            src={slide}
            alt="slider image"
            className="absolute z-[1] top-0 left-0 h-full w-full object-cover"
          />
          <div className="relative z-10 bg-black/50 w-full h-full flex flex-col justify-center items-start p-4 lg:p-10">
            <h2 className=" text-[50px] mb-2.5 w-[600px] font-bold leading-[50px]">
              Поломоечные <br /> машины
            </h2>
            <p className="mb-14">
              Более 60 моделей в каталоге: Comac, Clemar, Tvx
            </p>
            <a href="#" className="px-9 py-4 bg-[#019EDC] rounded-lg">
              В каталог
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" relative flex justify-center items-center h-60 bg-blue-500 text-white text-xl font-semibold">
          <img
            src={slide2}
            alt="slider image"
            className="absolute z-[1] top-0 left-0 h-full w-full object-cover"
          />
          <div className="relative z-10 bg-black/50 w-full h-full flex flex-col justify-center items-start p-4 lg:p-10">
            <h2 className=" text-[50px] mb-2.5 w-[600px] font-bold leading-[50px]">
              Всё для уборки и клининга
            </h2>
            <p className="mb-14">
              Выпускной экуборочный инвентарь из материалов высокого качества
              для <br /> комфортного клининга
            </p>
            <a href="#" className="px-9 py-4 bg-[#019EDC] rounded-lg">
              В каталог
            </a>
          </div>
        </SwiperSlide>
        <div className="custom mt-10 flex justify-center gap-2 absolute bottom-[20px] left-[42%] lg:left-[48%]  z-50"></div>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;

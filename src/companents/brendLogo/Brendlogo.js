
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Brendlogo.css"

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import PopolarCategories from "./PopularCategories";
export default function App() {
  return (
    <>
    <Swiper
      slidesPerView={8}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="swiper__wrapper"
    >
      <SwiperSlide className="swiper-item">
        <img className="brend-logo" src="https://backend.texnomart.uz//images/brands/2022101404154940058.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiper-item">
        <img className="brend-logo" src="https://backend.texnomart.uz//images/brands/2022101404481916020.webp" alt="" />
      </SwiperSlide >
      <SwiperSlide className="swiper-item">
        <img className="brend-logo" src="https://backend.texnomart.uz//images/brands/2022101404542676301.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiper-item">
        <img className="brend-logo" src="https://backend.texnomart.uz//images/brands/2022101404183539183.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiper-item" >
        <img className="brend-logo" src="https://backend.texnomart.uz//images/brands/2022101404183539183.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiper-item">
        <img className="brend-logo" src="https://backend.texnomart.uz//images/brands/2022101404474125545.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiper-item">
        <img className="brend-logo" src="https://backend.texnomart.uz//images/brands/2022101404450190315.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiper-item">
        <img className="brend-logo" src="https://backend.texnomart.uz//images/brands/2022101404474125545.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiper-item">
        <img className="brend-logo" src="https://backend.texnomart.uz//images/brands/2022101404474125545.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiper-item">
        <img className="brend-logo" src="https://backend.texnomart.uz//images/brands/2022101404474125545.webp" alt="" />
      </SwiperSlide>
    </Swiper>
    <PopolarCategories />
  </>
  
  );
}

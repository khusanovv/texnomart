// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Brendlogo.css";

// import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper";
import PopolarCategories from "./PopularCategories";
export default function App() {
  return (
    <div className="container">
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        slidesPerGroup={3}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiper__wrapper"
      >
        <SwiperSlide className="swiper-item">
          <img
            className="brend-logo"
            src="https://backend.texnomart.uz//images/brands/2022101404154940058.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <img
            className="brend-logo"
            src="https://backend.texnomart.uz//images/brands/2022101404481916020.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <img
            className="brend-logo"
            src="https://backend.texnomart.uz//images/brands/2022101404542676301.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <img
            className="brend-logo"
            src="https://backend.texnomart.uz//images/brands/2022101404183539183.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <img
            className="brend-logo"
            src="	https://backend.texnomart.uz//images/brands/2022101405315369098.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <img
            className="brend-logo"
            src="https://backend.texnomart.uz//images/brands/2022101404474125545.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <img
            className="brend-logo"
            src="https://backend.texnomart.uz//images/brands/2022101404461797247.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <img
            className="brend-logo"
            src="	https://backend.texnomart.uz//images/brands/2022101404240931733.webp"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <PopolarCategories />
    </div>
  );
}

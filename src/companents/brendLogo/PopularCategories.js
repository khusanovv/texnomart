import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Brendlogo.css";

import { Pagination, Navigation } from "swiper";

export default function PopolarCategories() {
  return (
    <div className="container">
      <h4 className="categerios__title">Ommabop Kategoriyalar</h4>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={3}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="categories"
      >
        <SwiperSlide>
          <div className="categories-cart">
            <img
              src="	https://backend.texnomart.uz/files/global/new-photo/img/special-slider/smartfon.svg"
              alt=""
            />
            <p>Smartfonlar</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="categories-cart">
            <img
              src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/pilesos.svg"
              alt=""
            />
            <p>Planshetlar</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="categories-cart">
            <img
              src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/planshet.svg"
              alt=""
            />
            <p>Muzlatgichlar</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="categories-cart">
            <img
              src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/xolodilnik.svg"
              alt=""
            />
            <p>Havo sovutgichlari</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="categories-cart">
            <img
              src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/klimaticheskaya-texnika.svg"
              alt=""
            />
            <p>televizorlar</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="categories-cart">
            <img
              src="	https://backend.texnomart.uz/files/global/new-photo/img/special-slider/lg.svg"
              alt=""
            />
            <p>Fenlar</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="categories-cart">
            <img
              src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/feni.svg"
              alt=""
            />
            <p>Kir yuvish mashinalari</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="categories-cart">
            <img
              src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/stiralnaya_mashina.svg"
              alt=""
            />
            <p>Smartfonlar</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

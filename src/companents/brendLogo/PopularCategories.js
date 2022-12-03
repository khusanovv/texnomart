import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Brendlogo.css";

import { Pagination, Navigation } from "swiper";

export default function PopolarCategories() {
  return (
    <>
      {" "}
      <h4 className="categerios__title">Ommabop Kategoriyalar</h4>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
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
            <p>Smartfonlar</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="categories-cart">
            <img
              src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/planshet.svg"
              alt=""
            />
            <p>Smartfonlar</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="categories-cart">
            <img
              src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/xolodilnik.svg"
              alt=""
            />
            <p>Smartfonlar</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="categories-cart">
            <img
              src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/klimaticheskaya-texnika.svg"
              alt=""
            />
            <p>Smartfonlar</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="categories-cart">
            <img
              src="	https://backend.texnomart.uz/files/global/new-photo/img/special-slider/lg.svg"
              alt=""
            />
            <p>Smartfonlar</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="categories-cart">
            <img
              src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/feni.svg"
              alt=""
            />
            <p>Smartfonlar</p>
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
    </>
  );
}

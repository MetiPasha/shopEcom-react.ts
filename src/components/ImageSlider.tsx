import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const ImageSlider = () => {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="w-4xl h-96 "
      >
        <SwiperSlide>
          <img
            className="w-full h-full object-contain  "
            src="/home/iphone.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-contain "
            src="/home/xboxx.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-contain "
            src="/home/outfit.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-contain "
            src="/home/cartoy.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full  object-contain "
            src="/home/keyboard.png"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImageSlider;

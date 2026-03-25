import { Heading1Component } from "./Tags/heading";
import { testimonialDatas } from "../data";
import { swiperOptions2 } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import {  Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Testimonials = () => {
  SwiperCore.use([Autoplay]);

  return (
    <section className="my-56">
      <Heading1Component
        _style="my-24 text-center "
        text="Hear from some of our customers stories"
      />
      <div className=" my-4 flex justify-center o  ">
        <Swiper className="mySwiper self-center" {...swiperOptions2}>
          {testimonialDatas.map((data, index) => {
            return (
              <SwiperSlide>
                <div
                  style={{ background: "rgba(18, 99, 67, 0.8)" }}
                  className="md:max-w-xs shrink-0 mx-auto  text-white font-light font-gsans-light rounded-md tet-white p-2"
                  key={index}
                >
                  <div className="flex items-center ">
                    <img src={data.img} alt={data.name} />
                    <div className="mx-5">
                      <h2>{data.name}</h2>
                      <h2>{data.country}</h2>
                    </div>
                  </div>
                  <p className="p-3 text-base">{data.content}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

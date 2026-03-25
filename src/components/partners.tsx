import { PartnerLogos } from "../data";

import SubLayout from "../common/subLayout";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { swiperOptions } from "../data";
import {Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Partners = (): JSX.Element => {
  SwiperCore.use([Autoplay]);

  return (
    <SubLayout
      _style="max-w-5xl mx-auto"
      text="Our top partners"
      subText="Lorem ipsum dolor sit amet consectetur. Tincidunt ipsum enim tellus rhoncus mattis. Id maecenas tincidunt dapibus auctor lectus tortor ligula sed. Aliquam tortor viverra phasellus at euismod id faucibus sem. "
    >
      <div className="flex md:overflow-x-hidden overflow-x-scroll items-center my-10 justify-between">
        <Swiper {...swiperOptions}>
          {PartnerLogos.map((data, index) => {
            return (
              <SwiperSlide>
                <img
                  key={index}
                  className="w-24 mx-auto"
                  src={data}
                  alt="partner log"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </SubLayout>
  );
};

export default Partners;

import { PropsWithChildren, useState } from "react";
import Layout from "./layout";

import { ButtonComponent } from "../components/Tags/button";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import ResetPassword from "./resetPassword";
import RequestTokenComponent from "./requestToken";

const ResetAuth = (): JSX.Element => {
  const [heading, setHeading] = useState({
    title: "Forgot Password",
    text: "Enter the email you used to register on the system",
    subTitile: "",
  });

  const SwiperNextButton = ({ children }: PropsWithChildren) => {
    const swiper = useSwiper();

    const RequestToken = () => {
      setHeading({ ...heading, subTitile: "Create Passowrd" });
      swiper.slideNext();
    };

    return (
      <ButtonComponent
        clickHandler={RequestToken}
        _style="py-4"
        type="dark"
        title="Reset Password"
      />
    );
  };

  const SwiperPrevButton = ({ children }: PropsWithChildren) => {
    const swiper = useSwiper();

    const BackToToken = () => {
      setHeading({ ...heading, subTitile: "Create Password" });
      swiper.slidePrev();
    };

    return (
      <ButtonComponent clickHandler={BackToToken} _style="py-4" title="Back" />
    );
  };

  const swiperProps = {
    autoHeight: false,
    allowTouchMove: false,
    slidesPerView: 1,
    spaceBetween: 20,
  };

  return (
    <Layout
      subTitle={heading.subTitile}
      title={heading.title}
      text={heading.text}
    >
      <Swiper className="max-w-[95vw] md:max-w-[35vw]" {...swiperProps}>
        <SwiperSlide>
          <RequestTokenComponent NextButtonComponent={<SwiperNextButton />} />
        </SwiperSlide>
        <SwiperSlide>
          <ResetPassword />
          <SwiperPrevButton />
        </SwiperSlide>
      </Swiper>
    </Layout>
  );
};

export default ResetAuth;

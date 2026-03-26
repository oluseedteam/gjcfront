import Layout from "./layout";
import { InputComponent } from "../components/Tags/input";
import { ButtonComponent } from "../components/Tags/button";

import { PropsWithChildren, useState } from "react";

import { values } from "../types";

import { RegisterValues } from "../data";
import { useNavigate } from "react-router";

import { validateComponent } from "../utils/validate";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

import PasswordComponent from "./password";
import VerifyEmail from "./verifyEmail";

const Register = (): JSX.Element => {
  const [values, setValues] = useState<values>(RegisterValues);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const [heading, setHeading] = useState({
    title: "Welcome !",
    text: "Lorem ipsum dolor sit amet consectetur. Nec nunc lorem nulla curabitur.",
    subTitile: "Profile Details",
  });

  const SwiperNextButton = ({ children }: PropsWithChildren) => {
    const swiper = useSwiper();

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setHeading({
        ...heading,
        title: "Stage 2",
        text: "Lorem ipsum dolor sit amet consectetur. Nec nunc lorem nulla curabitur.",
        subTitile: "Create Password",
      });
      swiper.slideNext();
    };

    return (
      <ButtonComponent
        clickHandler={(e) => {
          handleSubmit(e);
        }}
        _style="py-4"
        type="dark"
        title="Create Password"
      />
    );
  };

  const SwiperPrevButton = ({ children }: PropsWithChildren) => {
    const swiper = useSwiper();

    const BackToRegister = () => {
      setHeading({ ...heading, subTitile: "Create Account" });
      swiper.slidePrev();
    };

    return (
      <ButtonComponent
        clickHandler={BackToRegister}
        _style="py-4 w-full border-[0.4px] border-primary"
        title="Back"
      />
    );
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const validate = validateComponent(values);
    console.log(validate);
  };

  const swiperProps = {
    autoHeight: false,
    allowTouchMove: false,
    slidesPerView: 1,
    spaceBetween: 20,
  };

  return (
    <>
      <div className="z-50">
        {" "}
        <VerifyEmail open={open} setOpen={setOpen} />
      </div>
      <div className={`${open && "hidden"}`}>
        <Layout
          title={heading.title}
          text={heading.text}
          subTitle={heading.subTitile}
        >
          <Swiper className="max-w-[95vw] md:max-w-[35vw]" {...swiperProps}>
            <SwiperSlide>
              <form className="">
                <InputComponent
                  _style="  border-[1px] rounded-md shadow-none p-3 border-[#C2C2C2]"
                  values={values}
                  setValues={setValues}
                  name="fullName"
                  label="Full Name (company/individual)"
                  placeholder="full name"
                />
                <InputComponent
                  _style="  border-[1px] rounded-md shadow-none p-3 border-[#C2C2C2]"
                  values={values}
                  setValues={setValues}
                  name="phone"
                  label="Phone Number"
                  placeholder="0800000001"
                />

                <InputComponent
                  _style="  border-[1px] rounded-md  shadow-none p-3 border-[#C2C2C2]"
                  values={values}
                  setValues={setValues}
                  name="email"
                  label="Email"
                  placeholder="gjc@gmail.com"
                />
                <div className="my-5 gap-5 flex flex-col">
                  <SwiperNextButton />
                  <ButtonComponent
                    clickHandler={() => navigate("/login")}
                    _style="py-3 border-2 mb-2"
                    title="Sign in"
                  />
                </div>
              </form>
            </SwiperSlide>
            <SwiperSlide>
              <PasswordComponent setOpen={setOpen} />
              <SwiperPrevButton />
            </SwiperSlide>
          </Swiper>
        </Layout>
      </div>
    </>
  );
};

export default Register;

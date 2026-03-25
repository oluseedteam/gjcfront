import { modalProps } from "../types";
import Layout from "./common/layout";

import { InputComponent, SelectComponent } from "../components/Tags/input";
import { ButtonComponent } from "../components/Tags/button";
import { useState } from "react";
import { useModal } from "../context/modal";

import { WasteComponent } from "../components/wasteComponent";

import { DoneComponent } from "./subModal";

import { WastesData } from "../data";
import { useNavigate } from "react-router";

type valueProps = {
  [key: string]: string;
};

const Review: React.FC<modalProps> = ({ open, name, text }): JSX.Element => {
  const { initialState, setModalToggle } = useModal();
  const navigate = useNavigate();

  const [action, setAction] = useState<boolean>(false);

  const bookingValues = {
    firstName: "Ajani Ben Dara",
    email: "gjc@gmail.com",
    phone: "08100000001",
    phone2: "08100000001",
    address: "Ikeja",
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setModalToggle({ ...initialState, otpOpen: true });
    setAction(true);
    navigate("/dashboard/bookings");
  };

  const [values, setValues] = useState<valueProps>(bookingValues);
  return (
    <>
      <DoneComponent open={action} setOpen={setAction} />
      <Layout width="min-w-[60vw]" name={name} open={open} text={text}>
        <h2 className="text-primary tracking-wider text-base">
          Selected pick Up waste item's
        </h2>
        <WasteComponent
          Data={WastesData.slice(3, 5)}
          _style="grid lg:grid-cols-4 my-2 gap-3 md:grid-cols-3 grid-cols-2"
        />
        <form>
          <section>
            <h2 className="text-xl capitalize text-primary font-gsans-light">
              Basic Information
            </h2>
            <div className="grid md:grid-cols-2 md:gap-10 gap-1">
              <InputComponent
                name="firstName"
                values={values}
                setValues={setValues}
                label="Full Name"
              />
              <InputComponent
                name="email"
                type="email"
                values={values}
                setValues={setValues}
                label="Email Adress"
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-10 gap-1">
              <InputComponent
                name="phone"
                values={values}
                setValues={setValues}
                label="Phone Number"
              />
              <InputComponent
                name=" phone2"
                type="number"
                values={values}
                setValues={setValues}
                label="Additional Phone Number"
              />
            </div>
            <h3 className="text-primary my-3 font-semibold text-sm">
              This number will be used for verification
            </h3>
          </section>
          <section>
            <h2 className="text-xl capitalize text-primary font-gsans-light">
              Pick Up details
            </h2>
            <div className="grid md:grid-cols-2 md:gap-10 gap-1">
              <InputComponent
                name="address"
                values={values}
                setValues={setValues}
                label="Pick Up Address"
              />
              <InputComponent
                name="email"
                type="email"
                values={values}
                setValues={setValues}
                label="Area"
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-10 gap-1">
              <InputComponent
                name="phone"
                values={values}
                setValues={setValues}
                label="Phone Number"
              />
              <InputComponent
                name=" phone2"
                type="number"
                values={values}
                setValues={setValues}
                label="Additional Phone Number"
              />
            </div>
          </section>
          <div className="flex my-3 items-center justify-center">
            <ButtonComponent
              _style="w-48 font-gsans-light"
              type="dark"
              title="Submit"
              clickHandler={handleSubmit}
            />
          </div>
        </form>
      </Layout>
    </>
  );
};

export default Review;

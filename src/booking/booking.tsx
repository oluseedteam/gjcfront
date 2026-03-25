import { modalProps } from "../types";
import Layout from "./common/layout";

import { InputComponent, SelectComponent } from "../components/Tags/input";
import { ButtonComponent } from "../components/Tags/button";
import { useState } from "react";
import { useModal } from "../context/modal";

type valueProps = {
  [key: string]: string;
};

const Booking: React.FC<modalProps> = ({ open, name, text }): JSX.Element => {
  const { initialState, setModalToggle } = useModal();

  const bookingValues = {
    firstName: "",
    email: "",
    phone: "",
    phone2: "",
    address: "",
  };

  const VerifyBooking = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModalToggle({ ...initialState, reviewOpen: true });
  };

  const [values, setValues] = useState<valueProps>(bookingValues);
  return (
    <Layout width="min-w-[60vw]" name={name} open={open} text={text}>
      <form>
        <section>
          <h2 className="text-2xl capitalize text-primary font-gsans-light">
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
          <h2 className="text-2xl capitalize text-primary font-gsans-light">
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
            title="Verify Booking"
            clickHandler={VerifyBooking}
          />
        </div>
      </form>
    </Layout>
  );
};

export default Booking;

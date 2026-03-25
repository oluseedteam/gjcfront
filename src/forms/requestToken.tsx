
import { InputComponent } from "../components/Tags/input";
import { ButtonComponent } from "../components/Tags/button";

import React, { useState } from "react";

import { values } from "../types";

import { RegisterValues } from "../data";
import { useNavigate } from "react-router";


const RequestToken: React.FC<{ NextButtonComponent?: JSX.Element }> = ({
  NextButtonComponent,
}): JSX.Element => {
  const [values, setValues] = useState<values>(RegisterValues);
  const navigate = useNavigate();

  return (
    <div className="">
      <InputComponent
        _style="  border-[1px] rounded-md  shadow-none p-3 border-[#C2C2C2]"
        values={values}
        setValues={setValues}
        name="email"
        label="Email"
        type="email"
        placeholder="gjc@gmail.com"
      />

      <div className="my-5 gap-5 flex flex-col">
        {/* <ButtonComponent
          clickHandler={() => navigate("/reset-password")}
          _style="py-4"
          type="dark"
          title="Reset Password"
        /> */}
        {NextButtonComponent}
        <ButtonComponent
          clickHandler={() => navigate("/login")}
          _style="py-3 by-3 border-2"
          title="Go back to Login"
        />
      </div>
    </div>
  );
};

export default RequestToken;

import { InputComponent } from "../components/Tags/input";
import { ButtonComponent } from "../components/Tags/button";
import React from "react";
import { values } from "../types";

import { validateComponent } from "../utils/validate";
const PasswordComponent: React.FC<{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  values: values;
  setValues: React.Dispatch<React.SetStateAction<values>>;
}> = ({ setOpen, values, setValues }): JSX.Element => {
  const createPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const validate = validateComponent(values);

    setOpen(true);
  };

  return (
    <form className="">
      <InputComponent
        _style="  border-[1px] rounded-md  shadow-none p-3 border-[#C2C2C2]"
        values={values}
        setValues={setValues}
        name="password"
        label="Create Password"
        type="password"
        placeholder="********"
      />
      <InputComponent
        _style="  border-[1px] rounded-md  shadow-none p-3 border-[#C2C2C2]"
        values={values}
        setValues={setValues}
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="********"
      />

      <div className="my-5 gap-5 flex flex-col">
        <ButtonComponent
          clickHandler={(e) => createPassword(e)}
          _style="py-4"
          type="dark"
          title="Create Password"
        />
      </div>
    </form>
  );
};

export default PasswordComponent;

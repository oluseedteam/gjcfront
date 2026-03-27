import { InputComponent } from "../components/Tags/input";
import { ButtonComponent } from "../components/Tags/button";

import React, { useState } from "react";

const PasswordComponent: React.FC<{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setOpen }): JSX.Element => {

  const [values, setValues] = useState({});
  return (
    <div className="">
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
        name="password"
        label="Confirm Password"
        type="password"
        placeholder="********"
      />

      <div className="my-5 gap-5 flex flex-col">
        <ButtonComponent
          clickHandler={() => setOpen(true)}
          _style="py-4"
          type="dark"
          title="Create Password"
        />
      </div>
    </div>
  );
};

export default PasswordComponent;

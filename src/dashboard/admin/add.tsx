import React, { useState } from "react";
import SubLayout from "../../common/subLayout";
import { InputComponent, SelectComponent } from "../../components/Tags/input";
import { ButtonComponent } from "../../components/Tags/button";

import { useModal } from "../../context/modal";

import { values } from "../../types";
const Admin: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }): JSX.Element => {
  const [values, setValues] = useState<values>({});

  const { setModalToggle, initialState } = useModal();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModalToggle({
      ...initialState,
      doneOpen: true,
      successText:
        " New user  as been created successfully the user password as been sent to is mail",
    });
    console.log(values);
  };

  return (
    <SubLayout title="Create New User" open={open} setOpen={setOpen}>
      <form className="my-5 ">
        <InputComponent
          label="User Email"
          name="email"
          values={values}
          _style="w-full"
          placeholder="enter your email"
          setValues={setValues}
        />
        <InputComponent
          label="Password"
          name="password"
          values={values}
          _style="w-full"
          setValues={setValues}
          placeholder="enter your password"
        />
        <SelectComponent
          label="Role"
          options={[
            { value: "user", name: "user" },
            { value: "adnin", name: "admin" },
          ]}
          name="role"
          values={values}
          setValues={setValues}
        />
        <div className="my-20 flex justify-center">
          <ButtonComponent
            clickHandler={handleSubmit}
            _style="px-5"
            type="dark"
            title="Create User"
          />
        </div>
      </form>
    </SubLayout>
  );
};

export default Admin;

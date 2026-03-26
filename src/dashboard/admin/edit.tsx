import React, { useState } from "react";
import SubLayout from "../../common/subLayout";
import { InputComponent, SelectComponent } from "../../components/Tags/input";
import { ButtonComponent } from "../../components/Tags/button";

import { useModal } from "../../context/modal";

import { values } from "../../types";

const EditAdmin: React.FC<{
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
      successText: "Your changes has been successfully made",
    });
  };

  return (
    <SubLayout title="Edit User" open={open} setOpen={setOpen}>
      <form className="my-5 ">
        <InputComponent
          label="User Email"
          name="email"
          values={values}
          _style="w-full"
          placeholder="enter your email"
          setValues={setValues}
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
        <div className="my-3">
          <label htmlFor="status">Status</label>
          <section className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <input type="radio" name="status" />
              <label htmlFor="active">Active</label>
            </div>
            <div className="flex items-center gap-3">
              <input type="radio" name="status" />
              <label htmlFor="suspend">Suspend</label>
            </div>
            <div className="flex items-center gap-3">
              <input type="radio" name="status" />
              <label htmlFor="delete">Delete</label>
            </div>
          </section>
        </div>
        <div className="my-20 flex justify-center">
          <ButtonComponent
            clickHandler={handleSubmit}
            _style="px-5"
            type="dark"
            title="Update"
          />
        </div>
      </form>
    </SubLayout>
  );
};

export default EditAdmin;

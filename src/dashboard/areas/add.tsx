import React, { useState } from "react";
import SubLayout from "../../common/subLayout";
import { InputComponent } from "../../components/Tags/input";
import { ButtonComponent } from "../../components/Tags/button";

import { useModal } from "../../context/modal";

import { values } from "../../types";
const Area: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }): JSX.Element => {
  const [values, setValues] = useState<values>({ search: "" });

  const { setModalToggle, initialState } = useModal();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModalToggle({
      ...initialState,
      doneOpen: true,
      successText: "Location Successfully Added",
    });
  };

  return (
    <SubLayout title="Add New Location" open={open} setOpen={setOpen}>
      <form className="my-5 ">
        <InputComponent
          label="Enter Location"
          name="search"
          values={values}
          _style="w-full"
          setValues={setValues}
        />
        <div className="my-20 flex justify-center">
          <ButtonComponent
            clickHandler={handleSubmit}
            _style="px-5"
            type="dark"
            title="Add Location"
          />
        </div>
      </form>
    </SubLayout>
  );
};

export default Area;

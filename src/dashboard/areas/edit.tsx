import React, { useState } from "react";
import SubLayout from "../../common/subLayout";
import { InputComponent } from "../../components/Tags/input";
import { ButtonComponent } from "../../components/Tags/button";

import { useModal } from "../../context/modal";

import { values } from "../../types";
const EditArea: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }): JSX.Element => {
  const [values, setValues] = useState<values>({ search: "" });

  const { setModalToggle, initialState } = useModal();

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModalToggle({
      ...initialState,
      doneOpen: true,
      successText: "Location updated successfully",
    });
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModalToggle({
      ...initialState,
      doneOpen: true,
      successText: "Location deleted successfully",
    });
  };

  return (
    <SubLayout title="Edit Location" open={open} setOpen={setOpen}>
      <form className="my-5 ">
        <InputComponent
          label="Enter Location"
          name="search"
          values={values}
          _style="w-full"
          setValues={setValues}
        />
        <div className="my-20 flex justify-between items-center gap-5">
          <ButtonComponent
            clickHandler={handleDelete}
            _style="px-5 border-[1px] w-36 border-primary"
            title="Delete"
          />
          <ButtonComponent
            action="submit"
            clickHandler={handleEdit}
            _style="px-5"
            type="dark"
            title="Add Location"
          />
        </div>
      </form>
    </SubLayout>
  );
};

export default EditArea;

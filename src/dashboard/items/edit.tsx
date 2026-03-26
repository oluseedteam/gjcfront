import React, { useState } from "react";
import SubLayout from "../../common/subLayout";
import { InputComponent } from "../../components/Tags/input";
import { ButtonComponent } from "../../components/Tags/button";

import { useModal } from "../../context/modal";

import thumbnail from "../../assets/thumbnail.png";
import uploadBtn from "../../assets/uploadbtn.png";
import waste3 from "../../assets/waste3.png";

import { values } from "../../types";
const EditItem: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }): JSX.Element => {
  const [values, setValues] = useState<values>({});

  const { setModalToggle, initialState } = useModal();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModalToggle(initialState);
  };

  return (
    <SubLayout title="Edit Acceptable Item" open={open} setOpen={setOpen}>
      <form className="my-5 ">
        <div className="mx-auto w-56 relative">
          <img className="w-36 mx-auto" src={waste3} alt="waste2" />
          <label
            className="absolute cursor-pointer bottom-0 right-10"
            htmlFor="item"
          >
            <img src={uploadBtn} alt="upload btn" />
          </label>
          <input className="hidden" type="file" id="item" />
        </div>
        <InputComponent
          label="Item Name"
          name="name"
          values={values}
          _style="w-full"
          setValues={setValues}
        />
        <div className="my-5 flex justify-center">
          <ButtonComponent
            clickHandler={handleSubmit}
            _style="px-5"
            type="dark"
            title="Upload"
          />
        </div>
      </form>
    </SubLayout>
  );
};

export default EditItem;

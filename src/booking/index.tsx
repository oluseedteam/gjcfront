import React, { useState } from "react";
import Layout from "./common/layout";
import { modalProps } from "../types";
import { WasteComponent } from "../components/wasteComponent";
import { ButtonComponent } from "../components/Tags/button";
import { useModal } from "../context/modal";
import { WastesData } from "../data";

const SelectWaste: React.FC<modalProps> = ({
  open,
  text,
  name,
}): JSX.Element => {
  const { modalToggle, initialState, setModalToggle } = useModal();

  return (
    <>
      <Layout name={name} text={text} open={open}>
        <WasteComponent
          Data={WastesData.slice(0, 6)}
          _style="grid lg:grid-cols-4 gap-3 md:grid-cols-3 grid-cols-2"
        />
        <div className="flex justify-center my-5">
          <ButtonComponent
            _style="w-48 font-gsans-light"
            type="dark"
            title="Create Booking"
            clickHandler={() =>
              setModalToggle({ ...initialState, bookingOpen: true })
            }
          />
        </div>
      </Layout>
    </>
  );
};

export default SelectWaste;

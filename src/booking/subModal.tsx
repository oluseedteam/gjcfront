import React from "react";
import SubLayout from "./common/subLayout";
import { useModal } from "../context/modal";

import { ButtonComponent } from "../components/Tags/button";

import danger from "../assets/danger.png";
import mask from "../assets/mask.png";
export const CancelComponent: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }): JSX.Element => {
  const { initialState, setModalToggle } = useModal();

  const CloseActiveModal = () => {
    setModalToggle(initialState);
    setOpen(false);
  };
  return (
    <SubLayout open={open} setOpen={setOpen}>
      <div className="flex items-center flex-col gap-5">
        <img className="w-44" src={danger} alt="danger" />
        <h1 className="text-dark text-center font-semibold text-xl">
          Are you sure you want to cancel this transaction
        </h1>
        <div className="my-4 flex gap-3 items-center justify-between">
          <ButtonComponent
            _style="border-primary w-44 px-1 border-[1px]"
            title="No, Dont't Cancel"
            clickHandler={() => setOpen(false)}
          />
          <ButtonComponent
            _style="border-primary w-44 px-1 border-[1px]"
            type="dark"
            title="Yes, Cancel"
            clickHandler={CloseActiveModal}
          />
        </div>
      </div>
    </SubLayout>
  );
};

export const DoneComponent: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }): JSX.Element => {
  return (
    <SubLayout type="done" open={open} setOpen={setOpen}>
      <div className="flex flex-col justify-center items-center text-center  gap-5">
        <img className="w-44" src={mask} alt="done " />
        <h1 className="text-xl">
          Hey Ben! we have received your booking & your{" "}
          <strong> Booking Id: 23457</strong> ,we will be at your place
          <strong> 22-04-2023 </strong> around <strong>4:00pm - 5:00pm</strong>
        </h1>
        <ButtonComponent
          _style=" w-40"
          type="dark"
          title="Done"
          clickHandler={() => setOpen(false)}
        />
      </div>
    </SubLayout>
  );
};

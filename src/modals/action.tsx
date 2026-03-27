import React from "react";
import SubLayout from "../common/subLayout";
import { useModal } from "../context/modal";
import mask from "../assets/mask.png";
import danger from "../assets/danger.png";
import { ButtonComponent } from "../components/Tags/button";

export const CancelComponent: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  const { modalToggle, setModalToggle, initialState } = useModal();

  return (
    <SubLayout type="cancel" open={open} setOpen={setOpen}>
      <div className="flex items-center flex-col gap-5 justify-center">
        <img className="w-44" src={danger} alt="danger" />
        <h2 className=" max-w-sm text-2xl text-center font-bold">
          Are you sure you want to cancel this action?
        </h2>
        <div className="flex items-center gap-3 justify-between">
          <ButtonComponent
            clickHandler={() =>
              setModalToggle({ ...modalToggle, cancelOpen: false })
            }
            _style="w-44 border-[1px] border-primary"
            title="No, Dont't Cancel"
          />
          <ButtonComponent
            clickHandler={() => setModalToggle(initialState)}
            _style="w-44"
            type="dark"
            title="Yes, Cancel"
          />
        </div>
      </div>
    </SubLayout>
  );
};

export const DoneComponent: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  const { modalToggle, initialState, setModalToggle } = useModal();

  return (
    <SubLayout type="done" open={open} setOpen={setOpen}>
      <div className="flex items-center flex-col gap-5 justify-center">
        <img className="w-44" src={mask} alt="mask" />
        <h2 className=" max-w-sm text-center font-bold">
          {modalToggle.successText}
        </h2>
        <ButtonComponent
          clickHandler={() => setModalToggle(initialState)}
          _style="w-44"
          type="dark"
          title="Done"
        />
      </div>
    </SubLayout>
  );
};

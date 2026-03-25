import React, { ReactNode } from "react";

import { modalProps } from "../../types";

import { useModal } from "../../context/modal";

import cancel from "../../assets/cancel.png";

import { AnimatePresence, motion } from "framer-motion";
import { modalVariant, transition } from "../../variants";

const SubLayout: React.FC<{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  children: JSX.Element;
  type?: "cancel" | "done";
}> = ({ open, children, setOpen, type }): JSX.Element => {
  const { initialState, setModalToggle } = useModal();

  return (
    <AnimatePresence>
      {open && (
        <motion.main
          variants={modalVariant}
          transition={transition}
          initial="hidden"
          animate="visible"
          exit="exit"
          className=" modal-backdrop2 "
        >
          <section
            className={`  md:max-w-[30vw] max-w-[100vw]  z-[1000]  bg-[#F8FDF9] md:w-auto w-full fixed top-1/2 left-1/2 rounded-md max-h-[96vh]  -translate-x-1/2  -translate-y-1/2 p-2 border-2`}
          >
            <header className="mb-2 flex  justify-between ">
              <div></div>
              {type ? (
                ""
              ) : (
                <img
                  onClick={() => setOpen(false)}
                  className="cursor cursor-pointer w-8 "
                  src={cancel}
                  alt="cancel"
                />
              )}
            </header>

            <main className=" m-5 ">{children}</main>
          </section>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default SubLayout;

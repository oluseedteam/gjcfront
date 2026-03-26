import React, { ReactNode } from "react";

import { modalProps } from "../types";

import { useModal } from "../context/modal";

import cancel from "../assets/cancel.png";

import { AnimatePresence, motion } from "framer-motion";
import { modalVariant, transition } from "../variants";

const SubLayout: React.FC<{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  children: JSX.Element;
  title?: string;
  type?: "" | "done" | "cancel";
}> = ({ open, children, setOpen, title, type }): JSX.Element => {
  const { modalToggle, setModalToggle } = useModal();

  return (
    <AnimatePresence>
      {open && (
        <motion.main
          variants={modalVariant}
          transition={transition}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`${
            type === "done" || type === "cancel"
              ? "modal-backdrop2"
              : "modal-backdrop"
          }`}
        >
          <section
            className={`  md:min-w-[35vw] max-w-[100vw]  z-50  bg-[#F8FDF9] md:w-auto w-full fixed top-1/2 left-1/2 rounded-md max-h-[96vh]  -translate-x-1/2  -translate-y-1/2 p-5 border-2`}
          >
            <header className="mb-2 flex  justify-between ">
              <div></div>
              {type === "done" ? (
                ""
              ) : (
                <img
                  onClick={() =>
                    setModalToggle({
                      ...modalToggle,
                      cancelOpen: true,
                    })
                  }
                  className="cursor cursor-pointer w-8 "
                  src={cancel}
                  alt="cancel"
                />
              )}
            </header>

            <main className=" m-5 ">
              <h1 className="text-primary text-2xl text-center">{title}</h1>
              <section>{children}</section>
            </main>
          </section>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default SubLayout;

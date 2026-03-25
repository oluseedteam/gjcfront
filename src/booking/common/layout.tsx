import React, { useState } from "react";

import { modalProps } from "../../types";


import cancel from "../../assets/cancel.png";

import { AnimatePresence, motion } from "framer-motion";
import { modalVariant, transition } from "../../variants";

import { CancelComponent } from "../subModal";

const Layout: React.FC<modalProps> = ({
  open,
  children,
  width = "min-w-[60vw] w-full",
  text,
  name,
}): JSX.Element => {
  const [action, setAction] = useState<boolean>(false);
  return (
    <>
      <CancelComponent open={action} setOpen={setAction} />
      <AnimatePresence>
        {open && (
          <motion.main
            variants={modalVariant}
            transition={transition}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`${action && "hidden"} modal-backdrop `}
          >
            <section
              className={`  ${width} md:w-auto w-full fixed top-1/2 left-1/2 rounded-md max-h-[96vh] overflow-y-scroll  -translate-x-1/2  -translate-y-1/2 bg-[#F8FDF9] p-2 border-2`}
            >
              <header className="mb-2 flex  justify-between ">
                <div></div>
                <img
                  className=" cursor-pointer w-8 "
                  onClick={() => setAction(!action)}
                  // onClick={() =>
                  //   setModalToggle({ ...initialState, [name]: !open })
                  // }
                  src={cancel}
                  alt="cancel"
                />
              </header>
              <h1 className="text-center text-primary text-2xl capitalize ">
                {text}
              </h1>
              <main className=" m-5 ">{children}</main>
            </section>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
};

export default Layout;

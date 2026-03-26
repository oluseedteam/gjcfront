import React, { PropsWithChildren } from "react";
import formBg from "../assets/pattern.png";

import ellipse1 from "../assets/ellipse1.png";
import ellipse2 from "../assets/ellipse2.png";

import { Heading1Component } from "../components/Tags/heading";
import { ParagraphComponent } from "../components/Tags/paragraph";

import { motion } from "framer-motion";
import { pageVariant, transition } from "../variants";

type layoutProp = {
  children: JSX.Element;
  title?: string;
  text?: string;
  subTitle?: string;
};

const Layout: React.FC<layoutProp> = ({
  children,
  text,
  title,
  subTitle,
}): JSX.Element => {
  return (
    <>
      <motion.main
        variants={pageVariant}
        initial="initial"
        animate="animate"
        transition={transition}
        className="md:flex text-white bg-[#FFFCF2]  md:h-screen overflow-y-hidden  "
      >
        <section
          // style={{ backgroundImage: `url(${formBg})` }}
          className="bg-primary form-layout relative md:rounded-e-md flex-1  p-4   md:p-10"
        >
          <div className="max-w-sm">
            <Heading1Component _style="my-5" text="GJC  Recycling" />
            <ParagraphComponent
              _style="text-white text-light my-3 font-gsans-light"
              text="Lorem ipsum dolor sit amet consectetur. Tincidunt ipsum enim "
            />
          </div>
        </section>
        <section className="flex-1  flex flex-col md:items-center  md:px-20 justify-center ">
          <div className="text-dark  md:p-10 p-4 rounded-2xl  bg-light">
            <h2 className="text-dark text-2xl font-bold">{title}</h2>
            <p className="text-base capitalize text-lightXs ">{text}</p>{" "}
            <div className="my-6">
              <h2 className="text-dark text-2xl font-bold">{subTitle}</h2>
              {children}
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
};

export default Layout;

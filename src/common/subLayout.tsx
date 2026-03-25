import React, { ReactNode } from "react";
import { Heading1Component } from "../components/Tags/heading";
import { ParagraphComponent } from "../components/Tags/paragraph";
import { subLayoutVariant, transition } from "../variants";
import { motion } from "framer-motion";

type layoutProps = {
  title?: string;
  text?: string;
  children: ReactNode;
  subText?: string;
  _style?: string;
  _style2?: string;
  title_style?: string;
};

const SubLayout: React.FC<layoutProps> = ({
  text,
  title,
  children,
  subText,
  _style2,
  _style,
  title_style,
}): JSX.Element => {
  return (
    <motion.section
      variants={subLayoutVariant}
      transition={transition}
      whileInView="inView"
      initial="initial"
      className={`md:my-10 my-48  ${_style}`}
    >
      <div className="md:max-w-4xl mx-auto">
        <div className={`${title_style}`}>
          {" "}
          <Heading1Component _style="text-center" text={text ? text : ""} />
        </div>

        <ParagraphComponent
          _style="text-center"
          text={subText ? subText : ""}
        />
      </div>
      <div className={`${_style2} md:my-20  `}>{children}</div>
    </motion.section>
  );
};

export default SubLayout;

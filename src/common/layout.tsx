import { ReactNode } from "react";
import { pageVariant, transition } from "../variants";
import { motion } from "framer-motion";

import chat from "../assets/chat.png";

import Header from "./header";
import Footer from "./footer";



type layoutProps = {
  children: ReactNode;
  SectionComponent?: React.ComponentType;
  name?: string;
};

const Layout = ({
  children,
  SectionComponent,
  name,
}: layoutProps): JSX.Element => {
  const customText = "Hi! Welcome to GJC recycling. \nHow can I help you";
  const encodedText = encodeURIComponent(customText);
  return (
    <motion.main
      variants={pageVariant}
      initial="initial"
      animate="animate"
      transition={transition}
    >
      <Header Component={SectionComponent} />

      <div className="fixed z-50 right-0 top-3/4 ">
        <a
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=+2347065911838&text=${encodedText}
       `}
        >
          <img src={chat} className="w-16" alt="whatsapp icon" />
        </a>
      </div>

      <main id={name} className="relative max-w-6xl mx-auto  md:p-3 p-8 ">
        {children}
      </main>
      <Footer />
    </motion.main>
  );
};

export default Layout;

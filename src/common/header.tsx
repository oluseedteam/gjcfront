import { NavLink, useNavigate } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";

import { BsArrowDownLeftCircleFill } from "react-icons/bs";

import { LogoComponent, LightLogoComponent } from "./logo";
import { LinkRoutes } from "../data";
import { ButtonComponent } from "../components/Tags/button";
import { motion, AnimatePresence } from "framer-motion";
import { sidebarVariant, transition } from "../variants";
import { MdMenu } from "react-icons/md";
import ScrollIntoView from "react-scroll-into-view";

type componentProps = {
  Component?: React.ComponentType;
  ref?: string;
};

const Header = ({ Component }: componentProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const ref = useRef(null);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className="bg-primary header   md:p-8 lg:p-10 mb-3">
        <header
          className={`md:flex hidden  shadow-xl    bg-white  top-5 ${
            isSticky && "is-sticky"
          } sticky left-0 right-0 mx-3 rounded-md items-center justify-between px-5`}
        >
          <LogoComponent />
          <nav className="flex  font-gsans-medium justify-between mx-auto flex-1 max-w-sm">
            {LinkRoutes.map(({ name, path }, index) => {
              return (
                // <ScrollIntoView selector={`#${name}`}>
                <NavLink key={name} to={path}>
                  {name}
                </NavLink>
                // </ScrollIntoView>
              );
            })}
          </nav>
          <ButtonComponent
            clickHandler={() => navigate("/register")}
            _style=""
            title="Sell Waste"
            type="dark"
          />
        </header>

        <header
          className={`${
            isSticky && "is-sticky py-0 w-screen bg-white"
          } py-2 px-0 `}
        >
          <section className="md:hidden  top-5 sticky left-0 right-0 mx-2 z-10 ">
            <nav
              className={`flex md:hidden shadow-2xl    bg-white  top-5   left-0 right-0 mx-1 rounded-md items-center justify-between px-5`}
            >
              <LogoComponent />
              <span
                onClick={() => setOpen(!open)}
                className=" p-[1.3px] rounded-md cursor-pointer bg-primary"
              >
                {" "}
                <MdMenu size="2rem" color="#fff" />
              </span>
            </nav>

            <AnimatePresence>
              {" "}
              {open && (
                <motion.nav
                  variants={sidebarVariant}
                  transition={transition}
                  initial="hidden"
                  animate="visible"
                  className=" shadow-2xl  font-gsans-medium flex-col  gap-5 rounded-md my-4 p-3 flex items-center justify-center bg-white"
                >
                  {LinkRoutes.map(({ name, path }, index) => {
                    return (
                      // <ScrollIntoView selector={`#${name}`}>
                      <NavLink
                        className=" font-semibold font-gsans-light "
                        key={name}
                        to={path}
                      >
                        {name}
                      </NavLink>

                      // </ScrollIntoView>
                    );
                  })}
                  <ButtonComponent
                    clickHandler={() => navigate("/register")}
                    _style="px-3"
                    title="Sell Waste"
                    type="dark"
                  />
                </motion.nav>
              )}
            </AnimatePresence>
          </section>
        </header>

        {Component && (
          <div className="py-8">
            <Component />
          </div>
        )}
      </main>
    </>
  );
};

export default Header;

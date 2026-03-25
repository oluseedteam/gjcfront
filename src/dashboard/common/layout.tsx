import Sidebar from "./sidebar";
import sidebarbg from "../../assets/sidebarbg.png";
import { ButtonComponent } from "../../components/Tags/button";
import notificationIcon from "../../assets/notification.png";
import icon from "../../assets/small_img.png";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { useNavigate } from "react-router";

import { useState } from "react";

import { useModal } from "../../context/modal";

import SelectWaste from "../../booking";
import Bookings from "../../booking/booking";
import Review from "../../booking/review";

import { LogoComponent } from "../../common/logo";

import { MobileSidebar } from "./sidebar";

import { AnimatePresence, motion } from "framer-motion";
import { pageVariant, sidebarVariant, transition } from "../../variants";

type layoutType = {
  children: JSX.Element;
  text: string;
  showBooking?: boolean;
};

const Layout: React.FC<layoutType> = ({
  children,
  text,
  showBooking = true,
}): JSX.Element => {
  const { modalToggle, setModalToggle, initialState } = useModal();
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <SelectWaste
        text="Select Pick Up Waste Item's"
        open={modalToggle.selectOpen}
        name="selectOpen"
      />
      <Bookings
        text="Fill In Booking Details"
        open={modalToggle.bookingOpen}
        name="bookingOpen"
      />
      <Review
        text="Booking Review"
        open={modalToggle.reviewOpen}
        name="reviewOpen"
      />
      <motion.main
        variants={pageVariant}
        initial="initial"
        animate="animate"
        transition={transition}
        className="md:flex overflow-y-hidden md:h-[100vh] gap-8"
      >
        <aside
          style={{ backgroundImage: `url(${sidebarbg})` }}
          className=" overflow-hidden md:block hidden  h-screen bg-primary "
        >
          <Sidebar />
        </aside>
        <header className="md:hidden items-center justify-between p-4 flex">
          <LogoComponent />
          <MdMenu onClick={() => setOpen(!open)} size="1.4rem" />
        </header>
        <AnimatePresence>
          {open && (
            <motion.aside
              variants={sidebarVariant}
              transition={transition}
              exit="exit"
              animate="visible"
              initial="hidden"
              style={{ backgroundImage: `url(${sidebarbg})` }}
              className="md:hidden bg-primary w-56  p-3 text-white fixed top-0 left-0 bottom-0 z-10"
            >
              <MobileSidebar />
            </motion.aside>
          )}
        </AnimatePresence>
        <section className="self-start overflow-y-scroll h-full flex-1 p-3 md:px-2 lg:px-10">
          <header>
            <nav className="flex mb-10 justify-between md:justify-end gap-5">
              <img
                className="w-8"
                src={notificationIcon}
                alt="notification icon"
              />
              <img className="w-8" src={icon} alt="profile" />
            </nav>
            <section className="flex items-center justify-between my-3">
              {" "}
              <div className=" flex gap-2 items-center">
                <BsFillArrowLeftSquareFill
                  onClick={() => navigate(-1)}
                  size="1.2rem"
                  color="#292929"
                />
                <h1 className="text-xl">{text}</h1>
              </div>
              {showBooking && (
                <ButtonComponent
                  clickHandler={() =>
                    setModalToggle({ ...initialState, selectOpen: true })
                  }
                  type="dark"
                  title="Create Booking"
                />
              )}
            </section>
          </header>

          {children}
        </section>
      </motion.main>
    </>
  );
};

export default Layout;

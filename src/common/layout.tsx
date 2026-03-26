import Sidebar from "./sidebar";
import sidebarbg from "../assets/sidebarbg.png";
import { ButtonComponent } from "../components/Tags/button";
import notificationIcon from "../assets/notification.png";
import icon from "../assets/small_img.png";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { useNavigate } from "react-router";

import { useState } from "react";

import { useModal } from "../context/modal";

import ItemModal from "../dashboard/items/add";
import AdminModal from "../dashboard/admin/add";
import AreaModal from "../dashboard/areas/add";

import EditItem from "../dashboard/items/edit";
import EditArea from "../dashboard/areas/edit";
// import Edit/

import { DoneComponent, CancelComponent } from "../modals/action";

import { MobileSidebar } from "./sidebar";

import { AnimatePresence, motion } from "framer-motion";
import { pageVariant, sidebarVariant, transition } from "../variants";

import { LogoComponent } from "../common/logo";

type layoutType = {
  children: JSX.Element;
  text: string;
  showBooking?: boolean;
  showSearch?: boolean;
  type?: string;
};

const Layout: React.FC<layoutType> = ({
  children,
  text,
  showBooking = true,
  showSearch = true,
  type,
}): JSX.Element => {
  const { modalToggle, setModalToggle, initialState } = useModal();

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <ItemModal
        open={modalToggle.itemOpen}
        setOpen={() => setModalToggle({ ...initialState })}
      />
      <EditItem
        open={modalToggle.editItem}
        setOpen={() => setModalToggle({ ...initialState })}
      />
      <AreaModal
        open={modalToggle.areaOpen}
        setOpen={() => setModalToggle({ ...initialState })}
      />
      <EditArea
        open={modalToggle.editArea}
        setOpen={() => setModalToggle({ ...initialState })}
      />
      <AdminModal
        open={modalToggle.userOpen}
        setOpen={() => setModalToggle({ ...initialState })}
      />

      <CancelComponent
        open={modalToggle.cancelOpen}
        setOpen={() => setModalToggle({ ...initialState })}
      />

      <DoneComponent
        open={modalToggle.doneOpen}
        setOpen={() => setModalToggle({ ...initialState })}
      />
      <motion.main
        variants={pageVariant}
        initial="initial"
        animate="animate"
        transition={transition}
        className="md:flex overflow-y-hidden -z-10  md:bg-[#FFFCF2] md:h-[100vh] gap-8"
      >
        <aside
          style={{ backgroundImage: `url(${sidebarbg})` }}
          className=" overflow-y-scroll  md:block hidden  h-screen bg-primary "
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
              <img className="w-8" src={icon} alt="profile image" />
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
            </section>
            <div className="">
              {showSearch && (
                <div className="my-5 flex items-center justify-between">
                  <input
                    className="outline-none bg-[#F8FDF9] w-[50%]  py-2 px-4 border-none"
                    type="search"
                    placeholder="search"
                  />
                  {type && (
                    <ButtonComponent
                      _style="self-start px-3"
                      type="dark"
                      title={`Add New ${type}`}
                      clickHandler={() =>
                        setModalToggle({
                          ...initialState,
                          [`${type.toLowerCase()}Open`]: true,
                        })
                      }
                    />
                  )}
                </div>
              )}
            </div>
          </header>

          <div className="my-5 md:my-10">{children}</div>
        </section>
      </motion.main>
    </>
  );
};

export default Layout;

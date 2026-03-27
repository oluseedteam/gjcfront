import { NavLink, useLocation } from "react-router-dom";
import { LightLogoComponent } from "./logo";
import { SidebarLinks } from "../data";

import { GoHomeFill, GoPersonFill } from "react-icons/go";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineLogout, MdOutlineSettings } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";

const Links = () => {
  const path = useLocation().pathname;
  console.log(path);

  const icons = [
    <GoHomeFill />,
    <img
      className="w-4"
      src={path === "/dashboard/bookings" ? book2 : book1}
      alt="booking icon"
    />,
    <BsPeopleFill />,
    <img
      className="w-4"
      src={path === "/dashboard/items" ? item1 : item2}
      alt="item icon"
    />,
    <IoLocationOutline />,

    <MdOutlineSettings />,
    <GoPersonFill />,
    <MdOutlineLogout />,
  ];

  const linkState = {
    active: "text-primary bg-white",
    inactive: "textw-white",
  };

  const renderLinks = SidebarLinks.map((data, index) => {
    return (
      <NavLink
        key={data.name}
        className={`text-base flex items-center gap-3 p-3 w-full rounded-s-xl ${
          data.path === path ? linkState.active : linkState.inactive
        } `}
        to={data.path}
      >
        {icons[index]} <li className="list-none ">{data.name}</li>
      </NavLink>
    );
  });

  return <nav className="flex flex-col  my-5 gap-5 ">{renderLinks}</nav>;
};

const Sidebar = (): JSX.Element => {
  return (
    <section className=" pl-4 my-10  text-white">
      <LightLogoComponent />
      <Links />
    </section>
  );
};

export const MobileSidebar = () => {
  return (
    <section>
      <Links />
    </section>
  );
};

export default Sidebar;

import { NavLink, useLocation } from "react-router-dom";
import { LightLogoComponent } from "../../common/logo";
import { SidebarLinks } from "../../data";

import { GoHomeFill, GoPersonFill } from "react-icons/go";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";

const Links = () => {
  const icons = [
    <GoHomeFill />,
    <BsPeopleFill />,
    <GoPersonFill />,
    <MdOutlineLogout />,
  ];
  const path = useLocation().pathname;
  const linkState = {
    active: "text-primary bg-white",
    inactive: "",
  };

  const renderLinks = SidebarLinks.map((data, index) => {
    return (
      <NavLink
        key={data.name}
        className={`text-xl flex items-center gap-3 p-3 w-full rounded-s-xl ${
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
    <section className=" pl-4 my-10 text-white">
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

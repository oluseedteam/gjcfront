import { LightLogoComponent } from "./logo";
import { NavLink } from "react-router-dom";
import { FooterRoutes } from "../data";
import { subSectionProps } from "../types";
const Footer = (): JSX.Element => {
  const { qlinks, contact, services, support } = FooterRoutes;

  const SubSection: React.FC<subSectionProps> = ({ title, routes }) => {
    return (
      <div className="">
        <h3 className="text-base font-semibold mb-3">{title}</h3>
        <nav className="flex flex-col gap-2 font-light text-light font-gsans-light">
          {routes.map((data, index) => {
            return data.path ? (
              <NavLink key={data.name} className="text-sm" to={data.path}>
                {data.name}
              </NavLink>
            ) : (
              <div key={data.name} className="flex items-center">
                <img alt={data.name} className="w-5" src={data.icon} />
                <span className="mx-2"> {data.name}</span>
              </div>
            );
          })}
        </nav>
      </div>
    );
  };

  return (
    <footer className="bg-dark text-white p-10  ">
      <section className="grid md:grid-cols-3 lg:grid-cols-5 mb-10 gap-10">
        <div className="font-gsans-light font-light">
          <LightLogoComponent />
          <p>Address : 1 Phase 2 Temidire Market, Eleyele</p>
        </div>
        <SubSection title={qlinks.title} routes={qlinks.routes} />
        <SubSection title={services.title} routes={services.routes} />
        <SubSection title={support.title} routes={support.routes} />
        <div className="">
          <SubSection title={contact.title} routes={contact.routes} />
          <h3 className="text-base font-semibold mb-3">{contact.title2}</h3>
          <nav className="flex  gap-2 ">
            {contact.routes2.map((data) => (
              <img
                key={data.name}
                className="w-4"
                src={data.icon}
                alt={data.name}
              />
            ))}
          </nav>
        </div>
      </section>
      <span className="text-center text-[#E8E8FF] block font-gsans-light text-xs font-light">
        © All Rights Reserved By GJC Recycling
      </span>
    </footer>
  );
};

export default Footer;

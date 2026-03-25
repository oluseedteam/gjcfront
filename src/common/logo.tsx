import logo from "../assets/logo.png";
import logo2 from "../assets/light_logo.png";
export const LogoComponent = (): JSX.Element => {
  return (
    <div className="logo">
      <img className="md:w-auto w-28" src={logo} alt="GJC Logo" />
    </div>
  );
};

export const LightLogoComponent = (): JSX.Element => {
  return (
    <div className="logo">
      <img src={logo2} alt="GJC Logo" />
    </div>
  );
};

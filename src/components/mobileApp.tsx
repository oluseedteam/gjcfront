import mobile from "../assets/mobileApp.png";
import hero from "../assets/hero2.png";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";
import { Heading1Component } from "./Tags/heading";

import SubLayout from "../common/subLayout";
const MobileApp = (): JSX.Element => {
  return (
    <SubLayout>
      <section
        className="bg-primary md:h-64  relative md:flex  md:px-10 rounded-3xl"
        style={{ backgroundImage: `url(${mobile})` }}
      >
        <div className="md:max-w-md max-w-[100%] py-10">
          <Heading1Component
            _style="text-white md:text-start text-center tracking-wider"
            text="Our Mobile is coming soon watch out !!!"
          />
          <div className="flex md:max-w-[60%] md:mx-0 mx-auto max-w-[90%] gap-4 my-2 justify-between">
            <img className="w-32" src={appstore} alt="appstore" />
            <img className="w-32" src={playstore} alt="playstore" />
          </div>
        </div>
        <div className="absolute md:block hidden -bottom-10 oveflow-hidden right-0">
          <img src={hero} className="w-72" alt="mobile app" />
        </div>
      </section>
    </SubLayout>
  );
};

export default MobileApp;

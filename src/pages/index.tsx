import Layout from "../common/layout";
import Partners from "../components/partners";
import Convert from "../components/convert";
import Wastes from "../components/wastes";
import Band from "../components/band";
import WasteMethods from "../components/methods";
import MobileApp from "../components/mobileApp";
import FaqsComponent from "../components/faqs";
import Testimonials from "../components/testimonials";
import WhyUs from "../components/whyus";
import { ButtonComponent } from "../components/Tags/button";

import { ParagraphComponent } from "../components/Tags/paragraph";

import { ImageComponent } from "../components/Tags/image";

import heroBg from "../assets/herobg.png";
import { useNavigate } from "react-router";

const SectionComponent = () => {
  const navigate = useNavigate();
  return (
    <section className=" grid md:grid-cols-2 grid-cols-1 gap-6 items-center p-3    max-w-5xl justify-between mx-auto">
      <div className="max-w-xl">
        <h1 className="text-4xl font-gsans-bold  capitalize tracking-wider text-shadow font-bold text-light">
          Convert your waste into money with GJC Recycling
        </h1>

        <ParagraphComponent
          text="  Lorem ipsum dolor sit amet consectetur. Tincidunt ipsum enim tellus
          rhoncus mattis. Id maecenas tincidunt dapibus auctor lectus tortor
          ligula sed. Aliquam tortor viverra phasellus at euismod id faucibus
          sem."
          type="light"
        />
        <ButtonComponent
          clickHandler={() => navigate("/register")}
          _style="w-32"
          title="Sell Waste"
          type="light"
        />  
      </div>
      <div>
        <ImageComponent _style="md:w-[27rem] w-96" src={heroBg} />

        {/* <img src={heroBg} alt="hero background" /> */}
      </div>
    </section>
  );
};

const HomePage = (): JSX.Element => {
  return (
    <Layout name="Home" SectionComponent={SectionComponent}>
      <Partners />
      <Convert />
      <Wastes />
      <Band />
      <WasteMethods />
      <MobileApp />
      <FaqsComponent />
      <Testimonials />
      <WhyUs />
    </Layout>
  );
};

export default HomePage;

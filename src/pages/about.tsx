import Layout from "../common/layout";

import { ParagraphComponent } from "../components/Tags/paragraph";
import Partners from "../components/partners";
import Band from "../components/band";
import SubLayout from "../common/subLayout";
import Team from "../components/team";

import { aboutData } from "../data";

const About = (): JSX.Element => {
  const SectionComponent = () => {
    return (
      <section className=" text-center md:max-w-2xl mx-auto text-white  ">
        <h1 className="md:text-9xl text-6xl uppercase font-hurl tracking-wider">
          Our Story
        </h1>
        <ParagraphComponent
          _style="text-white font-gsans-light  my-3 font-light text-light"
          text="At GJC Recycling company, we stand out from the crowd. Our unique approach to waste management sets us apart and allows us to make a real difference in the lives of our customers and the environment. Here's what makes us special "
        />
      </section>
    );
  };
  return (
    <Layout name="About Us" SectionComponent={SectionComponent}>
      <SubLayout _style="max-w-5xl my-6  mx-auto">
        <h1 className="text-center text-xl my-5 font-black font-gsans-bold text-primary md:text-3xl">
          What Makes Us Special
        </h1>
        {aboutData.map((data, index) => {
          return (
            <div className="">
              <h1 className="text-xl font-bold">{data.title}</h1>
              <ParagraphComponent _style="" text={data.text} />
            </div>
          );
        })}
      </SubLayout>

      <Team />
      <Partners />
      <Band />
    </Layout>
  );
};

export default About;

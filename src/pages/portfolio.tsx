import Layout from "../common/layout";
import { PorfolioData } from "../data";
import { Heading1Component } from "../components/Tags/heading";
import { ParagraphComponent } from "../components/Tags/paragraph";
import Band from "../components/band";
import FaqsComponent from "../components/faqs";
import { NavLink } from "react-router-dom";

import { ImageComponent } from "../components/Tags/image";

import SubLayout from "../common/subLayout";

import share from "../assets/share.png";
const Portfolio = (): JSX.Element => {
  const SectionComponent = () => {
    return (
      <section className="uppercase text-center text-white  ">
        <h1 className="md:text-9xl text-4xl font-hurl tracking-wider">
          Award <span className="font-huri">&</span> Recognitions
        </h1>
      </section>
    );
  };
  return (
    <Layout name="Portfolio" SectionComponent={SectionComponent}>
      <SubLayout _style="max-w-5xl">
        {PorfolioData.map((data, index) => {
          return (
            <div
              key={index}
              className="md:flex  items-center my-10     gap-2 justify-between"
            >
              <div className={`max-w-xl  ${index % 2 === 0 && "item"}  `}>
                <Heading1Component
                  _style="text-primary text-xl"
                  text={data.title}
                />
                <ParagraphComponent text={data.content} />
                <p className="text-right font-bold text-sm">
                  Posted {data.date}
                </p>
                <NavLink
                  className=" my-5 flex items-center w-28 justify-between bg-primary rounded-md py-2 px-4 text-light font-gsans-light"
                  to={data.to}
                >
                  <span>
                    <img className="w-6" src={share} alt="share icon" />
                  </span>
                  <span>Share</span>
                </NavLink>
              </div>
              <ImageComponent src={data.img} _style="w-96 self-start" />
            </div>
          );
        })}
      </SubLayout>
      <Band />
      <FaqsComponent />
    </Layout>
  );
};

export default Portfolio;

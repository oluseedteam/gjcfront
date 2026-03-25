import { Heading1Component } from "./Tags/heading";
import { ParagraphComponent } from "./Tags/paragraph";
import { BenefitData } from "../data";

import SubLayout from "../common/subLayout";
const WhyUs = (): JSX.Element => {
  return (
    <SubLayout
      _style="hidden"
      _style2="max-w-4xl mx-auto my-20"
      subText="Lorem ipsum dolor sit amet consectetur. Tincidunt ipsum enim tellus rhoncus mattis. Id maecenas tincidunt dapibus auctor lectus tortor ligula sed. Aliquam tortor viverra phasellus at euismod id faucibus sem. "
      text="Why gjc recycling"
    >
      {BenefitData.map((data, index) => {
        return (
          <div
            key={index}
            className="md:flex  items-center my-10     gap-10 justify-between"
          >
            <div className={`max-w-xl  ${index % 2 !== 0 && "item"}  `}>
              <Heading1Component text={data.title} />
              <ParagraphComponent text={data.content} />
            </div>
            <img
              src={data.img}
              className="md:w-72  md:mx-0 mx-auto self-start"
              alt="waste collection methods images"
            />
          </div>
        );
      })}
    </SubLayout>
  );
};

export default WhyUs;

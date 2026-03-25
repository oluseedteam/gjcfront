import { Heading1Component } from "./Tags/heading";
import { ParagraphComponent } from "./Tags/paragraph";
import { MethodTypes } from "../data";

import { ImageComponent } from "./Tags/image";

import SubLayout from "../common/subLayout";

const WasteMethods = (): JSX.Element => {
  return (
    <SubLayout
      _style2="max-w-4xl mx-auto my-20"
      _style="max-w-5xl mx-auto"
      subText="Lorem ipsum dolor sit amet consectetur. Tincidunt ipsum enim tellus rhoncus mattis. Id maecenas tincidunt dapibus auctor lectus tortor ligula sed. Aliquam tortor viverra phasellus at euismod id faucibus sem. "
      text="method of waste collection"
    >
      {MethodTypes.map((data, index) => {
        return (
          <div
            key={data.title}
            className="md:flex items-center my-10 justify-center     gap-10 md:justify-between"
          >
            <div className={`max-w-xl  ${index % 2 !== 0 && "item"}  `}>
              <Heading1Component text={data.title} />
              <ParagraphComponent text={data.content} />
            </div>
            <ImageComponent
              _style="md:w-72 w-80 md:mx-0 mx-auto self-start"
              src={data.img}
            />
          </div>
        );
      })}
    </SubLayout>
  );
};

export default WasteMethods;

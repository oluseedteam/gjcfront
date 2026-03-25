import convert from "../assets/convert.png";

import { Heading1Component } from "./Tags/heading";
import { ParagraphComponent } from "./Tags/paragraph";

import SubLayout from "../common/subLayout";

import { ButtonComponent } from "./Tags/button";
const Convert = (): JSX.Element => {
  return (
    <SubLayout
      _style2="md:flex items-center  justify-between"
      _style="max-w-5xl mx-auto"
    >
      <div className="max-w-md">
        <Heading1Component text="Convert to money" />
        <ParagraphComponent
          text="  We are powering social change using the environment by allowing people
          in low-income communities to capture value from their waste."
        />
        <ButtonComponent _style="my-4 w-32" title="Sell Waste" type="dark" />
      </div>
      <div>
        <img src={convert} alt="convert to money" />
      </div>
    </SubLayout>
  );
};

export default Convert;

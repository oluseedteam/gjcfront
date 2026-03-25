import { Heading1Component } from "./Tags/heading";
import { ButtonComponent } from "./Tags/button";
import bandbg from "../assets/bandbg.png";
import SubLayout from "../common/subLayout";

import { useNavigate } from "react-router-dom";
const Band = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <SubLayout>
      <section
        style={{ backgroundImage: `url(${bandbg})` }}
        className="bg-primary flex opacity-80 items-center flex-col h-64 justify-center rounded-2xl p-3"
      >
        <Heading1Component
          _style="text-white max-w-xl text-center "
          text="Collecting recyclables and safeguarding the environment"
        />
        <ButtonComponent
          clickHandler={() => navigate("/login")}
          type="light"
          title="sell your waste"
        />
      </section>
    </SubLayout>
  );
};

export default Band;

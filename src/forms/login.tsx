import Layout from "./layout";
import { InputComponent } from "../components/Tags/input";
import { ButtonComponent } from "../components/Tags/button";

import { useState } from "react";

import { values } from "../types";

import { RegisterValues } from "../data";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const Login = (): JSX.Element => {
  const [values, setValues] = useState<values>(RegisterValues);
  const navigate = useNavigate();

  return (
    <Layout
      title="Welcome back !"
      text="Please enter your usernama and password"
    >
      <div className="">
        <InputComponent
          _style="  border-[1px] rounded-md  shadow-none p-3 border-[#C2C2C2]"
          values={values}
          setValues={setValues}
          name="email"
          label="Email"
          type="email"
          placeholder="gjc@gmail.com"
        />

        <InputComponent
          _style="  border-[1px] rounded-md  shadow-none p-3 border-[#C2C2C2]"
          values={values}
          setValues={setValues}
          name="password"
          label="Password"
          type="password"
          placeholder="*******"
        />
        <div className="flex justify-end">
          <NavLink className="text-red-700 self-end text-end " to="/reset">
            Forgotten Password?
          </NavLink>
        </div>
        <div className="my-5 gap-5 flex flex-col">
          <ButtonComponent
            clickHandler={() => navigate("/dashboard", { replace: true })}
            _style="py-4 my-2"
            type="dark"
            title="Sign In"
          />
          <ButtonComponent
            clickHandler={() => navigate("/register")}
            _style="py-3 my-2 border-2"
            title="Create Account"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Login;

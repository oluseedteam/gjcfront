import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SubLayout from "../common/subLayout";
import { ButtonComponent } from "../components/Tags/button";
const VerifyEmail: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }): JSX.Element => {
  const navigate = useNavigate();
  return (
    <SubLayout type="done" open={open} setOpen={setOpen}>
      <div className="text-center ">
        <h1 className="text-2xl font-gsans-medium font-bold">
          Verify Your Email Address
        </h1>
        <p className="font-darkXs">
          We've sent a verification email to ajaniben123456@gmail.com Please
          check your inbox or promotions folder.
        </p>
        <div className="my-8">
          <ButtonComponent
            _style="w-full"
            type="dark"
            title="Open Your Email"
            clickHandler={() => navigate("/dashboard")}
          />
        </div>
        <p className="font-gans-light my-4 darkSm">
          By clicking “Create my account”, I agree to IntelliDetect Pro Terms of
          use and Privacy Policy
        </p>
        <p className="cursor-pointer text-primary font-gsans-light">
          Wrong email address? click here
        </p>
      </div>
    </SubLayout>
  );
};

export default VerifyEmail;

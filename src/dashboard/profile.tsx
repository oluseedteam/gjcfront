import Layout from "../common/layout";
import { InputComponent, SelectComponent } from "../components/Tags/input";
import { ButtonComponent } from "../components/Tags/button";
import React, { useState } from "react";
import { values } from "../types";
import uploadBtn from "../assets/uploadbtn.png";
import profileImg from "../assets/profileImg.png";
import { LanguageData } from "../data";

type UpdateProps = {
  title: string;
  text: string;
  name: string;
  values: values;
  setValues: React.Dispatch<React.SetStateAction<values>>;
};

const UpdateComponent: React.FC<UpdateProps> = ({
  title,
  setValues,
  values,
  name,
  text,
}) => {
  return (
    <form className="flex md:flex-row flex-col md:items-center gap-1 md:gap-5 justify-between">
      <div className="flex-1">
        <h1 className="md:text-2xl text-xl font-gsans-medium font-semibold capitalize">
          {title}
        </h1>
        <p className="my-3">{text}</p>
      </div>
      <div className="flex-col flex-1 w-full  flex ">
        <InputComponent
          _style="  border-[1px] rounded-md  shadow-none p-3 border-[#C2C2C2]"
          values={values}
          setValues={setValues}
          name={name}
          label=""
        />
        <ButtonComponent
          _style="px-3 self-start"
          type="dark"
          title="Save Changes"
        />
      </div>
    </form>
  );
};

const Profile = (): JSX.Element => {
  const [values, setValues] = useState<values>({});
  return (
    <Layout showBooking={false} text="Profile">
      <section>
        <div className="flex  my-3 justify-between">
          <div className="relative">
            <img src={profileImg} alt="profile image" />
            <label
              className="absolute right-3 bottom-0"
              htmlFor="profile_image"
            >
              <img src={uploadBtn} alt="uploadBtn" />
            </label>
            <input
              className="hidden"
              type="file"
              id="profile_image"
              name="profile_image"
            />
          </div>
          <h1 className="md:text-2xl text-xl font-light-font-gsans-light">
            User ID : 345908
          </h1>
        </div>
        <div className="my-5 flex flex-col gap-5">
          <UpdateComponent
            name="fullName"
            title="Full Name"
            text="your full name"
            values={values}
            setValues={setValues}
          />
          <UpdateComponent
            name="email"
            title="Email"
            text="Used to sign into and recieve notifications for this account"
            values={values}
            setValues={setValues}
          />
          <UpdateComponent
            name="phone"
            title="Phone Number"
            text="your phone number"
            values={values}
            setValues={setValues}
          />
          <form className="flex md:flex-row flex-col md:items-center gap-1 md:gap-5 justify-between">
            <div className="flex-1">
              <h1 className="text-2xl font-gsans-medium font-seimibold capitalize">
                Password
              </h1>
              <p className="my-3">change Password</p>
            </div>
            <div className="flex-col flex-1 w-full  flex ">
              <InputComponent
                _style="  border-[1px] rounded-md  shadow-none p-3 border-[#C2C2C2]"
                values={values}
                setValues={setValues}
                name="passsword"
                type="password"
                label=""
                placeholder="Old Password"
              />
              <InputComponent
                _style="  border-[1px] rounded-md  shadow-none p-3 border-[#C2C2C2]"
                values={values}
                setValues={setValues}
                name="passsword"
                type="password"
                label=""
                placeholder="New Password"
              />
              <ButtonComponent
                _style="px-3 self-start"
                type="dark"
                title="Save Changes"
              />
            </div>
          </form>
          <form className="flex md:flex-row flex-col md:items-center gap-1  md:gap-5 justify-between">
            <div className="flex-1">
              <h1 className="text-2xl font-gsans-medium font-seimibold capitalize">
                Language
              </h1>
              <p className="my-3">
                Lorem ipsum dolor sit amet consectetur. Quam pellentesque
                viverra a quis pellentesque nunc porttitor.
              </p>
            </div>
            <div className="flex-col flex-1 w-full  flex ">
              <SelectComponent
                _style="  border-[1px] rounded-md  shadow-none p-3 border-[#C2C2C2]"
                values={values}
                setValues={setValues}
                name="language"
                options={LanguageData}
                label=""
                placeholder="New Password"
              />
              <ButtonComponent
                _style="px-3 self-start"
                type="dark"
                title="Save Changes"
              />
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;

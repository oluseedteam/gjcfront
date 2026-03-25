import { ParagraphComponent } from "./Tags/paragraph";
import { contactData } from "../data";
import { ButtonComponent } from "./Tags/button";
import { InputComponent, TextAreaComponent } from "./Tags/input";
import { useState } from "react";

import SubLayout from "../common/subLayout";
const Contact = (): JSX.Element => {
  const { contact } = contactData;

  type contactProps = {
    [key: string]: string;
  };

  const contactValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const [values, setValues] = useState<contactProps>(contactValues);

  return (
    <SubLayout
      _style2="md:flex justify-between max-w-5xl gap-10 mx-auto my-10"
      text="send us direct message"
      subText="Lorem ipsum dolor sit amet consectetur. Tincidunt ipsum enim tellus rhoncus mattis. Id maecenas tincidunt dapibus auctor lectus tortor ligula sed. Aliquam tortor viverra phasellus at euismod id faucibus sem. "
    >
      <div className="capitalize max-w-xl">
        <h1 className="text-primary font-bold text-xl">
          have feedback for us, drop a message
        </h1>
        <ParagraphComponent text="Lorem ipsum dolor sit amet consectetur. Tincidunt ipsum enim tellus rhoncus mattis. Id maecenas tincidunt dapibus auctor lectus tortor ligula sed. Aliquam tortor viverra phasellus at euismod id faucibus sem. " />

        <div className="">
          <h3 className="text-base font-semibold mb-3">{contact.title}</h3>
          <nav className="flex flex-col gap-2 font-light font-gsans-light">
            {contact.routes.map((data, index) => {
              return (
                <div key={index} className="flex items-center">
                  <img className="w-5" alt={data.name} src={data.icon} />
                  <span className="mx-2"> {data.name}</span>
                </div>
              );
            })}
          </nav>
          <h3 className="text-base font-semibold mb-3">{contact.title2}</h3>
          <div className="flex items-center gap-3">
            {contact.routes2.map((data, index) => {
              return (
                <img
                  key={index}
                  className="w-5"
                  alt={data.name}
                  src={data.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
      <form className="shadow-xl flex-1 rounded-md p-5">
        <div className="md:flex gap-3 items-center justify-between">
          <InputComponent
            values={values}
            setValues={setValues}
            label="First Name"
            name="firstName"
          />
          <InputComponent
            values={values}
            setValues={setValues}
            label="Last Name"
            name="lastName"
          />
        </div>
        <InputComponent
          values={values}
          setValues={setValues}
          label="E-mail"
          name="email"
          type="email"
          placeholder="example@gmail.com"
        />
        <TextAreaComponent
          label="Message"
          name="message"
          values={values}
          setValues={setValues}
          placeholder="message"
        />
        <ButtonComponent type="dark" title="Contact Us" />
      </form>
    </SubLayout>
  );
};

export default Contact;

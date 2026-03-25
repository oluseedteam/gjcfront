import { FaqContent } from "../data";
import close from "../assets/close.png";
import React, { useState } from "react";
import SubLayout from "../common/subLayout";
const FaqsComponent = (): JSX.Element => {
  const FaqItem: React.FC<{
    content: string;
    title: string;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }> = ({ content, title, open, setOpen }) => {
    return (
      <div className="p-3 border-[1px]  shadow-md border-primary my-5 rounded-[10px]">
        <div className="flex items-center justify-between">
          <h2 className="text-primary text-normal font-medium">{title}</h2>
          <span>
            <img
              // onClick={() => setOpen(!open)}
              className="w-12"
              src={close}
              alt="close accordion"
            />
          </span>
        </div>
        {open && <p>{content}</p>}
      </div>
    );
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <SubLayout text="Few Questions & answers" _style="  max-w-5xl mx-auto">
      {FaqContent.map((data, index) => (
        <FaqItem
          key={index}
          content={data.answer}
          open={isOpen}
          setOpen={setIsOpen}
          title={data.question}
        />
      ))}
    </SubLayout>
  );
};

export default FaqsComponent;

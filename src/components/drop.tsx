import { dropData } from "../data";

import SubLayout from "../common/subLayout";
const Drop = (): JSX.Element => {
  return (
    <SubLayout
      _style2="md:flex grid grid-cols-2 items-center justify-center gap-10 flex-wrap"
      text="Recyclables Drop Off"
      subText=" Lorem ipsum dolor sit amet consectetur. Tincidunt ipsum enim tellus rhoncus mattis. Id maecenas tincidunt dapibus auctor lectus tortor ligula sed. Aliquam tortor viverra phasellus at euismod id faucibus sem. "
      _style="max-w-5xl p-3 mx-auto"
    >
      {dropData.map((data, index) => {
        return (
          <div
            key={index}
            className="p-3 md:max-w-[30%] rounded-md bg-secondary"
          >
            <h3 className="text-base capitalize font-medium font-gsans-medium">
              {data.place}
            </h3>
            <ul className="list-disc text-sm list-inside">
              <li>
                {" "}
                <span className="font-bold">Address: </span>
                <span>{data.address}</span>
              </li>
              <li>
                <span>Phone Number: </span>
                {data.number}
              </li>
            </ul>
          </div>
        );
      })}
    </SubLayout>
  );
};

export default Drop;

import { pickUpData } from "../data";

import SubLayout from "../common/subLayout";

const Pickup = (): JSX.Element => {
  return (
    <SubLayout
      _style2="md:flex  grid grid-cols-2  items-center justify-center gap-5 md:gap-10 flex-wrap"
      subText="Lorem ipsum dolor sit amet consectetur. Tincidunt ipsum enim tellus rhoncus mattis. Id maecenas tincidunt dapibus auctor lectus tortor ligula sed. Aliquam tortor viverra phasellus at euismod id faucibus sem. "
      text="Recyclables PickUp point "
      _style="max-w-5xl p-3 mx-auto"
    >
      {pickUpData.map((data, index) => {
        return (
          <div key={index} className="p-3 rounded-md bg-secondary">
            <h3 className="text-base capitalize font-medium font-gsans-medium">
              {data.place}
            </h3>
            <h4 className="font-gsans-medium my-2 text-sm capitalize">
              Area covered
            </h4>
            <ul className="list-disc list-inside">
              {data.areas.map((data, index) => (
                <li key={index} className="text-sm font-gsas-light">
                  {data}
                </li>
              ))}
            </ul>
            <p className="text-xs font-gsans-medium">
              Phone Number : {data.phone}
            </p>
          </div>
        );
      })}
    </SubLayout>
  );
};

export default Pickup;

import SubLayout from "../common/subLayout";
import { TeamData } from "../data";
const Team = (): JSX.Element => {
  return (
    <SubLayout
      _style2="flex items-center gap-10 my-5 justify-center"
      subText="Lorem ipsum dolor sit amet consectetur. Tincidunt ipsum enim tellus rhoncus mattis. Id maecenas tincidunt dapibus auctor lectus tortor ligula sed. Aliquam tortor viverra phasellus at euismod id faucibus sem. "
      text="Our Board Of Director"
    >
      {TeamData.map((data, index) => {
        return (
          <div
            key={index}
            className="flex md:text-base text-sm textt-center flex-col items-center justify-center"
          >
            <img className="w-48" src={data.img} alt={data.name} />
            <h1 className="font-bold  my-1 uppercase">{data.name}</h1>
            <p className="darkSm uppercase my-1 font-gsans-light">
              {data.role}
            </p>
          </div>
        );
      })}
    </SubLayout>
  );
};

export default Team;

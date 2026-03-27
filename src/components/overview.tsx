import { OverviewData } from "../data";

import overviewBg from "../assets/overviewBg.png";
import credit from "../assets/vector1.png";
import debit from "../assets/vector2.png";
export const OverviewComponent = (): React.ReactNode => {
  const renderOverview = OverviewData.map((data, index) => {
    return (
      <div
        style={{ backgroundImage: `url(${overviewBg})` }}
        className="bg-primary text-white lg:p-5 md:p-1 p-2 rounded-md"
      >
        <h2 className="text-base tracking-wider ">{data.name}</h2>
        <div className="flex  items-center justify-between">
          <h1 className="lg:text-4xl md:text-xl text-xl font-bold">
            {data.amount}
          </h1>
          <div className="my-4 flex items-center gap-3">
            <p>{data.percent}</p>
            <img src={data.type === "credit" ? credit : debit} alt="credit" />
          </div>
        </div>
      </div>
    );
  });
  return (
    <section className="grid md:grid-cols-4 grid-cols-2 gap-4  md:gap-3 lg:gap-5">
      {renderOverview}
    </section>
  );
};

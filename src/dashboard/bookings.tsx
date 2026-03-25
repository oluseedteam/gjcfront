import Layout from "./common/layout";
import { OverviewComponent } from "./common/overview";
import { ButtonComponent } from "../components/Tags/button";

import { AllPickups, headerData, buttonStates } from "../data";
import React, { useEffect, useState } from "react";

const Bookings = (): JSX.Element => {
  const [status, setStatus] = useState("all");
  const [contents, setContents] = useState<any[]>(AllPickups);
  const statusColor: {
    [key: string]: string;
  } = {
    pending: "text-blue-600",
    successful: "text-primary",
    cancelled: "text-red-600",
  };

  const FilterData = React.useCallback((): any[] => {
    let data;
    if (status === "all") data = AllPickups;
    else {
      data = AllPickups.filter((data, index) => {
        return data.status.trim() === status;
      });
    }

    return data;
  }, [status]);

  useEffect(() => {
    const response = FilterData();
    setContents(response);
  }, [FilterData]);

  const renderData = contents.map((data, index) => {
    return (
      <tr className="text-center border-b p-2 " key={index}>
        <td
          style={{ whiteSpace: "nowrap" }}
          className="p-2 md:p-3 font-gsans-light font-medium"
        >
          {data.bookingId}
        </td>
        <td
          style={{ whiteSpace: "nowrap" }}
          className="p-2 md:p-3 font-gsans-light font-medium"
        >
          {data.bookingDate}
        </td>
        <td
          style={{ whiteSpace: "nowrap" }}
          className="p-2 md:p-3 font-gsans-light font-medium"
        >
          {data.location}
        </td>
        <td
          style={{ whiteSpace: "nowrap" }}
          className="p-2 md:p-3 font-gsans-light font-medium"
        >
          {data.phone}
        </td>
        <td
          style={{ whiteSpace: "nowrap" }}
          className="p-2 md:p-3 font-gsans-light font-medium"
        >
          {data.pickupDate}
        </td>
        <td
          style={{ whiteSpace: "nowrap" }}
          className={`p-2 md:p-3 ${
            statusColor[data.status.trim()]
          } font-gsans-light font-medium`}
        >
          {data.status}
        </td>
      </tr>
    );
  });
  return (
    <Layout text="Bookings">
      <section>
        <OverviewComponent />
        <nav className="grid md:grid-cols-5 grid-cols-2 md:gap-5 gap-3 my-10">
          {buttonStates.map((data, index) => {
            return (
              <ButtonComponent
                key={index}
                type={data.status.trim() === status ? "dark" : "light"}
                clickHandler={() => setStatus(data.status)}
                _style="md:px-2 px-1 border-[1px] border-primary"
                title={data.name}
              />
            );
          })}
        </nav>
        <div className="overflow-x-scroll ">
          <table className="  my-2  table-auto w-full ">
            <thead>
              <tr style={{ whiteSpace: "nowrap" }} className="p-3 bg-[#F8FDF9]">
                {headerData.map((data, index) => {
                  return (
                    <th key={index} className=" p-3 border-r-2">
                      {data}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="my-3">{renderData}</tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
};

export default Bookings;

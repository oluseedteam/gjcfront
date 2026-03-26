import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
const Charts = (): JSX.Element => {
  const barChartOptions: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
    },
    plotOptions: {
      bar: {
        barHeight: "100%",
      },
    },
    dataLabels: {
      enabled: false,
      // enabledOnSeries: [1]
    },

    title: {
      text: "Daily Books",
    },
    xaxis: {
      categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thurday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
    yaxis: {
      title: {
        text: undefined,
      },
    },
    fill: {
      colors: ["#126343", "#072A6C", "#C93000"],
      opacity: 1,
    },
  };

  // const barChartOptions: ApexOptions = {
  //   xaxis: {
  //     categories: ["New bookings ", "Pending ", "Completed ", "Cancelled "],
  //   },
  //   colors: ["#BAEDBD", "#C6C7F8", "#000000", "#B1E3FF"],

  //   dataLabels: {
  //     enabled: false,
  //   },
  //   legend: {
  //     show: false,
  //   },

  //   plotOptions: {
  //     bar: {
  //       columnWidth: "45%",
  //       distributed: true,
  //       borderRadiusApplication: "end",
  //       borderRadius: 8,

  //       horizontal: false,
  //     },
  //   },

  //   chart: {
  //     stacked: true,
  //     stackType: "100%",
  //     toolbar: {
  //       show: false,
  //     },
  //   },
  // };

  const barStyle = {
    borderRadius: "4px",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
  };
  const series1 = [
    {
      name: "Successful Pickup",
      data: [44, 55, 30, 70, 32, 20, 10],
    },
    {
      name: "Pending  Pickup",
      data: [53, 32, 53, 20, 20, 60, 20],
    },
    {
      name: "Cancelled Pickup",
      data: [12, 53, 32, 10, 30, 17, 50],
    },
  ];
  const series2 = [38.6, 45.4, 10.2];

  const donutOptions = {
    chart: {
      width: 100,
    },
    title: {
      text: "System Overview",
    },
    colors: ["#126343", "#C93000", "#072A6C"],
    plotOptions: {
      formatter: function (val: number) {
        return `  `;
      },
      pie: {
        startAngle: -90,
        endAngle: 270,

        donut: {
          size: "68%",
        },
      },
    },
    labels: ["Successful bookings", "Pending bookings", "Cancelled boookings"],
    fill: {
      type: "gradient",
    },
    dataLabels: {
      enabled: false,
    },
  };

  return (
    <main className="my-5">
      <h1 className="text-base font-medium my-10 font-gsans-medium">
        Bookings
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5    ">
        <div className="bg-[#F8FDF9] p-3 rounded-2xl">
          {/* <h1 className="text-base font-medium font-gsans-medium">
            Daily Book's
          </h1> */}
          <Chart
            type="bar"
            style={barStyle}
            options={barChartOptions}
            series={series1}
          />
        </div>
        <div className="bg-[#F8FDF9] p-3 rounded-2xl">
          {/* <h1 className="text-base font-medium font-gsans-medium">
            System Overview
          </h1> */}
          <Chart type="donut" options={donutOptions} series={series2} />
        </div>
      </section>
    </main>
  );
};

export default Charts;

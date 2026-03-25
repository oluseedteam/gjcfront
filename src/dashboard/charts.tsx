import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
const Charts = (): JSX.Element => {
  const barChartOptions: ApexOptions = {
    xaxis: {
      categories: ["New bookings ", "Pending ", "Completed ", "Cancelled "],
    },
    colors: ["#BAEDBD", "#C6C7F8", "#000000", "#B1E3FF"],

    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },

    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
        borderRadiusApplication: "end",
        borderRadius: 8,

        horizontal: false,
      },
    },

    chart: {
      toolbar: {
        show: false,
      },
    },
  };

  const barStyle = {
    borderRadius: "4px",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
  };
  const series1 = [
    {
      name: "data",
      data: [20, 10, 40, 20],
    },
  ];
  const series2 = [38.6, 22.7, 30.8, 8.1];

  const donutOptions = {
    chart: {
      width: 100,
    },
    colors: ["#BAEDBD", "#C6C7F8", "#000000", "#FCB495"],
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
    labels: [
      "Successful bookings",
      "New bookings",
      "Pending bookings",
      "Cancelled boookings",
    ],
    fill: {
      type: "gradient",
    },
    dataLabels: {
      enabled: false,
    },
  };

  return (
    <main className="my-5">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5    ">
        <div className="-z-10 bg-[#F7F9FB] p-3 rounded-2xl">
          <h1 className="text-base font-medium font-gsans-medium">
            Recently monthly bookings
          </h1>
          <Chart
            type="bar"
            style={barStyle}
            options={barChartOptions}
            series={series1}
          />
        </div>
        <div className=" -z-10 bg-[#F7F9FB] p-3 rounded-2xl">
          <h1 className="text-base font-medium font-gsans-medium">
            Total bookings
          </h1>
          <Chart type="donut" options={donutOptions} series={series2} />
        </div>
      </section>
    </main>
  );
};

export default Charts;

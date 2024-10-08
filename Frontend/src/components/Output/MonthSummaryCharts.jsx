import ReactApexChart from "react-apexcharts";
const MonthSummaryCharts = ({ data }) => {
  const values = data.map((i) => i.value);
  const options = {
    series: [
      {
        name: "Value",
        data: [
          {
            x: "CNN",
            y: values[0],
            fillColor: "#16a34a",
          },
          {
            x: "CNN + LSTM",
            y: values[1],
            fillColor: "#57534e",
          },
          {
            x: "OBSERVED",
            y: values[2],
            fillColor: "#10b981",
          },
          {
            x: "GNN",
            y: values[3],
            fillColor: "#475569",
          },
          {
            x: "GNN + LSTM",
            y: values[4],
            fillColor: "#d4d4d4",
          },
        ],
      },
    ],
    options: {
      chart: {
        stacked: false,
        toolbar: {
          tools: {
            download: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
          },
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          columnWidth: "40px",
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val;
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["white"],
        },
      },
      xaxis: {
        categories: ["CNN", "CNN + LSTM", "OBSERVED", "GNN", "GNN + LSTM"],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "darkcyan",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val;
          },
        },
      },
      title: {
        text: "Monthly Air Quality Index, 2019",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  };

  return (
    <div>
      <div id="chart" className="lg:h-[20rem] md:h-[15rem] h-[20rem]">
        <ReactApexChart
          options={options.options}
          series={options.series}
          type="bar"
          height="100%"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default MonthSummaryCharts;

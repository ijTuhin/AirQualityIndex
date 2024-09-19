import ApexCharts from "react-apexcharts";
const MonthSummaryCharts = () => {
  const options = {
    series: [
      {
        name: "observed",
        type: "line",
        color: "#f97316",
        data: [
          20, 29, 37, 36, 44, 45, 50, 58, 60, 61, 65, 45, 89, 20, 13, 66, 87,
          90, 91, 68, 67, 34, 23, 22, 21, 67, 87, 99, 100, 44,
        ],
      },
      {
        name: "GNN+LSTM",
        type: "bar",
        color: "#22d3ee",
        data: [
          1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6, 60, 61, 65, 45, 89, 20, 13, 66,
          87, 90, 91, 68, 67, 34, 23, 22, 21, 67, 87, 99, 100, 44,
        ],
      },
      {
        name: "GNN",
        type: "bar",
        color: "#64748b",
        data: [
          20, 29, 37, 36, 44, 45, 50, 58, 60, 61, 65, 45, 89, 20, 13, 66, 87,
          90, 91, 68, 67, 34, 23, 22, 21, 67, 87, 99, 100, 44,
        ],
      },
      {
        name: "CNN+LSTM",
        type: "bar",
        color: "#facc15",
        data: [
          1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5, 60, 61, 65, 45, 89, 20, 13, 66,
          87, 90, 91, 68, 67, 34, 23, 22, 21, 11, 66, 77, 22,
        ],
      },
      {
        name: "CNN",
        type: "bar",
        color: "#65a30d",
        data: [
          20, 29, 37, 36, 44, 45, 50, 58, 60, 61, 65, 45, 89, 20, 13, 66, 87,
          90, 91, 68, 67, 34, 23, 22, 21, 67, 87, 99, 100, 44,
        ],
      },
    ],
    chart: {
      type: "line",
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
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 5, 5, 5, 5],
    },
    xaxis: {
      categories: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
      ],
      labels: {
        show: true,
        style: {
          colors: "#6b7280",
        },
      },
    },
    yaxis: [
      {
        seriesName: "Income",
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "lightgray",
        },
        labels: {
          style: {
            colors: "#6b7280",
          },
        },
        tooltip: {
          enabled: true,
        },
      },
    ],
    tooltip: {
      fixed: {
        // enabled: true,
        position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60,
      },
    },
  };

  return (
    <div id="line-adwords">
      <p className="text-center text-lg text-blue-500 w-full">Month Summary</p>
      <ApexCharts
        options={options}
        series={options.series}
        type="line"
        height={220}
      />
    </div>
  );
};

export default MonthSummaryCharts;

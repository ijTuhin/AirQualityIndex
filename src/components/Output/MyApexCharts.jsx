import React, { useEffect } from "react";
import ApexCharts from "react-apexcharts";
// import styles from "./charts.module.css"
const MyApexCharts = () => {
  const options = {
    series: [
      {
        name: "Income",
        type: "column",
        data: [
          1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6, 60, 61, 65, 45, 89, 20, 13, 66,
          87, 90, 91, 68, 67, 34, 23, 22, 21, 67, 87, 99, 100, 44,
        ],
      },
      {
        name: "Cashflow",
        type: "column",
        data: [
          1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5, 60, 61, 65, 45, 89, 20, 13, 66,
          87, 90, 91, 68, 67, 34, 23, 22, 21, 67, 87, 99, 100, 44,
        ],
      },
      {
        name: "Revenue",
        type: "line",
        data: [
          20, 29, 37, 36, 44, 45, 50, 58, 60, 61, 65, 45, 89, 20, 13, 66, 87,
          90, 91, 68, 67, 34, 23, 22, 21, 67, 87, 99, 100, 44,
        ],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [5, 5, 3],
    },
    // title: {
    //   text: "XYZ - Stock Analysis (2009 - 2016)",
    //   align: "left",
    //   offsetX: 150,
    // },
    xaxis: {
      categories: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ],
    },
    yaxis: [
      {
        seriesName: "Income",
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#008FFB",
        },
        labels: {
          style: {
            colors: "#008FFB",
          },
        },
        // title: {
        //   text: "Income (thousand crores)",
        //   style: {
        //     color: "#008FFB",
        //   },
        // },
        tooltip: {
          enabled: true,
        },
      },
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60,
      },
    },
    // legend: {
    //   horizontalAlign: "left",
    //   offsetX: 40,
    // },
  };

  return (
    <div className={`w-full grid grid-cols-1`}>
      {/* <div id="line-adwords">
        <ApexCharts options={lineOptions} series={lineOptions.series} type="line" height={328} />
      </div> */}

      {/* <div id="barchart">
        <ApexCharts options={barOptions} series={barOptions.series} type="bar" height={380} />
      </div> */}

      <div id="areachart">
        <ApexCharts
          options={options}
          series={options.series}
          type="area"
          height={380}
        />
      </div>
    </div>
  );
};

export default MyApexCharts;

import React from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";
import { useContextData } from "../Context/UseContext";

export default function ObservedChart() {
  const {query} = useContextData()
  const res = query?.result !== undefined ? query?.result?.observed : 1
  const series = [res / 2]; // This is your data
  const options = {
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: "#999",
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            formatter: function () {
              return res; // Custom value to display, regardless of the chart's visual value
            },
            offsetY: -10,
            fontSize: "16px",
            color: "white", // percentage value style
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
        colorStops: [
          /* For gradient circular chart */
          {
            offset: 0, // At 100% (top of the radial bar), transition to red
            color: "#FF0000", // Red
            opacity: 1,
          },
          {
            offset: 50, // At 50%, transition to yellow
            color: "#FFFF00", // Yellow
            opacity: 1,
          },
          {
            offset: 100, // Start at 0% (bottom of the radial bar)
            color: "#00FF00", // Green
            opacity: 1,
          },
        ],
      },
    },
    labels: [res],
  };

  return (
    <div className={`flex flex-col items-center text-white`}>
      <p className={`text-gray-500 text-lg font-bold`}>
        Observed Result of Air Quality
      </p>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="radialBar" />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

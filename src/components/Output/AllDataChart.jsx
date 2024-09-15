import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function AllDataChart({ data }) {
  const val = data.map((i) => parseInt(i.value));
  const name = data.map((i) => i.name);
  // console.log(name);
  const [series, setSeries] = useState(val);
  const [options, setOptions] = useState({
    chart: {
      height: 90,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        endAngle: 270,
        hollow: {
          size: "30%",
          background: "transparent",
        },
        barLabels: {
          enabled: true,
          useSeriesColors: true,
          offsetX: -18,
          fontSize: "12px",
          formatter: function (seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
        },
      },
    },
    colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
    labels: [...name],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  });
  return (
    <div className={``}>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={300}
        />
      </div>
    </div>
  );
}

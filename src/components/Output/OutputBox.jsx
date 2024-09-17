import AllDataChart from "./AllDataChart";
import MyApexCharts from "./MyApexCharts";

export default function OutputBox() {
  const model = [
    {
      name: "gnn",
      value: "75",
    },
    {
      name: "lstn",
      value: "25",
    },
    {
      name: "gnn+lstn",
      value: "65",
    },
  ];
  return (
    <div
      className={`lg:md:w-[100%] flex flex-col items-center justify-between pt-5 `}
    >
      {/* <AllDataChart data={model} /> */}
      <MyApexCharts/>
      <section></section>
    </div>
  );
}

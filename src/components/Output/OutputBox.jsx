import AllDataChart from "./AllDataChart";
import MonthSummaryCharts from "./MonthSummaryCharts";
import ResultHeading from "./ResultHeading";

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
      className={`lg:md:w-[100%] bg-slate-950 flex flex-col items-center justify-between pt-5 relative overflow-hidden`}
    >
      <ResultHeading />
      {/* <AllDataChart data={model} /> */}
      <section className={`w-full absolute bottom-0`}>
        <MonthSummaryCharts />
      </section>
    </div>
  );
}

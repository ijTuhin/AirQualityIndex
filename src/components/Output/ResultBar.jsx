import AllDataChart from "./AllDataChart";
import CalculatedData from "./CalculatedData";
import MonthSummaryCharts from "./MonthSummaryCharts";
import ObservedChart from "./ObservedChart";
import ResultHeading from "./ResultHeading";

export default function ResultBar() {
  const model = [
    {
      name: "cnn",
      value: "75",
    },
    {
      name: "cnn+lstn",
      value: "25",
    },
    {
      name: "gnn+lstn",
      value: "65",
    },
    {
      name: "cnn",
      value: "37",
    },
  ];
  return (
    <div
      className={`lg:md:w-[100%] bg-slate-950 flex flex-col items-center justify-between pt-5 relative overflow-hidden`}
    >
      <ResultHeading />
      <div className="flex flex-col items-center">
        <ObservedChart />
        <section className={`my-3 grid grid-cols-2 gap-3`}>
          {model.map((i, index) => {
            return <CalculatedData key={index} id={index} data={i} />;
          })}
        </section>
      </div>
      {/* <AllDataChart data={model} /> */}
      <section className={`w-full `}>
        <MonthSummaryCharts />
      </section>
    </div>
  );
}

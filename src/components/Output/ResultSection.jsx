import CalculatedData from "./CalculatedData";
import MonthSummaryCharts from "./MonthSummaryCharts";
import ObservedChart from "./ObservedChart";
import ResultHeading from "./ResultHeading";

export default function ResultSection() {
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
      name: "gnn",
      value: "37",
    },
  ];
  return (
    <div
      className={`lg:w-[100%] bg-slate-950 flex flex-col items-center justify-between lg:gap-y-5 md:gap-y-32 gap-y-[5.2rem] pt-5 relative lg:overflow-hidden overflow-visible`}
    >
      {/* To show selected location and time */}
      <ResultHeading />
      <div className="flex flex-col items-center">
        {/* Observed Data */}
        <ObservedChart />
        {/* Calculated Data by model */}
        <section className={`mb-3 w-full grid lg:grid-cols-2 grid-cols-2 md:grid-cols-4 gap-3`}>
          {model.map((i, index) => {
            return <CalculatedData key={index} id={index} data={i} />;
          })}
        </section>
      </div>
      {/* Monthly Summary */}
      <section className={`w-full relative bottom-12 lg:bottom-2 right-2`}>
        <p className="text-center text-lg text-blue-500 w-full absolute -top-1">
          Month Summary
        </p>
        <MonthSummaryCharts />
      </section>
    </div>
  );
}

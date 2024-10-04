import { useContextData } from "../Context/UseContext";
import CalculatedData from "./CalculatedData";
import CloseBtn from "./CloseBtn";
import MonthSummaryCharts from "./MonthSummaryCharts";
import ObservedChart from "./ObservedChart";
import ResultHeading from "./ResultHeading";

export default function ResultSection() {
  const { query } = useContextData();
  const model = [
    {
      name: "cnn",
      value: parseFloat(query.result["cnn"]),
    },
    {
      name: "cnn+lstm",
      value: parseFloat(query.result["cnn+lstm"]),
    },
    {
      name: "observed",
      value: parseFloat(query.result["observed"]),
    },
    {
      name: "gnn",
      value: parseFloat(query.result["gnn"]),
    },
    {
      name: "gnn+lstm",
      value: parseFloat(query.result["gnn+lstm"]),
    },
  ];
  return (
    <div
      className={`lg:w-[100%] bg-slate-950 relative lg:overflow-hidden overflow-visible`}
    >
      <CloseBtn />
      <div
        className={`w-full flex flex-col items-center justify-between lg:gap-y-5`}
      >
        {/* To show selected location and time */}
        <ResultHeading value={query.result.observed} />

        {/*  Output*/}
        <div className="flex flex-col items-center mt-10 mb-[5.2rem] lg:mb-0 lg:mt-0">
          {/* Observed Data */}
          <ObservedChart value={query.result.observed} />
          {/* Calculated Data by model */}
          <section
            className={`mb-3 w-full grid lg:grid-cols-2 grid-cols-2 md:grid-cols-4 gap-3`}
          >
            {model.map((i, index) => {
              if (index !== 0)
                return <CalculatedData key={index} id={index} data={i} />;
            })}
          </section>
        </div>

        {/* Monthly Summary */}
        <section className={`w-[100%] relative bottom-2 lg:left-3 md:left-3`}>
          <MonthSummaryCharts data={model} />
        </section>
      </div>
    </div>
  );
}

import { useContextData } from "../Context/UseContext";
import CalculatedData from "./CalculatedData";
import CloseBtn from "./CloseBtn";
import LoadingSpinner from "./LoadingSpinner";
import MonthSummaryCharts from "./MonthSummaryCharts";
import NotFound from "./NotFound";
import ObservedChart from "./ObservedChart";
import ResultHeading from "./ResultHeading";

export default function ResultSection() {
  const { query, loading } = useContextData();
  const model = [
    {
      name: "cnn",
      value: query?.result !== undefined ? parseFloat(query?.result["cnn"]) : 0,
    },
    {
      name: "cnn+lstm",
      value:
        query?.result !== undefined ? parseFloat(query?.result["cnn+lstm"]) : 0,
    },
    {
      name: "observed",
      value:
        query?.result !== undefined ? parseFloat(query?.result["observed"]) : 0,
    },
    {
      name: "gnn",
      value: query?.result !== undefined ? parseFloat(query?.result["gnn"]) : 0,
    },
    {
      name: "gnn+lstm",
      value:
        query?.result !== undefined ? parseFloat(query?.result["gnn+lstm"]) : 0,
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
        <ResultHeading value={query?.result?.observed} />
        {!loading ? (
          query?.result !== undefined ? (
            <>
              {/*  Output*/}
              <div className="flex flex-col items-center mt-10 mb-[5.2rem] lg:mb-0 lg:mt-0">
                {/* Observed Data */}
                <ObservedChart />
                {/* Calculated Data by model */}
                <section
                  className={`mb-3 w-full grid lg:grid-cols-2 grid-cols-2 md:grid-cols-4 gap-3`}
                >
                  {model.map((i, index) => {
                    if (index !== 2)
                      return <CalculatedData key={index} id={index} data={i} />;
                  })}
                </section>
              </div>

              {/* Monthly Summary */}
              <section
                className={`w-[100%] relative -bottom-3 lg:left-3 md:left-3`}
              >
                <MonthSummaryCharts data={model} />
              </section>
            </>
          ) : (
            <div className={`mt-32 lg:mt-44`}>
              <NotFound />
              {/* <LoadingSpinner /> */}
            </div>
          )
        ) : (
          <div className={`mt-32 lg:mt-44`}>
            <LoadingSpinner />
          </div>
        )}
      </div>
    </div>
  );
}

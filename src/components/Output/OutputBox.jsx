import AllDataChart from "./AllDataChart";

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
      className={`lg:md:w-1/2 flex flex-col items-center justify-between pt-5`}
    >
      <AllDataChart data={model} />
      <section>Charts</section>
    </div>
  );
}

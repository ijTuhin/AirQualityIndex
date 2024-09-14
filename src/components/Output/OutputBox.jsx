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
    <div className={`lg:md:w-1/2 flex flex-col items-center justify-between pt-16`}>
      <section className={`grid grid-cols-2 gap-y-5 gap-x-16`}>
        {model.map((i, index) => {
          return (
            <div key={index} className="relative size-40">
              <svg
                className="rotate-[135deg] size-full"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* <!-- Background Circle (Gauge) --> */}
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-purple-200 dark:text-neutral-700"
                  strokeWidth="1"
                  strokeDasharray="75 100"
                ></circle>

                {/* <!-- Gauge Progress --> */}
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-purple-600 dark:text-purple-500"
                  strokeWidth="2"
                  strokeDasharray={`${parseInt(i.value) * 0.75} 100`}
                ></circle>
              </svg>

              {/* <!-- Value Text --> */}
              <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="text-4xl font-bold text-purple-600 dark:text-purple-500">
                  {i.value}
                </span>
                <span className="text-purple-600 dark:text-purple-500 block">
                  {i.name}
                </span>
              </div>
            </div>
          );
        })}
      </section>
      <section>
        Charts
      </section>
    </div>
  );
}

export default function CalculatedData({ id, data }) {
  return (
    <div
      className={`lg:bg-gray-200 lg:border-0 border py-3.5 px-5 rounded-md flex lg:flex-row flex-col gap-x-5 lg:justify-between lg:items-start items-center w-full`}
    >
      <div className="w-full flex flex-col justify-between lg:items-start items-center lg:gap-y-1 gap-x-2">
        <p
          className={`lg:text-xl uppercase font-bold ${
            id === 1
              ? "text-red-500"
              : id === 2
              ? "text-cyan-600"
              : id === 3
              ? "text-light-green-600"
              : "text-orange-400"
          }`}
        >
          {data.name}
        </p>
        <p className={`text-gray-600 text-sm`}>
          ~ Result{" "}
          <span
            className={`text-base ${
              id === 1
                ? "text-red-500"
                : id === 2
                ? "text-cyan-600"
                : id === 3
                ? "text-light-green-600"
                : "text-orange-400"
            }`}
          >
            {data.value} %
          </span>
        </p>
      </div>
      <p className={`text-sm text-gray-500`}>
        Accuaracy <span>{(data.value * (45 / 100)).toFixed(2)} %</span>
      </p>
    </div>
  );
}

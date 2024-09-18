export default function CalculatedData({ id, data }) {
  console.log(data, id);
  //   let color = ""
  return (
    <div
      className={`bg-gray-200 py-3.5 px-5 rounded-md flex gap-x-5 justify-between items-start`}
    >
      <div className="space-y-2">
        <p
          className={`text-xl uppercase font-bold ${
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

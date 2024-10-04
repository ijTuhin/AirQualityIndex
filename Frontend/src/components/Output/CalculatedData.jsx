export default function CalculatedData({ id, data }) {
  return (
    <div
      className={`lg:bg-gray-200 lg:border-0 border py-3.5 px-5 rounded-md flex lg:flex-row flex-col gap-x-5 lg:justify-between lg:items-start items-center w-full`}
    >
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
      <p className={`text-gray-600 text-sm space-x-3`}>
        <span>~ Result</span>
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
          {data.value}
        </span>
      </p>
    </div>
  );
}

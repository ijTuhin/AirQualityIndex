export default function CalculatedData({ id, data }) {
  return (
    <div
      className={`lg:bg-gray-200 lg:border-0 border py-3.5 px-5 rounded-md flex lg:flex-row flex-col gap-x-5 lg:justify-between lg:items-start items-center w-full`}
    >
      <p
        className={`lg:text-xl uppercase font-bold ${
          id === 1
            ? "text-[#78716c]"
            : id === 4
            ? "text-lime-800"
            : id === 3
            ? "text-slate-400"
            : "text-green-500"
        }`}
      >
        {data.name}
      </p>
      <p className={`text-gray-600 text-sm space-x-3`}>
        <span>~ Result</span>
        <span
          className={`text-base ${
            data?.value > 100 ? "text-red-500" : "text-green-600"
          }`}
        >
          {data.value}
        </span>
      </p>
    </div>
  );
}

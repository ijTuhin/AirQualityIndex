export default function CalendarBtn({ i, setVal, setOption, option, val }) {
  return (
    <button
      onClick={() => {
        // set date
        if (option === 0) setVal({ ...val, d: i });
        // set month
        else if (option === 1) setVal({ ...val, m: i?.value });
        // set year
        else if (option === 2) setVal({ ...val, y: i });
        setOption(0); // toggling date section
      }}
      className={`p-1.5 text-xs rounded-lg ${
        i === val.d
          ? `font-bold text-gray-900 bg-[#ffd75e]`
          : i?.value === val.m
          ? `font-bold text-gray-900 bg-[#ffd75e]`
          : i === val.y
          ? `font-bold text-gray-900 bg-[#ffd75e]`
          : `hover:text-gray-900 hover:bg-[#ffd75e] hover:font-bold`
      }`}
    >
      {option === 1 ? i?.name : i}
    </button>
  );
}

import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useContextData } from "../Context/UseContext";
import { leap, months, years } from "../JSON/time";
import CalendarBtn from "./CalendarBtn";

export default function Calendar() {
  const { query, setQuery } = useContextData();
  const [month, setMonth] = useState(leap);
  const [val, setVal] = useState({
    y: "2019",
    m: "12",
    d: "31",
  });
  const [option, setOption] = useState(0);
  useEffect(() => {
    setQuery({ ...query, time: `${val.d}-${val.m}-${val.y}` });
    if (val.y % 4 !== 0) setMonth(months);
    else setMonth(leap);
  }, [val]);
  return (
    <div className={`lg:p-4 py-4 px-6 space-y-0`}>
      {/* Calendar Heading */}
      <section className={`flex justify-between items-center text-sm`}>
        <button
          onClick={() => setOption(0)}
          className={`lg:px-0 px-2 text-gray-400 flex items-center gap-x-3`}
        >
          <span className={`text-lg`}>
            <FaRegCalendarAlt />
          </span>
          <span className={`text-sm font-mono`}>{query.time}</span>
        </button>

        <div className={`flex items-center justify-center gap-x-0.5`}>
          <button
            onClick={() => setOption(1)}
            className={`border border-b-0 border-gray-800 px-3.5 py-2 text-[0.85rem] text-gray-500 rounded-tl-xl`}
          >
            {month[parseInt(val.m) - 1].name}
          </button>
          <button
            onClick={() => setOption(2)}
            className={`border border-b-0 border-gray-800 px-3.5 py-2 text-[0.85rem] text-gray-500 rounded-tr`}
          >
            {val.y}
          </button>
        </div>
      </section>
      {/* data section */}
      <section
        className={`rounded-b-md h-[12rem] w-full grid ${
          option === 0
            ? "border border-gray-800 p-2 grid-cols-7 text-xs gap-1.5"
            : option === 1
            ? "p-2.5 grid-cols-4 text-sm gap-2.5 border border-gray-800"
            : "border border-gray-800 p-2 grid-cols-4 text-sm gap-1.5"
        }`}
      >
        {option === 0
          ? month[parseInt(val.m) - 1].days.map((i, index) => {
              return (
                <CalendarBtn
                  setMonth={setMonth}
                  setVal={setVal}
                  val={val}
                  setOption={setOption}
                  option={option}
                  key={index}
                  i={i}
                />
              );
            })
          : option === 1
          ? month.map((i, index) => {
              return (
                <CalendarBtn
                  setMonth={setMonth}
                  setVal={setVal}
                  val={val}
                  setOption={setOption}
                  option={option}
                  key={index}
                  i={i}
                />
              );
            })
          : years.map((i, index) => {
              return (
                <CalendarBtn
                  setMonth={setMonth}
                  setVal={setVal}
                  val={val}
                  setOption={setOption}
                  option={option}
                  key={index}
                  i={i}
                />
              );
            })}
      </section>
    </div>
  );
}

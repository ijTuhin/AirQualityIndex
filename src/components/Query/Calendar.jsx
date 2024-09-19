import { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { years, months } from "../JSON/data";
import { useContextData } from "../Context/UseContext";

export default function Calendar() {
  const { query, setQuery } = useContextData();
  const [year, setYear] = useState(0);
  return (
    <div className={` shadow-lg`}>
      <section className="p-3.5">
        <div className={`flex justify-between items-center py-2 text-gray-600`}>
          <button
            className="hover:text-gray-400"
            onClick={() => {
              if (year !== 0) setYear(year - 1);
              setQuery({ ...query, year: years[year] });
            }}
          >
            <FaCaretLeft />
          </button>
          <p className="text-sm text-gray-500">{years[year]}</p>
          <button
            className="hover:text-gray-400"
            onClick={() => {
              if (year + 1 < years.length) setYear(year + 1);
              setQuery({ ...query, year: years[year] });
            }}
          >
            <FaCaretRight />
          </button>
        </div>
        <div className={`grid grid-cols-4 gap-2`}>
          {months.map((i, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setQuery({ ...query, month: i });
                }}
                className={`px-1.5 py-3.5 text-[0.65rem] uppercase hover:bg-[#ffd75e] text-gray-900 rounded-lg ${
                  query?.month === i
                    ? "bg-[#ffdf7e] rounded-lg m-0.5 text-[0.7rem]"
                    : "bg-[#e1e4e9]"
                }`}
              >
                {i}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}

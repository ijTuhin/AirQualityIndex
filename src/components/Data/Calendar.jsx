import React, { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { years } from "../JSON/data";

export default function Calendar({ query, setQuery }) {
  const [year, setYear] = useState(0);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className={`border`}>
      <h1
        className={`text-center py-2 border bg-blue-gray-300 text-gray-100 text-lg`}
      >
        Calendar
      </h1>
      <section className="p-1">
        <div className={`flex justify-between items-center py-2`}>
          <button
            onClick={() => {
              if (year !== 0) setYear(year - 1);
            }}
          >
            <FaCaretLeft />
          </button>
          <p className="text-sm">{years[year]}</p>
          <button
            onClick={() => {
              if (year + 1 < years.length) setYear(year + 1);
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
                //   setYear(i);
                //   setQuery({ ...query, year: i });
                }}
                className={`px-1.5 py-3.5 text-xs uppercase bg-blue-gray-50 hover:bg-blue-gray-100 border rounded-sm ${
                  year === index ? "bg-blue-gray-100" : "bg-blue-gray-50"
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

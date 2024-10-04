import { useEffect } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useContextData } from "../Context/UseContext";
import { months } from "../JSON/time";

export default function Calendar() {
  const { val, setVal } = useContextData();
  return (
    <div className={`lg:p-4 py-4 px-6 space-y-0`}>
      <div className={` shadow-lg`}>
        <section className="px-1.5">
          <div
            className={`flex justify-between items-center py-2 text-gray-600`}
          >
            <button className="hover:text-gray-400">
              <FaCaretLeft />
            </button>
            <p className="text-sm text-gray-500">2019</p>
            <button className="hover:text-gray-400">
              <FaCaretRight />
            </button>
          </div>
          <div className={`grid grid-cols-4 gap-2`}>
            {months.map((i, index) => {
              return (
                <button
                  key={i.value}
                  onClick={() => {
                    setVal(index);
                  }}
                  className={`px-1.5 py-3.5 text-[0.65rem] uppercase hover:bg-[#ffd75e] text-gray-900 rounded-lg ${
                    val === index
                      ? "bg-[#ffdf7e] rounded-lg m-0.5 text-[0.7rem]"
                      : "bg-[#e1e4e9]"
                  }`}
                >
                  {i.name}
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

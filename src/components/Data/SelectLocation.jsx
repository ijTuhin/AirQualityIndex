import { useState } from "react";
import { division, district } from "../JSON/data";

export default function SelectLocation({ query, setQuery, data }) {
  const [location, setLocation] = useState(data[0].division);
  console.log(data);
  return (
    <div className="hs-dropdown relative inline-flex w-96">
      <button
        id="hs-dropdown-default"
        type="button"
        className="hs-dropdown-toggle w-full py-3 px-4 inline-flex items-center justify-between gap-x-2 text-sm font-medium rounded-sm border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Dropdown"
      >
        {location}
        <svg
          className="hs-dropdown-open:rotate-180 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        className={`hs-dropdown-menu w-96 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded p-1 space-y-0.5 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full ${
          data?.length < 10 ? "" : "h-[26rem] overflow-y-scroll"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="hs-dropdown-default"
      >
        {data?.map((i, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                if (query?.type) {
                  setLocation(i.division);
                  setQuery({ ...query, division: i.division });
                } else {
                  setLocation(i.district);
                  setQuery({ ...query, district: i.district });
                }
              }}
              className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
            >
              {query?.type ? <>{i.division}</> : <>{i.district}</>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

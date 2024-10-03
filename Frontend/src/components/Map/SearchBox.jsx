import { useContextData } from "../Context/UseContext";

export default function SearchBox() {
  const { query, setQuery, handleLocationSearch } = useContextData();
  return (
    <div className={`w-full flex justify-center`}>
      <div
        className={`lg:h-fit lg:px-2 lg:py-3 py-1 lg:space-y-2 space-y-1 absolute z-[500] top-2 ${
          query?.location ? "w-full lg:w-[80%]" : "w-full lg:w-[60%]"
        }`}
      >
        <div className={`w-full flex justify-center lg:md:px-24 px-14`}>
          <div className="flex-grow items-center lg:gap-x-2 gap-x-1 flex">
            <div className="w-full">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <input
                  onChange={(e) =>
                    setQuery({ ...query, search: e.target.value })
                  }
                  name="location"
                  type="text"
                  className="w-full pl-10 pr-3 py-2.5 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow bg-white"
                  placeholder="Type here..."
                />
              </div>
            </div>
            <button
              onClick={() => handleLocationSearch(query.search)}
              className="rounded-md bg-slate-800 lg:py-2 py-2.5 px-4 border border-transparent text-center lg:text-sm text-xs text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className={`w-full flex justify-center`}>
      <div
        className={`lg:h-fit px-2 py-3 space-y-2 absolute z-[1300] top-2 ${
          query?.location ? "w-full lg:w-[80%]" : "w-full lg:w-[60%]"
        }`}
      >
        <div className={`w-full flex justify-center px-20`}>
          <div className="flex-grow items-center hidden gap-x-2 lg:flex">
            <div className="w-full">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <input
                  onChange={(e) =>
                    setQuery({ ...query, search: e.target.value })
                  }
                  name="location"
                  type="text"
                  className="w-full pl-10 pr-3 py-2.5 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow bg-white"
                  placeholder="Type here..."
                />
              </div>
            </div>
            <button
              onClick={() => handleLocationSearch(query.search)}
              className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div> */
}

import { useEffect, useState } from "react";
import SelectLocation from "./SelectLocation";
import { division, district, years, months } from "../JSON/data";
import Calendar from "./Calendar";
import { MdChevronRight } from "react-icons/md";

export default function SideBarMenu() {
  const [region, setRegion] = useState(division);
  const [query, setQuery] = useState({
    type: 0,
    year: years[0],
    month: months[0],
  });
  useEffect(() => {
    console.log(query);
  }, [query]);
  return (
    <section className={`lg:md:w-[25%] border-r p-5 space-y-5 bg-white`}>
      <Calendar query={query} setQuery={setQuery} />
      <div>
        <div className="hs-accordion-group">
          {/* Select Area Type */}
          <div
            className="hs-accordion active"
            id="hs-basic-no-arrow-heading-one"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
              aria-expanded="true"
              aria-controls="hs-basic-no-arrow-collapse-one"
            >
              <span>Select Area Type</span>
              <span>
                <MdChevronRight />
              </span>
            </button>
            <div
              id="hs-basic-no-arrow-collapse-one"
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
              role="region"
              aria-labelledby="hs-basic-no-arrow-heading-one"
            >
              <section className="flex flex-col">
                <div className="flex pb-1.5">
                  <input
                    type="radio"
                    name="hs-radio-vertical-group"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-radio-vertical-group-2"
                  />
                  <label
                    htmlFor="hs-radio-vertical-group-2"
                    className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                  >
                    Division
                  </label>
                </div>

                <div className="flex py-1.5">
                  <input
                    type="radio"
                    name="hs-radio-vertical-group"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-radio-vertical-group-3"
                  />
                  <label
                    htmlFor="hs-radio-vertical-group-3"
                    className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                  >
                    District
                  </label>
                </div>

                <div className="flex pt-1.5 pb-2.5">
                  <input
                    type="radio"
                    name="hs-radio-vertical-group"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-radio-vertical-group-3"
                  />
                  <label
                    htmlFor="hs-radio-vertical-group-4"
                    className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                  >
                    Upazilla
                  </label>
                </div>
              </section>
            </div>
          </div>
          <hr />
          {/* Select Location */}
          <div className="hs-accordion" id="hs-basic-no-arrow-heading-two">
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
              aria-expanded="false"
              aria-controls="hs-basic-no-arrow-collapse-two"
            >
              <span>Select Location</span>
              <span>
                <MdChevronRight />
              </span>
            </button>
            <div
              id="hs-basic-no-arrow-collapse-two"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              role="region"
              aria-labelledby="hs-basic-no-arrow-heading-two"
            >
              <div className={`h-96`}>
                {/* <SelectLocation
                  query={query}
                  setQuery={setQuery}
                  data={query.data}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

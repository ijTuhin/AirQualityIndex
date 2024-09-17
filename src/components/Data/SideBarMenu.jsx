import { useEffect, useState } from "react";
import SelectLocation from "./SelectLocation";
import { division, district, years, months } from "../JSON/data";
import Calendar from "./Calendar";
import { MdChevronRight } from "react-icons/md";
import { useContextData } from "../Context/UseContext";

export default function SideBarMenu() {
  const { query, setQuery } = useContextData();
  const [region, setRegion] = useState({
    data: division,
    type: null,
  });
  useEffect(() => {
    // console.log(query);
  }, [query, region]);
  const area = [
    {
      area: "division",
      id: "hs-radio-vertical-group-2",
    },
    {
      area: "district",
      id: "hs-radio-vertical-group-3",
    },
    {
      area: "upazilla",
      id: "hs-radio-vertical-group-4",
    },
  ];
  return (
    <section className={`lg:md:w-[20%] bg-[white] text-[#2C3E50]`}>
      <Calendar />
      <div className={`p-5 border-r`}>
        <div className="hs-accordion-group" data-hs-accordion-always-open="">
          {/* Select Area Type */}
          <div
            className="hs-accordion active"
            id="hs-basic-no-arrow-heading-one"
          >
            <button
              className="hs-accordion-toggle py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
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
                {area.map((val, i) => {
                  return (
                    <div key={val.id} className="flex pb-1.5">
                      <input
                        onClick={() =>
                          i === 0
                            ? setRegion({ type: i, data: division })
                            : i === 1
                            ? setRegion({ type: i, data: district })
                            : setRegion({ type: i, data: years })
                        }
                        type="radio"
                        name="hs-radio-vertical-group"
                        className="shrink-0 mt-0.5 border-gray-200 rounded-full text-[#87CEEB] focus:ring-[#87CEEB] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#87CEEB] dark:checked:border-[#87CEEB] dark:focus:ring-offset-gray-800"
                        id={val.id}
                      />
                      <label
                        htmlFor={val.id}
                        className="text-sm text-gray-500 ms-2 dark:text-neutral-400 capitalize"
                      >
                        {val.area}
                      </label>
                    </div>
                  );
                })}
              </section>
            </div>
          </div>
          <hr />
          {/* Select Location */}
          <div className="hs-accordion" id="hs-basic-no-arrow-heading-two">
            <button
              className={`hs-accordion-toggle hs-accordion-active:text-gray-700 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 ${
                region?.type === null ? "cursor-not-allowed" : ""
              }`}
              aria-expanded="false"
              aria-controls="hs-basic-no-arrow-collapse-two"
            >
              <span className={`capitalize`}>
                Select{" "}
                {region?.type === null ? "Location" : area[region.type].area}
              </span>
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
              <div className={`h-[19rem]`}>
                {region?.type !== null ? (
                  <SelectLocation region={region} />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useContextData } from "../Context/UseContext";
import { district, division, upazilla } from "../JSON/region";
import SelectLocation from "./SelectLocation";
import { MdChevronRight } from "react-icons/md";

export default function RegionQuerySection() {
  const { region, setRegion } = useContextData();
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
      area: "upazila",
      id: "hs-radio-vertical-group-4",
    },
  ];
  return (
    <div className={`px-5`}>
      <div className="hs-accordion-group" data-hs-accordion-always-open="">
        {/* Select Area Type */}
        <div className="hs-accordion active" id="hs-basic-no-arrow-heading-one">
          <button
            className="hs-accordion-toggle py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-700 hover:text-gray-600/70 focus:outline-none focus:text-gray-600 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
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
                          : setRegion({ type: i, data: upazilla })
                      }
                      type="radio"
                      defaultChecked={i === 0}
                      name="hs-radio-vertical-group"
                      className="shrink-0 mt-0.5 border-gray-200 rounded-full text-[#87CEEB] focus:ring-[#87CEEB] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#87CEEB] dark:checked:border-[#87CEEB] dark:focus:ring-offset-gray-600"
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

        {/* Select Location */}
        <div className="hs-accordion active" id="hs-basic-no-arrow-heading-one">
          <button
            className="hs-accordion-toggle py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-700 hover:text-gray-600/70 focus:outline-none focus:text-gray-600 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
            aria-expanded="true"
            aria-controls="hs-basic-no-arrow-collapse-one"
          >
            <span className={`capitalize`}>
              Select {area[region.type].area}
            </span>
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
            <div className={`lg:h-[19rem] h-[11.25rem]`}>
              <SelectLocation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

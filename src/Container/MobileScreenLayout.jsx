import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import Map from "../components/Map/Map";
import LocationSection from "../components/Query/LocationSection";
import ResultSection from "../components/Output/ResultSection";
import Calendar from "../components/Query/Calendar";
import { useContextData } from "../components/Context/UseContext";

export default function MobileScreenLayout() {
  const { content, setContent } = useContextData();
  return (
    <div className={`w-screen h-full lg:hidden flex flex-col gap-y-3`}>
      <section>
        {content === 0 ? (
          <ResultSection />
        ) : (
          <section>
            <div className={`grid grid-cols-2 px-8 gap-x-3 pt-5 pb-2`}>
              {/* Open Calendar */}
              <button
                onClick={() => {
                  if (content === 3) setContent(1);
                  else setContent(3);
                }}
                className={`py-3 text-center text-sm rounded-lg text-green-600 border-2 border-green-600 hover:text-gray-100 ${
                  content === 3
                    ? "hover:bg-green-600 bg-green-700"
                    : "hover:bg-green-700"
                }`}
              >
                Choose Date
              </button>
              {/* Open Location Query */}
              <button
                onClick={() => {
                  if (content === 4) setContent(1);
                  else setContent(4);
                }}
                className={`py-3 text-center text-sm rounded-lg text-green-600 border-2 border-green-600 hover:text-gray-100 ${
                  content === 4
                    ? "hover:bg-green-600 bg-green-700"
                    : "hover:bg-green-700"
                }`}
              >
                Search Location
              </button>
            </div>
            {content !== 1 ? (
              <div className={`h-fit px-3`}>
                {content === 3 ? (
                  <Calendar />
                ) : content === 4 ? (
                  <LocationSection />
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
          </section>
        )}
      </section>
      <Map />
    </div>
  );
}

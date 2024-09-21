import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import Map from "../components/Map/Map";
import LocationSection from "../components/Query/LocationSection";
import Calendar from "../components/Query/Calendar";

export default function MobileScreenLayout() {
  const [content, setContent] = useState(0);
  return (
    <div className={`w-screen h-full lg:hidden flex flex-col gap-y-3`}>
      {/* <Calendar /> */}
      {/* <section className={`flex justify-between px-3 pt-3`}>
        <button className={`text-center`}>Choose Date</button>
        <button className={`text-2xl`}>
          <FaRegCalendarAlt />
        </button>
      </section> */}
      {/* Map */}
      <section>
        <div className={`grid grid-cols-2 px-8 gap-x-3 pt-5 pb-2`}>
          <button
            onClick={() => setContent(1)}
            className={`px-10 py-5 rounded-lg text-green-600 border-2 border-green-600 hover:bg-green-700 hover:text-gray-100`}
          >
            Choose Date
          </button>
          <button
            onClick={() => setContent(2)}
            className={`px-10 py-5 rounded-lg text-green-600 border-2 border-green-600 hover:bg-green-700 hover:text-gray-100`}
          >
            Search Location
          </button>
        </div>
        {content ? (
          <div className={`h-fit px-3`}>
            {content === 1 ? <Calendar /> : <LocationSection />}
          </div>
        ) : (
          <></>
        )}
      </section>
      <Map />
      {/* Search Options */}
      {/* <div className={`flex justify-center items-center gap-x-2`}>
        <span className={`border-b w-1/4 border-gray-700/80`}></span>
        <p className="text-sm">or</p>
        <span className={`border-b w-1/4 border-gray-700/80`}></span>
      </div>
      <section className={`flex justify-center px-3 pb-5`}>
        <button
          className={`px-10 py-2 rounded-full bg-green-600 text-gray-900 hover:bg-green-700`}
        >
          Search Location
        </button>
      </section> */}
      {/* <LocationSection /> */}
    </div>
  );
}

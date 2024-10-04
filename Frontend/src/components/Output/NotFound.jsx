import React from "react";
import { MdBrokenImage } from "react-icons/md";
import { MdOutlineLocationOff } from "react-icons/md";
import { useContextData } from "../Context/UseContext";

export default function NotFound() {
  const { setContent, setQuery, query, setLoading } = useContextData();
  return (
    <div className={`flex flex-col items-center space-y-3.5 lg:px-0 px-10`}>
      <p className={`lg:text-6xl text-5xl opacity-50 text-stone-500 lg:flex hidden`}>
        <MdOutlineLocationOff />
      </p>
      <p
        className={`lg:text-4xl text-3xl font-bold opacity-50 text-center flex lg:flex-row flex-col`}
      >
        <span>Sorry!</span> <span>No Result Found</span>
      </p>
      <p className={`opacity-80 text-sm text-center`}>
        It looks like the location is outside of Bangladesh.{" "}
        <button
          className={`hover:underline hover:underline-offset-2`}
          onClick={() => {
            setContent(1);
            setLoading(false);
            setQuery({ ...query, location: null });
          }}
        >
          {" "}
          Please Try Again!
        </button>
      </p>
    </div>
  );
}

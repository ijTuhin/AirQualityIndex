import { FaLocationDot } from "react-icons/fa6";
import { useContextData } from "../Context/UseContext";
import { months } from "../JSON/time";

export default function ResultHeading({ value }) {
  const { query, val } = useContextData();
  return (
    <div
      className={`flex items-start justify-between w-full lg:px-2 pl-2.5 pr-5 text-gray-600`}
    >
      <div className={`flex items-start gap-x-2`}>
        <p
          className={`lg:text-5xl text-[2.35rem] ${
            parseFloat(query?.result?.observed) < 100.0 ? "text-green-600" : "text-red-600"
          }`}
        >
          <FaLocationDot />
        </p>
        <p className={`text-sm w-56`}>{query?.location}</p>
      </div>
      <p className="text-sm">
        Date: <span>2019-{months[val].value}-01</span>
      </p>
    </div>
  );
}

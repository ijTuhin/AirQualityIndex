import { FaLocationDot } from "react-icons/fa6";
import { useContextData } from "../Context/UseContext";

export default function ResultHeading() {
  const { query } = useContextData();
  return (
    <div className={`flex items-start justify-between w-full lg:px-2 pl-2.5 pr-5 text-gray-600`}>
      <div className={`flex items-start gap-x-2`}>
        <p className={`lg:text-5xl text-[2.35rem] text-green-600`}>
          <FaLocationDot />
        </p>
        <p className={`text-sm w-56`}>{query?.location}Pabna, Pabna Sadar Upazila, Pabna District, 6600, Bangladesh</p>
      </div>
      <p className="text-sm">
        Date: <span>{query.time}</span>
      </p>
    </div>
  );
}

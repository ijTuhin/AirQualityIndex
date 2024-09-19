import { FaLocationDot } from "react-icons/fa6";
import { useContextData } from "../Context/UseContext";

export default function ResultHeading() {
  const { query } = useContextData();
  return (
    <div className={`flex items-start justify-between w-full px-2`}>
      <div className={`flex items-start gap-x-2`}>
        <p className={`text-5xl text-green-600`}>
          <FaLocationDot />
        </p>
        <p className={`text-sm w-56`}>{query?.location}</p>
      </div>
      <p className="text-sm">
        Date: <span>01-01-2000</span>
      </p>
    </div>
  );
}

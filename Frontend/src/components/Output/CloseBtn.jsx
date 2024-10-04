import { HiChevronDoubleLeft } from "react-icons/hi";
import { useContextData } from "../Context/UseContext";

export default function CloseBtn() {
  const { setContent, setQuery, query, setLoading } = useContextData();
  return (
    <div className={`w-full justify-start`}>
      <button
        onClick={() => {
          setContent(1);
          setLoading(false);
          setQuery({ ...query, location: null });
        }}
        className={`w-full flex items-center gap-x-1 px-3 py-2 mb-2 text-gray-200 hover:bg-gray-700 active:bg-gray-700`}
      >
        <span>
          <HiChevronDoubleLeft />
        </span>
        <span className={`text-sm`}>Close</span>
      </button>
    </div>
  );
}

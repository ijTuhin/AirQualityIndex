import SelectLocation from "./SelectLocation";
import { division, district } from "../JSON/region";
import Calendar from "./Calendar";
import { MdChevronRight } from "react-icons/md";
import { useContextData } from "../Context/UseContext";
import LocationSection from "./LocationSection";

export default function SideBarMenu() {
  const { query, region, setRegion } = useContextData();
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
    <section
      className={`${
        query?.location ? "lg:w-[37%]" : "lg:w-[25%]"
      } bg-slate-950/95`}
    >
      <Calendar />
      <LocationSection/>
    </section>
  );
}

import Calendar from "./Calendar";
import { useContextData } from "../Context/UseContext";
import RegionQuerySection from "./RegionQuerySection";

export default function SideBarMenu() {
  const { query } = useContextData();
  return (
    <section
      className={`${
        query?.location
          ? "lg:w-[37%]"
          : "lg:w-[25%]"
      } bg-slate-950/95`}
    >
      <Calendar />
      <RegionQuerySection />
    </section>
  );
}

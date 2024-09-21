import SideBarMenu from "../components/Query/SideBarMenu";
import Map from "../components/Map/Map";
import AboutUsModal from "../components/About/AboutUsModal";
import { useContextData } from "../components/Context/UseContext";
import ResultSection from "../components/Output/ResultSection";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function ProjectContainer() {
  const { query } = useContextData();
  return (
    <main
      className={`w-screen lg:md:h-screen h-screen flex flex-col items-center text-[#4F4F4F] bg-slate-950/95`}
    >
      {/* Heading */}
      <nav
        className={`py-2.5 px-5 flex items-center bg-[#272832] text-[#F8F9FA] w-full justify-between shadow-lg`}
      >
        <h3 className={`text-lg playwrite-cu-ba text-cyan-300/80`}>
          Air Quality Index
        </h3>
        <AboutUsModal />
      </nav>
      {/* Main Large Screen Body */}
      <div className={`w-full h-full lg:flex flex-row hidden`}>
        <SideBarMenu />
        <Map />
        {query?.location ? <ResultSection /> : <></>}
      </div>

      {/* Main Mobile Screen Body */}
      <div className={`w-full h-full lg:hidden flex flex-col gap-y-3`}>
        {/* <Calendar /> */}
        <section className={`flex justify-between px-3 pt-3`}>
          <button className={`text-center`}>Choose Date</button>
          <button className={`text-2xl`}>
            <FaRegCalendarAlt />
          </button>
        </section>
        {/* Map */}
        <Map />
        {/* Search Options */}
        <div className={`flex justify-center items-center gap-x-2`}>
          <span className={`border-b w-1/4 border-gray-700/80`}></span>
          <p>OR</p>
          <span className={`border-b w-1/4 border-gray-700/80`}></span>
        </div>
        <section className={`flex justify-center px-3 pb-5`}>
          <button
            className={`px-10 py-2 rounded-full bg-green-600 text-gray-900 hover:bg-green-700`}
          >
            Search Location
          </button>
        </section>
      </div>
    </main>
  );
}

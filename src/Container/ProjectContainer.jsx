import SideBarMenu from "../components/Query/SideBarMenu";
import Map from "../components/Map/Map";
import AboutUsModal from "../components/About/AboutUsModal";
import { useContextData } from "../components/Context/UseContext";
import ResultSection from "../components/Output/ResultSection";

export default function ProjectContainer() {
  const { query } = useContextData();
  return (
    <main
      className={`w-screen lg:h-screen flex flex-col items-center bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px] text-[#4F4F4F]`}
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
      {/* Main Body */}
      <div className={`z-20 w-full h-full grid md:lg:flex grid-cols-1`}>
        <SideBarMenu />
        <Map />
        {query?.location ? <ResultSection /> : <></>}
      </div>
    </main>
  );
}

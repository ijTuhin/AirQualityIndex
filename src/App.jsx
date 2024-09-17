import { useEffect } from "react";
import MapBox from "./components/Map/MapBox";
import "semantic-ui-css/semantic.min.css";
import SideBarMenu from "./components/Data/SideBarMenu";
import OutputBox from "./components/Output/OutputBox";
import { ProviderComponent } from "./components/Context/UseContext";
import { CiCircleQuestion } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";

function App() {
  /* For Preline Dropdown */
  useEffect(() => {
    if (
      window.HSStaticMethods &&
      typeof window.HSStaticMethods.autoInit === "function"
    ) {
      window.HSStaticMethods.autoInit();
    }
  }, []);
  /* ===================== */
  return (
    <ProviderComponent>
      <main
        className={`w-screen lg:h-screen flex flex-col items-center bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px] text-[#4F4F4F]`}
      >
        <nav
          className={`py-2.5 px-5 flex items-center bg-[#2C2E43] text-[#F8F9FA] w-full justify-between`}
        >
          <h3 className={`text-lg`}>Air Quality Index</h3>
          <button className={`flex items-center justify-center gap-x-1.5 text-sm`}>
            <span className="text-slate-300">About Us</span>
            <span className={`mb-0.5`}>
              <BsQuestionCircle />
            </span>
          </button>
        </nav>
        <div className={`z-20 w-full h-full grid md:lg:flex grid-cols-1`}>
          {/* <DataBox /> */}
          <SideBarMenu />
          <MapBox />
          {/* <OutputBox /> Use Context to toggle ouput view by state control */}
        </div>
      </main>
    </ProviderComponent>
  );
}

export default App;

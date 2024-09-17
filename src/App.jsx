import { useEffect, useState } from "react";
import MapBox from "./components/Map/MapBox";
import "semantic-ui-css/semantic.min.css";
import SideBarMenu from "./components/Data/SideBarMenu";
import OutputBox from "./components/Output/OutputBox";
import { ProviderComponent } from "./components/Context/UseContext";
import "./index.css";
import AboutUsModal from "./About/AboutUsModal";
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
          className={`py-2.5 px-5 flex items-center bg-[#272832] text-[#F8F9FA] w-full justify-between`}
        >
          <h3 className={`text-lg playwrite-cu-ba text-cyan-300/80`}>
            Air Quality Index
          </h3>
          <AboutUsModal />
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

import { useEffect } from "react";
import DataBox from "./components/Data/DataBox";
import MapBox from "./components/Map/MapBox";
import "semantic-ui-css/semantic.min.css";
import SideBarMenu from "./components/Data/SideBarMenu";
import OutputBox from "./components/Output/OutputBox";

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
    <main
      className={`w-screen lg:h-screen flex flex-col items-center bg-gray-50 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px]`}
    >
      <nav
        className={`py-2.5 px-5 flex items-center bg-black text-gray-500 w-full justify-between`}
      >
        <h3 className={`text-lg text-cyan-500`}>Air Quality Index</h3>
        <button>About Us</button>
      </nav>
      <div className={`z-20 w-full h-full grid md:lg:flex grid-cols-1`}>
        {/* <DataBox /> */}
        <SideBarMenu />
        <MapBox />
        {/* <OutputBox /> Use Context to toggle ouput view by state control */}
      </div>
    </main>
  );
}

export default App;

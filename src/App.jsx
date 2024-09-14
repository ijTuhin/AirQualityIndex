import { useEffect } from "react";
import DataBox from "./components/Data/DataBox";
import MapBox from "./components/Map/MapBox";
import 'semantic-ui-css/semantic.min.css'
import SideBarMenu from "./components/Data/SideBarMenu";

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
    <main className={`w-screen lg:h-screen flex justify-center py-3.5`}>
      <div
        className={`w-full h-full grid md:lg:flex grid-cols-1`}
      >
        {/* <DataBox /> */}
        <SideBarMenu/>
        <MapBox />
      </div>
    </main>
  );
}

export default App;

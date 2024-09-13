import { useEffect } from "react";
import DataBox from "./components/Data/DataBox";
import MapBox from "./components/Map/MapBox";
import 'semantic-ui-css/semantic.min.css'

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
    <main className={`w-screen lg:h-screen flex justify-center p-10`}>
      <div
        className={`w-full h-full grid md:lg:grid-cols-2 grid-cols-1 gap-x-8`}
      >
        <DataBox />
        <MapBox />
      </div>
    </main>
  );
}

export default App;

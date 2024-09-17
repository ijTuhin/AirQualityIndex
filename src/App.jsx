import { useEffect } from "react";
import "preline/preline";
import "semantic-ui-css/semantic.min.css";
import { ProviderComponent } from "./components/Context/UseContext";
import "./index.css";
import ProjectContainer from "./Container/ProjectContainer";
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
      <ProjectContainer />
    </ProviderComponent>
  );
}

export default App;

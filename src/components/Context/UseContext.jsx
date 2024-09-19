import { createContext, useContext, useEffect, useState } from "react";
import { division, months, years } from "../JSON/data";

const Context = createContext();
const ProviderComponent = ({ children }) => {
  const [query, setQuery] = useState({
    year: years[0],
    month: months[0],
    coordinates: [24.0, 90.3563],
  });
  const [region, setRegion] = useState({
    data: division,
    type: null,
  });
  const [position, setPosition] = useState(division.map((i) => i.coordinates));
  useEffect(() => {
    console.log(query);
  }, [query]);
  return (
    <Context.Provider
      value={{ query, setQuery, region, setRegion, position, setPosition }}
    >
      {children}
    </Context.Provider>
  );
};
const useContextData = () => {
  return useContext(Context);
};
export { ProviderComponent, useContextData };

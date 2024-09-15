import { createContext, useContext, useState } from "react";
import { months, years } from "../JSON/data";

const Context = createContext();
const ProviderComponent = ({ children }) => {
  const [query, setQuery] = useState({
    year: years[0],
    month: months[0],
    coordinates: [24.0, 90.3563],
  });
  return (
    <Context.Provider value={{ query, setQuery }}>{children}</Context.Provider>
  );
};
const useContextData = () => {
  return useContext(Context);
};
export { ProviderComponent, useContextData };

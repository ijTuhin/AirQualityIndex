import React from "react";
import { useContextData } from "../components/Context/UseContext";
import SideBarMenu from "../components/Query/SideBarMenu";
import Map from "../components/Map/Map";
import ResultSection from "../components/Output/ResultSection";

export default function LargeScreenLayout() {
  const { query } = useContextData();
  return (
    <div className={`w-full h-full lg:flex flex-row hidden`}>
      <SideBarMenu />
      <Map />
      {query?.result && query?.location ? <ResultSection /> : <></>}
    </div>
  );
}

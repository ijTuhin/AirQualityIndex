import SelectType from "./SelectType";
import SelectYear from "./SelectYear";
import SelectLocation from "./SelectLocation";
import DataTable from "./DataTable";
import { useEffect, useState } from "react";
import { division, district } from "../JSON/data";

export default function DataBox() {
  const [query, setQuery] = useState({
    type: 1,
    data: division,
  });
  useEffect(() => {
    // console.log(query);
  }, [query]);
  return (
    <section className={`flex flex-col items-center justify-start gap-y-5`}>
      <h1 className="text-3xl font-bold font-serif text-blue-700 my-3">
        Air Quality Index
      </h1>
      <div className={`w-full flex gap-x-2`}>
        <SelectType query={query} setQuery={setQuery} />
        <SelectLocation query={query} setQuery={setQuery} data={query.data} />
        <SelectYear query={query} setQuery={setQuery} />
      </div>
      <div className={`w-full px-12`}>
        <DataTable />
      </div>
    </section>
  );
}

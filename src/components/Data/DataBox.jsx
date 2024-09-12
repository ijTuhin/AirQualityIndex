import SelectType from "./SelectType";
import SelectYear from "./SelectYear";
import SelectLocation from "./SelectLocation";
import DataTable from "./DataTable";

export default function DataBox() {
  return (
    <section className={`flex flex-col items-center justify-start gap-y-5`}>
      <h1 className="text-3xl font-bold font-serif text-blue-700 my-3">
        Air Quality Index
      </h1>
      <div className={`space-x-2`}>
        <SelectType />
        <SelectLocation />
        <SelectYear />
      </div>
      <div className={`w-full px-12`}>
        <DataTable />
      </div>
    </section>
  );
}

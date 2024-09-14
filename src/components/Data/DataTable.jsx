import { CardGroup } from "semantic-ui-react";

export default function DataTable({ data }) {
  const items = [
    {
      header: "Project Report - April",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      meta: "ROI: 30%",
    },
    {
      header: "Project Report - May",
      description:
        "Bring to the table win-win survival strategies to ensure proactive domination.",
      meta: "ROI: 34%",
    },
  ];
  return (
    <section className={`flex flex-col items-center gap-y-5`}>
      <h1>
        Result of {data.location} {data.type ? "Division" : "District"} ||{" "}
        {data.coordinates}
      </h1>
      <CardGroup centered items={items} />
    </section>
  );
}

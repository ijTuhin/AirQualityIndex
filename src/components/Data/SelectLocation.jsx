import { Dropdown } from "semantic-ui-react";
import { district, division } from "../JSON/data";

export default function SelectLocation({ query, setQuery, data }) {
  const options = data.map((val, index) => ({
    key: index,
    text: query?.type ? val.division : val.district,
    value: query?.type ? val.division : val.district,
  }));
  return (
    <Dropdown
      className={`h-[2.895rem] flex items-center`}
      onChange={(e) => {
        if (query?.type) {
          setQuery({
            ...query,
            division: e.target.textContent,
            district: null,
            location: data.find((i) => i.division === e.target.textContent),
          });
        } else {
          setQuery({
            ...query,
            district: e.target.textContent,
            division: null,
            location: data.find((i) => i.district === e.target.textContent),
          });
        }
      }}
      placeholder="Location"
      fluid
      search
      selection
      options={options}
    />
  );
}

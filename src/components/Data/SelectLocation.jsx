import { Dropdown } from "semantic-ui-react";

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
        setQuery({
          ...query,
          location: e.target.textContent,
          coordinates: data.filter(
            (i) =>
              (i.division === e.target.textContent && query?.type) ||
              (query?.type === 0 && i.district === e.target.textContent)
          )[0].coordinates,
        });
      }}
      placeholder="Location"
      fluid
      search
      selection
      options={options}
    />
  );
}

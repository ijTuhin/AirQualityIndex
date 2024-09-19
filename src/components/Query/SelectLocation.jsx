import { Dropdown } from "semantic-ui-react";
import { useContextData } from "../Context/UseContext";

export default function SelectLocation({ region }) {
  const { query, setQuery } = useContextData();
  const options = region?.data?.map((val, index) => ({
    key: index,
    text: region?.type === 0 ? val.division : val.district,
    value: region?.type === 0 ? val.division : val.district,
  }));
  return (
    <Dropdown
      className={`flex items-center active:outline-none`}
      onChange={(e) => {
        setQuery({
          ...query,
          location: e.target.textContent,
          coordinates: region?.data?.filter(
            (i) =>
              (i.division === e.target.textContent && region?.type === 0) ||
              (region?.type === 1 && i.district === e.target.textContent)
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

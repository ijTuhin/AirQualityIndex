import { Dropdown } from "semantic-ui-react";
import { useContextData } from "../Context/UseContext";

export default function SelectLocation({ region }) {
  const { query, setQuery, handleLocationSearch } = useContextData();

  /* For Semantic Dropdown Data */
  const options = region?.data?.map((val, index) => ({
    key: index,
    text: region?.type === 0 ? val.division : val.district, // set dropdown value according to selected region
    value: region?.type === 0 ? val.division : val.district,
  }));
  return (
    <Dropdown
      className={`flex items-center active:outline-none`}
      onChange={(e) => handleLocationSearch(e.target.textContent)}
      placeholder="Location"
      fluid
      search
      selection
      options={options}
    />
  );
}

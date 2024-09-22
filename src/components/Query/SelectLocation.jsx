import { Dropdown } from "semantic-ui-react";
import { useContextData } from "../Context/UseContext";

export default function SelectLocation() {
  const { handleLocationSearch, region } = useContextData();

  /* For Semantic Dropdown Data */
  const options = region?.data?.map((val, index) => ({
    key: index,
    text: val.name.split(" ")[0],
    value: val.name,
  }));
  return (
    <Dropdown
      className={`flex items-center active:outline-none`}
      onChange={(e, data) => handleLocationSearch(data.value)}
      placeholder="Location"
      fluid
      search
      selection
      options={options}
    />
  );
}

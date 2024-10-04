import { useState } from "react";
import { useContextData } from "../Context/UseContext";
import { Marker, Popup } from "react-leaflet";
import axios from "axios";
export default function LocationPointer({ getLocationName }) {
  const { position, query } = useContextData();
  const [hoveredValue, setHoveredValue] = useState(null);

  const getDataFromDBonHover = async (value) => {
    const url = `http://localhost:3001/${value.time}?lat=${value.lat}&long=${value.long}`;
    await axios
      .get(url)
      .then((res) => {
        setHoveredValue(res.data.observed);
        value.event.target.openPopup();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {position.map((i, index) => {
        return (
          <Marker
            key={index}
            position={i}
            eventHandlers={{
              mouseover: (event) => {
                getDataFromDBonHover({
                  time: query.time,
                  lat: i[0],
                  long: i[1],
                  event
                });
              }, // show observed value on hover
              click: (e) => {
                const { lat, lng } = e.latlng;
                getLocationName(lat, lng); // send latitude longtitude on click as props to fetch map location
              },
            }}
          >
            <Popup>
              <p
                className={`flex flex-col justify-center items-center gap-y-1`}
              >
                <span>Observed Value</span>
                <span className={` text-green-500`}>{hoveredValue}</span>
              </p>
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}

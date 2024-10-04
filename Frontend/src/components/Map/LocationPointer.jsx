import { useContextData } from "../Context/UseContext";
import { Marker, Popup } from "react-leaflet";
export default function LocationPointer({ getLocationName }) {
  const { position } = useContextData();

  return (
    <>
      {position.map((i, index) => {
        return (
          <Marker
            key={index}
            position={i}
            eventHandlers={{
              mouseover: (event) => event.target.openPopup(), // show observed value on hover
              click: (e) => {
                const { lat, lng } = e.latlng;
                getLocationName(lat, lng); // send latitude longtitude on click as props to fetch map location
              },
            }}
          >
            <Popup>
              A marker at the given location! <br /> Latitude: {i[0]},
              Longitude: {i[1]}.
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}

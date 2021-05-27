import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import LogoutButton from "atoms/LogoutButton";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function MapView() {
  const [coords] = useState({
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  });

  return (
    <div style={{ height: "500px", width: "500px" }}>
      <LogoutButton />

      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coords.center}
        defaultZoom={coords.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

export default MapView;

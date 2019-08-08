import React, { useState } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker
} from "react-google-maps";
import Autocomplete from "react-google-autocomplete";

const Map = props => {
  const [position, setPosition] = useState(props.center);

  const onMarkerDragEnd = event => {
    const newLat = event.latLng.lat();
    const newLng = event.latLng.lng();
    setPosition({
      lat: newLat,
      lng: newLng
    });
  };

  const onPlaceSelected = place => {
    console.log("place =>", place);
    const latValue = place.geometry.location.lat();
    const lngValue = place.geometry.location.lng();

    setPosition({
      lat: latValue,
      lng: lngValue
    });
  };

  const AsyncMap = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap
        google={props.google}
        defaultZoom={props.zoom}
        defaultCenter={{
          lat: position.lat,
          lng: position.lng
        }}
      >
        {/*Marker*/}
        <Marker
          google={props.google}
          name={"Dolores park"}
          draggable={true}
          onDragEnd={onMarkerDragEnd}
          position={{
            lat: position.lat,
            lng: position.lng
          }}
        />
        <Marker />
        {/* For Auto complete Search Box */}
        <Autocomplete
          style={{
            width: "100%",
            height: "40px",
            paddingLeft: "16px",
            marginTop: "2px",
            marginBottom: "500px"
          }}
          onPlaceSelected={onPlaceSelected}
          types={["(regions)"]}
        />
      </GoogleMap>
    ))
  );

  return (
    <div>
      <AsyncMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: props.height }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default Map;

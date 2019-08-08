import React from "react";
import Map from "./Map";

const Home = props => {
  return (
    <div style={{ margin: "100px" }}>
      <Map
        google={props.google}
        center={{ lat: 53.3605185, lng: -6.2608178 }}
        height="300px"
        zoom={10}
      />
    </div>
  );
};

export default Home;

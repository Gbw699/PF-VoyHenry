import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function MapComponent({ country, province, city, address }) {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address},${city},${province},${country}&key=AIzaSyCCIEOtTNwqYZEw4Dxt_GK3ZLVcCzun9vw`
    )
      .then((response) => response.json())
      .then((data) => {
        const { lat, lng } = data.results[0].geometry.location;
        setCoordinates({ lat, lng });
      });
  }, [city, address]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCCIEOtTNwqYZEw4Dxt_GK3ZLVcCzun9vw">
      {coordinates && (
        <GoogleMap
          mapContainerStyle={{ height: "400px", width: "100%" }}
          center={coordinates}
          zoom={17}
        ></GoogleMap>
      )}
    </LoadScript>
  );
}

import React, { useEffect, useState } from "react";

const Map = () => {
  const [mapUrl, setMapUrl] = useState(
    "https://maps.google.com/maps?q=&t=&z=15&ie=UTF8&iwloc=&output=embed"
  );

  const [position, setPosition] = useState(null);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition(position);
        setMapUrl(
          "https://maps.google.com/maps?q=" +
            position.coords.latitude +
            ", " +
            position.coords.longitude +
            "&t=&z=15&ie=UTF8&iwloc=&output=embed"
        );
      },
      (error) => {
        console.error(error);
        setError(error);
      }
    );
  }, []);

  return (
    <div>
      {error ? (
        <>
          <p>{error.message}</p>
          <iframe
            title="Google Maps"
            frameBorder="0"
            style={{ border: 0, height: "100vh" }}
            src={mapUrl}
            allowFullScreen
            width="100%"
          />
        </>
      ) : (
        <>
          {position ? (
            <iframe
              title="Google Maps"
              frameBorder="0"
              style={{ border: 0, height: "100vh" }}
              src={mapUrl}
              allowFullScreen
              width="100%"
            />
          ) : (
            <p>Loading position...</p>
          )}
        </>
      )}
    </div>
  );
};

export default Map;

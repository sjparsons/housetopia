import React from 'react';

const getMapUrl = ({mode, apiKey, params}) => 
    `https://www.google.com/maps/embed/v1/${mode}?key=${apiKey}&${params}`;

const Map = ({width, height, ...mapProps}) => (
  <iframe
    title="Map"
    width={width|| 450}
    height={height || 250}
    frameBorder={0} 
    style={{ border:0 }}
    src={ getMapUrl(mapProps) }
    allowFullScreen={true} 
  />
);

export default Map;
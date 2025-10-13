// src/components/MapEmbed.jsx
import React from "react";

export default function MapEmbed({ address, latLng, zoom = 15, height = 360 }) {
  const query = address ? encodeURIComponent(address) : latLng ? latLng : "";
  const src = `https://www.google.com/maps?q=${query}&z=${zoom}&output=embed`;

  return (
    <div style={{ maxWidth: "100%", height, borderRadius: 12, overflow: "hidden" }}>
      <iframe
        title="Location map"
        src={src}
        width="100%"
        height="100%"
        frameBorder="0"            // React prop name
        allowFullScreen            // React boolean prop
        referrerPolicy="no-referrer-when-downgrade"
        tabIndex={0}               // React prop name
        style={{ border: 0 }}      // style must be object
      />
    </div>
  );
}

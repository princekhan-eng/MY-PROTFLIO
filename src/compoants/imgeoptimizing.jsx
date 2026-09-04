import { useState } from "react";

export default function OptimizedImg({ src, alt, className = "" }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`optimized-img-wrapper ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 0.7s ease",
          opacity: loaded ? 1 : 0,
        }}
      />
    </div>
  );
}
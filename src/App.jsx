import React, { useEffect, useRef } from "react";
import "./App.css";

const Soler_system = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    for (let i = 0; i < 1000; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.position = "absolute";
      star.style.width = ".1px";
      star.style.height = ".1px";
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      container.appendChild(star);
    }
  }, []);

  return (
    
    <div ref={containerRef} className="body" >
      <div className="container">
        <div className="sun">
          <img src="/assets/sun.png" alt="sun" />
        </div>
        <div className="mercury"></div>
        <div className="venus"></div>
        <div className="earth">
          <div className="moon"></div>
        </div>
        <div className="mars"></div>
        <div className="jupiter"></div>
        <div className="saturn"></div>
        <div className="uranus"></div>
        <div className="neptune"></div>
        <div className="pluto"></div>
        <div className="star"></div>    
      </div>
    </div>
  );
};

export default Soler_system;

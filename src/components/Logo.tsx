import React, { useState, useEffect, useRef } from "react";

function Logo() {
  const componentRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const componentTop = componentRef.current.getBoundingClientRect().top;

      if (componentTop <= 0 && !isFixed) {
        setIsFixed(true);
      } else if (componentTop > 0 && isFixed) {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFixed]);

  return (
    <div
      ref={componentRef}
      style={{
        position: isFixed ? "fixed" : "relative",
        top: isFixed ? 0 : undefined,
        width: "100%", // Ensure fixed element takes up full width
      }}
    >
      {/* Content of your component */}
    </div>
  );
}

export default Logo;

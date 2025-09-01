
import { useState, useEffect } from "react";

function useWindowHeight() {
  const [height, setHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    // مقدار اولیه
    setHeight(window.innerHeight);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return height;
}

export default useWindowHeight;

import React, { useEffect, useState } from "react";

const Routes = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
      console.log("location changed");
    };

    window.addEventListener("popstate", onLocationChange);
  }, []);

  return window.location.pathname === path ? children : "";
};

export default Routes;

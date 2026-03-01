"use client";

import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTop = () => {
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  const toggleVisibility = () =>
   window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);

  window.addEventListener("scroll", toggleVisibility);
  return () => window.removeEventListener("scroll", toggleVisibility);
 }, []);

 return isVisible ? (
  <div className="fixed bottom-2 right-4 z-30">
   <a href="#top" aria-label="Scroll to top">
    <ArrowUpwardIcon fontSize="large" />
   </a>
  </div>
 ) : null;
};

export default ScrollToTop;

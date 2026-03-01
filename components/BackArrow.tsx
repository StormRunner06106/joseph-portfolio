"use client";

import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackArrow = () => {
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  const toggleVisibility = () =>
   window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);

  window.addEventListener("scroll", toggleVisibility);
  return () => window.removeEventListener("scroll", toggleVisibility);
 }, []);

 return isVisible ? (
  <div className="fixed bottom-2 left-4 ">
   <a href="/" aria-label="Back">
    <ArrowBackIcon fontSize="large" />
   </a>
  </div>
 ) : null;
};

export default BackArrow;

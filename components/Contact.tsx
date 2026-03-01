"use client";

import { useState } from "react";
import { contact } from "../portfolio";
import CustomSection from "./ui/CustomSection";
import Button from "@mui/material/Button";

const Contact = () => {
 const [displayEmail, setDisplayEmail] = useState(false);

 if (!contact.email) return null;

 const handleMailto = () => {
  window.location.href = `mailto:${contact.email}`;
 };

 return (
  <CustomSection title="Contact" id="contact" className="text-center">
   {displayEmail ? (
    <Button onClick={handleMailto} size="large" variant="text">
     {contact.email}
    </Button>
   ) : (
    <Button
     onClick={() => setDisplayEmail(true)}
     size="large"
     variant="contained">
     Email me
    </Button>
   )}
  </CustomSection>
 );
};

export default Contact;

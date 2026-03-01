"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/utils";

interface ScrollFadeInWrapperProps
 extends React.HTMLAttributes<HTMLDivElement> {}

export default function ScrollFadeInWrapper({
 children,
 className,
}: ScrollFadeInWrapperProps) {
 const scrollRef = useRef(null);

 return (
  <div ref={scrollRef} className={cn("w-full z-10", className)}>
   <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ root: scrollRef, once: true }}>
    {children}
   </motion.div>
  </div>
 );
}

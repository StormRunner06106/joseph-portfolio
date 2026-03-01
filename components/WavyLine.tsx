"use client";

import { cn } from "@/utils/utils";
import { motion } from "framer-motion";

const transition = { duration: 1, ease: "easeInOut" };

const lineShapes = [
 {
  viewBox: "0 430 900 80",
  strokeWidth: 1.5,
  path:
   "M0 501L30 502.5C60 504 120 507 180 500.2C240 493.3 300 476.7 360 460C420 443.3 480 426.7 540 431.5C600 436.3 660 462.7 720 473.5C780 484.3 840 479.7 870 477.3L900 475",
 },
 {
  viewBox: "0 46 100 16",
  strokeWidth: 0.3,
  path:
   "M0 50 L10 54 C20 58 30 62 40 60 C50 58 60 50 70 48 C80 46 90 50 95 52 L100 54",
 },
 {
  viewBox: "0 64 100 26",
  strokeWidth: 0.3,
  path:
   "M0 88.7L3.3 85.9C6.7 83.2 13.3 77.8 20 76.5C26.7 75.2 33.3 78.1 40 79.8C46.7 81.5 53.3 81.9 60 79C66.7 76.1 73.3 69.9 80 67.2C86.7 64.5 93.3 65.4 96.7 65.9L100 66.3",
 },
 {
  viewBox: "0 69 100 20",
  strokeWidth: 0.3,
  path:
   "M0 88.7 L4.2 88.3 C8.3 87.9 16.7 87.2 25 83 C33.3 78.7 41.7 71 50 70.3 C58.3 69.7 66.7 76.3 75 78.7 C83.3 81.1 91.7 79.3 95.8 78.4 L100 77.5",
 },
];

interface MotionPathProps {
 shape?: number;
 className?: string;
 color?: string;
}

export default function MotionPath({
 shape = 3,
 className,
 color = "#ffde59",
}: MotionPathProps) {
 return (
  <div
   className={cn(
    "absolute left-0 w-full h-[250px] z-0 overflow-hidden flex justify-center",
    className
   )}>
   <div className="min-w-[1000px] w-full h-full">
    <svg
     viewBox={lineShapes[shape].viewBox}
     width="100%"
     height="100%"
     preserveAspectRatio="none">
     <motion.path
      d={lineShapes[shape].path}
      fill="transparent"
      strokeWidth={lineShapes[shape].strokeWidth}
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="miter"
      initial={{ pathLength: 0.001 }}
      animate={{ pathLength: 1 }}
      transition={transition}
     />
    </svg>
   </div>
  </div>
 );
}

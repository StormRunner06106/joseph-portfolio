"use client";

import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArticleIcon from "@mui/icons-material/Article";
import CreateIcon from "@mui/icons-material/Create";
import DownloadIcon from "@mui/icons-material/Download";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import {
 motion,
 MotionValue,
 useScroll,
 useSpring,
 useTransform,
} from "framer-motion"; // Changed to standard framer-motion import
import { useRef } from "react";
import MotionPath from "@/components/WavyLine";

export default function Page() {
 // Section refs for scroll tracking
 const featuresSection1Ref = useRef(null);
 const featuresSection2Ref = useRef(null);

 // Scroll progress values for each section
 const { scrollYProgress: scrollYProgress1 } = useScroll({
  target: featuresSection1Ref,
  offset: ["start end", "end start"],
 });

 const { scrollYProgress: scrollYProgress2 } = useScroll({
  target: featuresSection2Ref,
  offset: ["start end", "end start"],
 });

 // Smooth the scroll progress values
 const smoothProgress1 = useSpring(scrollYProgress1, {
  stiffness: 1000,
  damping: 30,
 });
 const smoothProgress2 = useSpring(scrollYProgress2, {
  stiffness: 100,
  damping: 30,
 });

 // Parallax function
 function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
 }

 // Create parallax transformation values
 const imageYTransform1 = useParallax(smoothProgress1, -80);
 const imageYTransform2 = useParallax(smoothProgress2, -80);

 return (
  <div>
   <MotionPath
    shape={0}
    className="top-[800px] md:top-[1200px] z-0"
    color="#E9967A"
   />
   <section className="container mx-auto px-4 pt-5 md:pt-20 pb-10 md:pb-20 text-center">
    <h1 className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4 font-display">
     <span className="text-5xl font-bold text-sarba md:text-6xl">SARBA</span>
     <span className="text-2xl font-medium text-sarba md:text-3xl">
      EXPENSE MANAGEMENT APP
     </span>
    </h1>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed opacity-75">
     This application simplifies expense tracking and report management for
     companies. Employees can log expenses in multiple currencies, sign monthly
     reports, and receive notifications for approvals. Administrators can
     generate reports, request signatures, and download finalized documents —
     all in a seamless, digital workflow. 🚀
    </p>
   </section>

   <section
    ref={featuresSection1Ref}
    className="container flex flex-col md:flex-row gap-28 sm:gap-0 items-center justify-center overflow-hidden pb-[40px] md:pb-0 z-50">
    <motion.div
     className="relative mx-auto px-4"
     style={{ y: imageYTransform1 }}>
     <div className="relative flex justify-center">
      <div className="relative w-full max-w-[1200px] z-10">
       <Image
        src="/sarba-mockup-1.png"
        width={800}
        height={800}
        alt="sarba app mockup 1"
        className=""
       />
      </div>
     </div>
    </motion.div>

    <div className="mx-auto px-4 flex flex-col justify-center items-center md:w-1/3 min-w-[250px]">
     <h2 className="mb-10 text-2xl font-bold text-sarba">USER FEATURES</h2>
     <ul className="space-y-6 text-base">
      <li className="flex items-center gap-4">
       <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
        <CheckCircleIcon className="h-5 w-5 text-green-500" />
       </div>
       <span>
        Create expenses, attach receipts, and manage past transactions.
       </span>
      </li>
      <li className="flex items-center gap-4">
       <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
        <CheckCircleIcon className="h-5 w-5 text-green-500" />
       </div>
       <span>Receive notifications for pending signatures.</span>
      </li>
      <li className="flex items-center gap-4">
       <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
        <CheckCircleIcon className="h-5 w-5 text-green-500" />
       </div>
       <span>Sign monthly reports and review previous ones.</span>
      </li>
     </ul>
    </div>
   </section>
   <section
    ref={featuresSection2Ref}
    className="container flex flex-col md:flex-row gap-10 items-center justify-center overflow-hidden py-[50px] md:py-0">
    <div className="mx-auto px-4 flex flex-col justify-center items-center md:w-1/2 min-w-[250px]">
     <h2 className="mb-10 text-2xl font-bold text-sarba">ADMIN FEATURES</h2>
     <ul className="space-y-4 text-base">
      <li className="flex items-center gap-4">
       <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E9967A]/10">
        <ArticleIcon className="h-5 w-5 text-[#E9967A]" />
       </div>
       <span>Generate monthly reports for all employees.</span>
      </li>
      <li className="flex items-center gap-4">
       <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E9967A]/10">
        <CreateIcon className="h-5 w-5 text-[#E9967A]" />
       </div>
       <span>Request and track signature statuses.</span>
      </li>
      <li className="flex items-center gap-4">
       <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E9967A]/10">
        <DownloadIcon className="h-5 w-5 text-[#E9967A]" />
       </div>
       <span>Download signed reports.</span>
      </li>
      <li className="flex items-center gap-4">
       <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E9967A]/10">
        <CurrencyExchangeIcon className="h-5 w-5 text-[#E9967A]" />
       </div>
       <span>Multi-currency expense support.</span>
      </li>
     </ul>
    </div>
    <motion.div
     className="relative mx-auto px-4"
     style={{ y: imageYTransform2 }}>
     <div className="relative flex justify-center">
      <div className="relative w-full max-w-[1200px]">
       <Image
        src="/sarba-mockup-2.png"
        width={500}
        height={500}
        alt="sarba app mockup 2"
       />
      </div>
     </div>
    </motion.div>
   </section>
  </div>
 );
}

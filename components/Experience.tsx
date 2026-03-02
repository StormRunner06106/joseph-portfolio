"use client";

import uniqid from "uniqid";
import { experience } from "../portfolio";
import CustomSection from "./ui/CustomSection";
import Chip from "@mui/material/Chip";
import Icon from "@mui/icons-material/WorkOutlineOutlined";
import React, { useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Experience = () => {
  const { theme } = useTheme();
  const scrollRef = useRef(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Wait until client is mounted to avoid SSR Hydration Issue with next-themes
  }, []);

  if (!mounted) return null;

  return (
    <CustomSection title="Experience" id="experience" className="p-0">
      <div
        ref={scrollRef}
        className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"
      >
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: scrollRef, once: true, amount: 0.8 }}
            className="relative flex items-start md:items-center justify-between md:justify-normal md:even:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#e5e7eb] bg-transparent group-[.is-active]:bg-[var(--primary-color)] text-[var(--foreground)] group-[.is-active]:text-[var(--foreground)] shadow shrink-0 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2 mt-2 md:mt-0">
              <Icon
                className={`w-[60%] ${theme === "dark" ? "text-black" : "text-white"}`}
              />
            </div>

            <Card
              variant="outlined"
              color="primary"
              className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-2 md:p-4"
            >
              <CardContent>
                <div className="flex justify-between items-baseline flex-wrap">
                  <h3 className="font-display text-2xl">{item.name}</h3>
                  <div className="font-display">
                    <time>{item.year}</time>
                  </div>
                </div>

                <div className="leading-relaxed">{item.description}</div>

                {item.stack && (
                  <ul className="flex flex-wrap mt-2 gap-2">
                    {item.stack.map((el) => (
                      <li key={uniqid()}>
                        <Chip
                          color="primary"
                          variant="filled"
                          size="small"
                          label={el}
                        ></Chip>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </CustomSection>
  );
};

export default Experience;

"use client";

import { useState } from "react";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { projects, skills, contact, experience } from "../portfolio";
import CustomLink from "./ui/CustomLink";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="flex items-center justify-between space-x-4 z-40">
      {isHomePage && (
        <ul
          className={`none md:flex ${
            showNavList ? "flex" : "hidden"
          } fixed h-full text-lg w-full bg-white dark:bg-black justify-center items-center inset-0 md:static z-10 flex-col md:flex-row md:fle space-y-4 md:space-y-0`}
        >
          {/* Skills */}
          {skills.length && (
            <li className="md:ml-6">
              <CustomLink href="#skills" onClick={toggleNavList}>
                Skills
              </CustomLink>
            </li>
          )}
          {/* Experience */}
          {experience.length && (
            <li className="md:ml-6">
              <CustomLink href="#experience" onClick={toggleNavList}>
                Experience
              </CustomLink>
            </li>
          )}

          {/* Contact */}
          {contact.email && (
            <li className="md:ml-6">
              <CustomLink href="#contact" onClick={toggleNavList}>
                Contact
              </CustomLink>
            </li>
          )}
        </ul>
      )}

      <button
        type="button"
        onClick={() => {
          const newTheme = theme === "dark" ? "light" : "dark";
          setTheme(newTheme);
          localStorage.setItem("theme", newTheme);
        }}
        className="bg-transparent"
        aria-label="toggle theme"
      >
        {theme === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      {/* Hamburger Icon */}
      {isHomePage && (
        <button
          type="button"
          onClick={toggleNavList}
          className="z-50 md:hidden bg-transparent"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      )}
    </nav>
  );
};

export default Navbar;

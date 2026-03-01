"use client";

import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import CssBaseline from "@mui/material/CssBaseline";
import { Inter } from "next/font/google";
import { useMemo, PropsWithChildren, useEffect, useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const getDesignTokens = (mode: "light" | "dark") => ({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: ".7rem",
          fontFamily: inter.style.fontFamily,
          fontSize: "16px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        label: {
          fontFamily: `${inter.style.fontFamily}`,
          fontSize: "16px",
        },
      },
    },
  },

  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#ffde59" },
          text: { primary: "#000000" },
        }
      : {
          primary: { main: "#ffde59" },
          text: { primary: "#ffffff" },
        }),
  },
});

export function ThemeWrapper({ children }: PropsWithChildren) {
  const { theme, systemTheme, setTheme } = useTheme(); // Get current theme from next-themes

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (!storedTheme) {
      const defaultTheme = "dark";
      setTheme(defaultTheme);
      localStorage.setItem("theme", defaultTheme);
    }
  }, []);

  const resolvedTheme = theme === "system" ? systemTheme : theme;
  const mode = resolvedTheme === "dark" ? "dark" : "light";

  // Create MUI theme dynamically
  const muiTheme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <MUIThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export function CustomThemeProvider({ children }: PropsWithChildren) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
      <ThemeWrapper>{children}</ThemeWrapper>
    </NextThemesProvider>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { CustomThemeProvider } from "@/theme";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Joseph A | Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className="overflow-hidden font-[var(--font-poppins)]">
        <CustomThemeProvider>
          <div className="bg-[var(--foreground)] text-[var(--text)] relative h-screen overflow-hidden">
            {children}
          </div>
        </CustomThemeProvider>
      </body>
    </html>
  );
}

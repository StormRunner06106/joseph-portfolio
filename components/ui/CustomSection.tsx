import { cn } from "@/utils/utils";
import React from "react";
import ScrollFadeInWrapper from "./ScrollFadeInWrapper";

export default function CustomSection({
  children,
  className,
  id,
  title,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section id={id} className={cn("mt-20 w-full z-10", className)}>
      <ScrollFadeInWrapper>{children}</ScrollFadeInWrapper>
    </section>
  );
}

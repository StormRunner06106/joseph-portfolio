import { cn } from "@/utils/utils";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const variants = cva("", {
 variants: {
  variant: {
   default: "w-full",
   underlined:
    "w-full relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] pb-1 before:bottom-0 before:left-0 before:bg-black dark:before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300",
   icon: "hover:opacity-75 hover:ease-in-out hover:transition",
  },
  size: {},
 },
 defaultVariants: {
  variant: "underlined",
 },
});

interface CustomLinkProps
 extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
  VariantProps<typeof variants> {}

const CustomLink: React.FC<CustomLinkProps> = ({
 href,
 variant,
 className,
 children,
 ...props
}: CustomLinkProps) => {
 return (
  <a href={href} className={cn(variants({ variant, className }))} {...props}>
   {children}
  </a>
 );
};

export default CustomLink;

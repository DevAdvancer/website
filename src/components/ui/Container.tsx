import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container = ({ children, className, ...props }: ContainerProps) => (
  <div
    className={cn(
      "w-full max-w-[1750px] mx-auto px-2 sm:px-4 lg:px-6",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export default Container;

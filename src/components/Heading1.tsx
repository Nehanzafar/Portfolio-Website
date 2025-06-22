import React from "react";
import type { componentProps } from "../utils/portfolio-website";

interface props extends componentProps {
  [name: string]: unknown;
}

const H1 = ({ children, className }: props): React.ReactNode => {
  return (
    <h1 className={`font-bold text-accent-yellow lg:text-6xl md:w-8/12 w-4/5 md:text-5xl text-2xl mt-2 ${className}`}>
      {children}
    </h1>
  );
};

export default H1;

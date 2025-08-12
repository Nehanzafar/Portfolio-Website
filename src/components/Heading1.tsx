import React from "react";
import type { componentProps } from "../utils/portfolio-website";

interface props extends componentProps {
  [name: string]: unknown;
}
// TODO: Make this component more general to the H1 size for the website

const H1 = ({ children, className, style }: props) => {
  return (
    <h1
      className={`font-bold text-accent-yellow lg:text-6xl  md:text-5xl 
        text-2xl mt-2 ${className}`}
      style={style}
    >
      {children}
    </h1>
  );
};

export default H1;

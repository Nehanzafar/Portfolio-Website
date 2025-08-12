import React from "react";
import type { componentProps } from "../../utils/portfolio-website";

interface props extends componentProps {
  [name: string]: unknown;
}

const Quote = (props: props): React.ReactNode => {
  return (
    <blockquote className={`${props.className} text-lg/relaxed text-white`}>
      <span className="relative inline-block before:absolute before:block before:w-2 before:h-full before:bg-accent-yellow before:top-0 before:-left-4">
        {props.children}
      </span>
    </blockquote>
  );
};

export default Quote;

import React from "react";
import type { componentProps } from "../../utils/portfolio-website";

const Paragraph = (props: componentProps) => {
  return <p className={`text-lg/relaxed text-white ${props.className}`}>{props.children}</p>;
};

export default Paragraph;

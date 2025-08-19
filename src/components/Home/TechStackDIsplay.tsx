import type { componentProps } from "../../utils/portfolio-website";
import { FaCircle } from "react-icons/fa";
import React, { useState } from "react";
import H1 from "../Heading1";

export interface TechStackData {
  heading: string;
  text: string;
  imageSrc: string;
  TechStackInfo: string;
}
interface props extends componentProps {
  data: TechStackData;
  [content: string]: unknown;
}

const placeholderImg =
  "https://placehold.co/428/B1B2B5FF/fca311/png?text=Nehan+Zafar&font=Montserrat";

const TechStackDisplay = (props: props) => {
  const [Img, setImg] = useState(placeholderImg);
  if(props.data.imageSrc !== "") {
    setImg(props.data.imageSrc);
  }
  return (
    <div
      aria-label="Tech-stack-card"
      className="flex lg:flex-row flex-col-reverse justify-between border border-accent-pink lg:h-[90vh] rounded-2xl md:py-5 lg:px-4 px-2 relative md:mx-auto"
    >
      <div className="flex flex-col justify-start flex-grow-2 lg:mr-4 lg:mx-1 md:items-start items-center">
        <TSContentDisplay className="mt-10"></TSContentDisplay>
        <h1 className="md:text-[10rem] sm:text-8xl text-6xl font-bold text-white tracking-tight lg:my-4 my-2">
          {props.data.heading}
        </h1>
        <blockquote className="md:text-sm text-sm text-white ml-2 my-3 md:text-left text-center">
          {props.data.text}
        </blockquote>
      </div>

      <img
        src={props.data.imageSrc === "" ? Img : props.data.imageSrc}
        className="rounded-2xl md:m-0 m-2 grow-0 order-1"
        alt=""
      />
    </div>
  );
};

const TSContentDisplay = (props: componentProps) => {
  return (
    <div className={`flex items-center justify-center rounded-full border border-accent-pink px-7 py-3 w-60 text-accent-pink text-center font-semibold mb-4 md:mx-1 ${props.className}`}>
      <FaCircle className="text-lg" />
      <p className="ml-3">
        {props.children === undefined ? "Tech Stack Info" : props.children}
      </p>
    </div>
  );
};

export default TechStackDisplay;

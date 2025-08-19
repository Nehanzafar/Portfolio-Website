import React, { useState } from "react";
import type { componentProps } from "../../utils/portfolio-website";
import { FaQuoteLeft } from "react-icons/fa";
import useResize from "../../hooks/useResize";

export interface TestimonialData {
  heading: string;
  text: string;
  imageSrc: string;
  author: {
    name: string;
    role: string;
    company: string;
    imgSrc: string;
  };
}

interface props extends componentProps {
  data: TestimonialData;
  [content: string]: unknown;
}
const placeholderImg =
  "https://placehold.co/428/B1B2B5FF/fca311/png?text=Nehan+Zafar&font=Montserrat";
const placeholderImgSm =
"https://placehold.co/50/B1B2B5FF/fca311/png?text=Nehan+Zafar&font=Montserrat";

const Testimonial = (props: props): React.ReactNode => {
  const [Img, setImg] = useState(placeholderImg);
  return (
    <div
      aria-label="Testimonial-card"
      className="flex lg:flex-row flex-col justify-between lg:h-[90vh] lg:mx-auto border-2 border-accent-yellow rounded-2xl md:py-5 lg:px-4 px-2 relative md:mx-auto"
    >
      <div className="flex flex-col  justify-between">
        <div className="md:p-1 p-3 my-5">
          <FaQuoteLeft color="white" fill="white" size={76} className="" />
          <h1 className="font-extrabold md:text-4xl text-2xl">
            {props.data.heading}
          </h1>
          <blockquote className="md:text-sm text-sm text-white">
            {props.data.text}
          </blockquote>
        </div>
        <div
          aria-label="author-description"
          className="flex w-44 my-3 justify-self-center"
        >
          <img
            src={
              props.data.author.imgSrc === ""
                ? placeholderImgSm
                : props.data.author.imgSrc
            }
            className="self-center rounded-full inline-block mr-3"
            alt=""
          />
          <div className="inline-block">
            <h2 className="font-semibold">{props.data.author.name}</h2>
            <span className="flex justify-between text-sm font-light">
              <p>{props.data.author.role}</p>
              <p>&#x2022;</p>
              <p>{props.data.author.company}</p>
            </span>
          </div>
        </div>
      </div>

      <img
        src={props.data.imageSrc === "" ? Img : props.data.imageSrc}
        className="rounded-2xl lg:order-1 -order-1 grow-2"
        alt=""
      />
    </div>
  );
};

export default Testimonial;

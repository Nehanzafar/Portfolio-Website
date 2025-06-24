import React from "react";
import type { componentProps } from "../utils/portfolio-website";
import { FaQuoteLeft } from "react-icons/fa";

export interface TestimonialData {
  heading: string;
  text: string;
  imageSrc: string;
  author: {
    name: string;
    role: string;
    company: string;
    imgSrc: string
  };
}

interface props extends componentProps {
  data: TestimonialData;
  [content: string]: unknown;
}
let count: number = 0

const Testimonial = (props: props): React.ReactNode => {
  const [imgSrc, setImgSrc] = React.useState("")
  if(props.data.imageSrc === "" && count === 0){
    count++
    setImgSrc("https://placehold.co/374x374/B1B2B5FF/fca311/png?text=Nehan+Zafar&font=Montserrat")
  }
  return (
    <div className="flex bg-accent-yellow h-[504px] mx-10 rounded-2xl py-10 px-20">
      <div>
        <FaQuoteLeft color="white" fill="white" size={96}/>
      <h1 className="font-extrabold text-5xl">{props.data.heading}</h1>
      <p>{props.data.text}</p>
      <div aria-label="author-description">
        <h2>{props.data.author.name}</h2>
        <span className="flex">
          <p>{props.data.author.role}</p>
          <p>{props.data.author.company}</p>
        </span>
      </div>
      </div>
      <img src={imgSrc} width={374} height={374} alt="" />
    </div>
  );
};

export default Testimonial;

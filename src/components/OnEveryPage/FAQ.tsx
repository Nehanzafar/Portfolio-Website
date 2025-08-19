import React, { Fragment, useState } from "react";
import H1 from "../Heading1";
import constant from "../../data/constant.json";
import { FaPlus, FaMinus } from "react-icons/fa";
import IconButtons from "./IconButtons";
import type { componentProps } from "../../utils/portfolio-website";
import Paragraph from "./Paragragh";

interface QuestionBoxProps extends componentProps {
  data: {
    Heading: string;
    Question: string;
    Answer: string;
  };
  [content: string]: unknown;
}

const data = constant.FAQ;
const FAQ = () => {
  return (
    <div className="w-11/12 mx-auto">
      <H1 className="my-10">Frequently Asked Questions</H1>
      <ul>
        {data.map((data, i) => {
          return (
            <li key={i}>
              <div className="border-b-6 border-dashed border-accent-yellow w-full my-10" />
              <QuestionBox data={data} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const QuestionBox = (props: QuestionBoxProps) => {
  const [openAns, setOpenAns] = useState<boolean>(false);
  function handleClick() {
    setOpenAns(!openAns);
  }
  return (
    <div className="my-20">
      <div className="flex items-center w-full justify-between">
        <h1 className="lg:text-5xl text-3xl text-accent-yellow font-bold">
          {props.data.Heading}
        </h1>
        <p className="text-2xl ml-10 hidden md:block">{props.data.Question}</p>
        <IconButtons
          className="backdrop-sepia-0 hover:bg-white/10"
          onClick={handleClick}
        >
          {openAns ? (
            <FaMinus className="text-accent-yellow text-4xl" />
          ) : (
            <FaPlus className="text-accent-yellow text-4xl" />
          )}
        </IconButtons>
      </div>
      {openAns && (
        <Paragraph className="text-lg mt-10">{props.data.Answer}</Paragraph>
      )}
    </div>
  );
};

export default FAQ;

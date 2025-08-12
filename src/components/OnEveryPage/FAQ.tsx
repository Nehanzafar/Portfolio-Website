import React, { useState } from "react";
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
      <H1>Frequently Asked Questions</H1>
      {data.map((data, i) => {
        return (
          <>
            <QuestionBox data={data} />;
            <div className="border-b-6 border-dashed border-accent-yellow w-full my-4" />
          </>
        );
      })}
    </div>
  );
};

// TODO make the plus icon open a modal with the answer to the question

const QuestionBox = (props: QuestionBoxProps) => {
  const [openAns, setOpenAns] = useState<boolean>(false);
  function handleClick() {
    setOpenAns(!openAns);
  }
  return (
    <>
      <div className="flex items-center w-full justify-between mt-7">
        <H1 className="" style={{ fontSize: "3rem" }}>
          {props.data.Heading}
        </H1>
        <p className="text-2xl ml-10">{props.data.Question}</p>
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
        <Paragraph className="text-lg mt-4">{props.data.Answer}</Paragraph>
      )}
    </>
  );
};

export default FAQ;

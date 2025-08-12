import constant from "../data/constant.json";
import Button from "@mui/material/Button";
import EOS from "../assets/svgs/End Of sectionpw.svg";
import Quote from "../components/OnEveryPage/Qoute";
import H1 from "../components/Heading1";
import ParallaxTextbg from "../components/ParallaxTextbg";
import Testimonial from "../components/Home/Testimonial";
import type { TestimonialData } from "../components/Home/Testimonial";
import type { TechStackData } from "../components/Home/TechStackDIsplay";
import { useState } from "react";
import useResize from "../hooks/useResize";
import ParallaxTextScroll from "../components/Home/ParallaxTextBar";
import Section from "../components/OnEveryPage/Section";
import TechStackDisplay from "../components/Home/TechStackDIsplay";
import FAQ from "../components/OnEveryPage/FAQ";
import Paragraph from "../components/OnEveryPage/Paragragh";

const hero = constant.Home.hero_section;
const main = constant.Home.main_content;
const TestimonialsJson = constant.Home.testimonials;
const TechStackJson = constant.Home.TechStackData;

const Home = () => {
  return (
    <div className="">
      <Section
        aria-label="hero-section"
        className="lg:h-screen md:h-[84vh] h-[70vh] justify-center flex flex-col items-center lg:justify-start text-center md:mt-0 mt-10"
        // style={{
        //   backgroundImage: `
        //   url('src/assets/imgs/background-hero.jpg')
        // `,
        // }}
      >
        <p className="font-light lg:text-lg text-md mt-16 ">
          {hero.sup_main_text}
        </p>
        <H1 className="md:w-8/12 w-full">{hero.main_text}</H1>
        <div className="flex md:justify-between justify-center md:w-sm w-full mt-8 md:mx-0">
          <Button
            variant="outlined"
            className="border-accent-pink text-white font-normal md:text-md text-xs rounded-lg mx-1 w-40 md:py-3"
          >
            {hero.btn_outlined}
          </Button>
          <Button
            variant="contained"
            className="bg-accent-yellow text-white font-normal md:text-md text-xs rounded-lg mx-1 w-40 md:py-3"
          >
            {hero.btn_contained}
          </Button>
        </div>
        <img
          src={EOS}
          alt=""
          className="lg:mt-56 mt-36 justify-self-end"
          width={300}
        />
      </Section>
      <Section aria-label="main-content">
        <H1 className="text-accent-yellow font-extrabold md:text-4xl text-xl text-center md:text-left">
          {main.main_text}
        </H1>
        <Paragraph className="mr-20 my-5">{main.sub_text}</Paragraph>

        <ParallaxTextbg className="absolute right-0">
          {main.parallaxText}
        </ParallaxTextbg>
      </Section>
      <Section aria-label="Testimonials" className="mt-24">
        {TestimonialsJson.map((obj: TestimonialData, i) => {
          return <Testimonial key={i} data={obj} />;
        })}
        <ParallaxTextbg className="">Testimonial</ParallaxTextbg>
      </Section>
      <Section className="mx-0" style={{ margin: "0" }}>
        <ParallaxTextScroll />
      </Section>
      <Section>
        {TechStackJson.map((obj: TechStackData, i) => {
          return <TechStackDisplay key={i} data={obj} />;
        })}
      </Section>
      <Section>
        <FAQ />
      </Section>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;

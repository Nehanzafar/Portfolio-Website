import constant from "../data/constant.json";
import Button from "@mui/material/Button";
import EOS from "../assets/svgs/End Of sectionpw.svg";
import Quote from "../components/Qoute";
import H1 from "../components/Heading1";
import ParallaxTextbg from "../components/ParallaxTextbg";
import Testimonial from "../components/Testimonial";
import type { TestimonialData } from "../components/Testimonial";

const hero = constant.Home.hero_section;
const main = constant.Home.main_content;
const TestimonialsJson = constant.Home.testimonials;

const Home = () => {
  return (
    <div className="lg:mx-30 md:mx-10 mx-8">
      <section
        aria-label="hero-section"
        className="lg:h-fit flex flex-col items-center text-center"
        // style={{
        //   backgroundImage: `
        //   url('src/assets/imgs/background-hero.jpg')
        // `,
        // }}
      >
        <p className="font-light lg:text-lg md:text-md text-sm mt-16">
          {hero.sup_main_text}
        </p>
        <H1>{hero.main_text}</H1>
        <div className="flex md:justify-between justify-center md:w-sm w-full mt-8 md:mx-0">
          <Button
            variant="outlined"
            className="border-accent-pink text-white font-normal md:text-md text-xs md:py-3 py-2 rounded-lg w-46 mx-3"
          >
            {hero.btn_outlined}
          </Button>
          <Button
            variant="contained"
            className="bg-accent-yellow text-white font-normal md:text-md text-xs md:py-3 py-3 rounded-lg w-44 mx-3"
          >
            {hero.btn_contained}
          </Button>
        </div>
        <img
          src={EOS}
          alt=""
          className="lg:mt-56 mt-36 justify-self-end self-center"
          width={300}
        />
      </section>
      <section aria-label="main-content" className="mt-24">
        <h1 className="text-accent-yellow font-bold md:text-4xl text-2xl w-full text-center md:text-left">
          {main.main_text}
        </h1>
        <div className="flex justify-between w-full my-10">
          <Quote className="ml-5 mt-10 md:w-2/5">{main.quoteText}</Quote>
          <span
            className={`rounded-full md:inline-block hidden w-xs h-80 bg-[url(../assets/imgs/wireframe_of_an_app.jpg)] bg-cover shadow-dark-green shadow-[inset_0_0px_24px_rgba(4,42,43,0.6)]`}
          >
            {/* <img
            src={wireframeImg}
            height={320}
            className="rounded-full"
            alt=""
          /> */}
          </span>
        </div>

        <ParallaxTextbg className="absolute right-0">
          {main.parallaxText}
        </ParallaxTextbg>
      </section>
      <section aria-label="Testimonials" className="mt-24">
        {/* {TestimonialsJson.map((obj: TestimonialData) => {
          return <Testimonial data={obj} />;
        })} */}
      </section>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;

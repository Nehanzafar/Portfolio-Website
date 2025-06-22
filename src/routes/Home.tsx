import constant from "../data/constant.json";
import Button from "@mui/material/Button";
import EOS from "../assets/svgs/End Of sectionpw.svg";
import Quote from "../components/qoute";
import H1 from "../components/Heading1";

const hero = constant.Home.hero_section;
const main = constant.Home.main_content;

const Home = () => {
  return (
    <div className="md:mx-20 mx">
      <section
        aria-label="hero-section"
        className="h-screen flex flex-col items-center text-center"
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
            className="border-accent-pink text-white font-normal md:text-md text-xs md:py-3 py-3 rounded-lg md:w-44 w-40 mx-3"
          >
            {hero.btn_outlined}
          </Button>
          <Button
            variant="contained"
            className="bg-accent-yellow text-white font-normal md:text-md text-xs md:py-3 py-3 rounded-lg md:w-44 w-40 mx-3"
          >
            {hero.btn_contained}
          </Button>
        </div>
        <img src={EOS} alt="" className="mt-auto" />
      </section>
      <section aria-label="main-content">
        <div className="mt-24">
          <h1 className="text-accent-yellow font-bold text-4xl w-3/4">
            {main.main_text}
          </h1>
          <Quote className="ml-5 mt-10 w-4/12">
            I'm passionate about crafting intuitive, visually engaging websites
            that blend design and development. I enjoy turning ideas into clean,
            responsive interfaces — combining creative design with solid,
            maintainable code to deliver smooth, user-focused experiences.
          </Quote>
        </div>
      </section>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;

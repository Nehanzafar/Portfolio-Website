import type { componentProps } from "../utils/portfolio-website";

const ParallaxTextbg = (props: componentProps) => {
  return (
    <div className="relative h-24">
      <h1
        className={`md:text-8xl text-6xl text-nowrap text-white/34 font-bold ${props.className} text-shadow-2xs text-transparent bg-clip-text text-shadow-dark-green/34 overflow-x-clip h-24 my-5`}
      >
        {props.children}
      </h1>
    </div>
  );
};

export default ParallaxTextbg;

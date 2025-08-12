import React from "react";
import constant from "../../data/constant.json";

const parallaxText = constant.parallaxScrollText;

const ParallaxTextScroll = () => {
  return (
    <div className="w-full md:text-3xl text-xl text-left overflow-x-hidden text-nowrap">
      <p className="flex justify-between md:my-6 my-2">
        {parallaxText.top.map((text, i) => (
          <React.Fragment key={i + 10000}>
            <span key={i} className="">
              {text}
            </span>
            <span key={i + 1000} className="last:hidden">
              &#x2022;
            </span>
          </React.Fragment>
        ))}
      </p>
      <p className="flex justify-between md:text-6xl text-3xl md:my-6 my-2">
        {parallaxText.middle.map((text, i) => (
          <React.Fragment key={i + 10000}>
            <span key={i}>{text}</span>
            <span key={i + 1000} className="last:hidden">
              &#x2022;
            </span>
          </React.Fragment>
        ))}
      </p>
      <p className="flex justify-between font-bold md:my-6 my-2">
        {parallaxText.bottom.map((text, i) => (
          <React.Fragment key={i + 10000}>
            <span key={i}>{text}</span>
            <span key={i + 1000} className="last:hidden">
              &#x2022;
            </span>
          </React.Fragment>
        ))}
        {parallaxText.bottom.map((text, i) => (
          <React.Fragment key={i + 10000}>
            <span key={i}>{text}</span>
            <span key={i + 1000} className="last:hidden">
              &#x2022;
            </span>
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default ParallaxTextScroll;

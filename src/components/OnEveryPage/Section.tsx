import type { componentProps } from "../../utils/portfolio-website";

interface props extends componentProps {
  style?: object;
}

// TODO make the Section component reusable by adding more props
// TODO make the Section component snap to the user scrolling
// TODO remove the margin in the root element and make the section component responsible for all the responsiveness of the website

const Section = (props: props) => {
  return (
    <div
      className={`md:mx-6 mx-2 my-40 snap-start ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Section;

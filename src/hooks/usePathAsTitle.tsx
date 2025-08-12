import { useLocation } from "react-router-dom";
import constant from "../data/constant.json";

function removeSpecialChars(str: string): string {
  return str.replace(/[^a-zA-Z0-9\s]/g, "");
}

function capitalize(str: string): string {
  const temp = str.slice(0, 1);
  return temp.toUpperCase() + str.slice(1);
}
const titleElement = document.querySelector("head title") as HTMLElement;
const name = removeSpecialChars(constant.logoText) + " | " + constant.Role;

const usePathAsTitle = (title = "") => {
  const curLoc = useLocation().pathname;
  if (!titleElement) {
    const titleElement = document.createElement("title");
    const head = document.querySelector("head");
    head?.appendChild(titleElement);
  }
  if (title === "") {
    const pageTitle =
      curLoc === "/"
        ? name
        : capitalize(removeSpecialChars(curLoc)) + " | " + constant.Role;
    titleElement!.innerText = pageTitle;
  } else {
    const pageTitle = title + " | " + constant.Role;
    titleElement!.innerText = pageTitle;
  }
  return () => {
    titleElement!.innerText = name;
  };
  // useEffect(() => {
  // }, [curLoc, title]);
  // return title;
};

export default usePathAsTitle;

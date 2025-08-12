import Header from "../components/OnEveryPage/Header.tsx";
import Footer from "../components/OnEveryPage/Footer.tsx";
import { Outlet } from "react-router-dom";
import usePathAsTitle from "../hooks/usePathAsTitle.tsx";

const Root = () => {
  usePathAsTitle();
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;

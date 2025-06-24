import FooterCard from "@components/footer-card";
import About from "./about";
import Benefits from "./benefits";
import Customers from "./customers";
import Delegates from "./delegates";
import Descisions from "./descisions";
import Role from "./role";
import Works from "./works";
import Footer from "./footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Agentic = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      <Benefits />
      <Works />
      <Role />
      <Descisions />
      <Delegates />
      <Customers />
      <About />
      <Footer />
    </>
  );
};

export default Agentic;

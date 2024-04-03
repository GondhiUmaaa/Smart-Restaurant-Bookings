import React from "react";
import Header from "../../components/Header/Header";
import About from "../../components/Home/About/About";
import Menu from "../../components/Home/Menu/Menu";
import Popular from "../../components/Home/Popular/Popular";
import Reservation from "../../components/Home/Reservation/Reservation";
import Slider from "../../components/Home/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import Chatbot from "../../components/Chatbot/Chatbot";
import "./Home.scss";
import Testimonial from "../../components/Home/Testimonials/Testimonial";

const Home = () => {
  return (
    <div>
      <Chatbot />
      <Header />
      <Slider />
      <Popular />
      <About />
      <Menu />
      <Reservation />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;

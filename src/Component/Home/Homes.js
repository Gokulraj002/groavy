import React from "react";
import { Helmet } from "react-helmet-async";
import HomeAbout from "./homeabout";
import Weoffer from "./Weoffer";
import Slider from "./GallerySlider";
import Testimonials from "./Testimonials";
import "./home.css";
import HomeBanner from "./HomeBanner";
import HomePagePopupForm from "./HomePagePopupForm";
import HomeProjects from "./HomeProjects";
import logo from "../../images/about-us1.png";

const Homes = () => {
  return (
    <div>
      <Helmet>
        <title>GroavyBuildcon | Best Farmland Sales in Bengaluru</title>
        <meta
          name="description"
          content="GroavyBuildcon specializes in selling premium farmlands in Bengaluru. Explore our wide range of farmland options to find your perfect plot. "
        />
        <meta
          name="keywords"
          content="GroavyBuildcon, real estate, farmland sales, Bengaluru, best farmland sales award"
        />
        <meta name="author" content="GroavyBuildcon" />
        <meta
          property="og:title"
          content="GroavyBuildcon | Best Farmland Sales in Bengaluru"
        />
        <meta
          property="og:description"
          content="GroavyBuildcon specializes in selling premium farmlands in Bengaluru. Explore our wide range of farmland options to find your perfect plot."
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://www.groavy.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GroavyBuildcon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GroavyBuildcon | Best Farmland Sales in Bengaluru"
        />
        <meta
          name="twitter:description"
          content="GroavyBuildcon specializes in selling premium farmlands in Bengaluru. Explore our wide range of farmland options to find your perfect plot."
        />
        <meta name="twitter:image" content="URL-to-your-featured-image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.groavy.com" />
      </Helmet>
      <HomeBanner />
      <HomeAbout />
      <Weoffer />
      <HomeProjects />
      <Slider />
      <Testimonials />
      <HomePagePopupForm />
    </div>
  );
};

export default Homes;

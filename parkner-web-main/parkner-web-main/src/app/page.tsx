"use client";
import { ThemeUIProvider } from "theme-ui";
import aboutcompData from "./data/aboutcompData";
import aboutData from "./data/aboutData";
import contactData from "./data/contactData";
import featuresData from "./data/featuresData";
import footerData from "./data/footerData";
import getData from "./data/getData";
import heroData from "./data/heroData";
import navData from "./data/navData";
import serviceCompData from "./data/servicecompData";
import serviceData from "./data/serviceData";
import About from "./sections/About";
import AboutComp from "./sections/AboutComp";
import Banner from "./sections/Banner";
import Contact from "./sections/Contact";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Get from "./sections/Get";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Service from "./sections/Service";
import ServiceComp from "./sections/ServicesComp";

export default function Home() {
  return (
    <ThemeUIProvider theme={theme as any}>
      <Header NavData={navData} />
      <Hero HeroData={heroData} />
      <About AboutData={aboutData} />
      <Service ServiceData={serviceData} />
      <Features FeaturesData={featuresData} />
      <Banner />
      <AboutComp AboutcompData={aboutcompData} />
      <ServiceComp ServiceCompData={serviceCompData} />
      <Get GetData={getData} />
      <Contact ContactData={contactData} />
      <Footer FooterData={footerData} />
    </ThemeUIProvider>
  );
}

const theme = {
  colors: {
    text: "#222222",
    primary: "#222222",
    background: "#F1F1F1",
    background_primary: "#FF4363",
    background_secondary: "white",
    background_forthly: "#FFF4F5",
    background_fively: "#ffffff",
    secondary: "#666666",
    text_secondary: "white",
    text_fourthly: "red",
    main: {
      50: "#e6f7f7",
      100: "#ceeff0",
      200: "#b5e6e8",
      300: "#9ddee0",
      400: "#84d6d9",
      500: "#6bced1",
      600: "#53c6c9",
      700: "#3abdc1",
      800: "#22b5ba",
      900: "#09adb2",
    },
    accent: {
      50: "#ebf4f2",
      100: "#d7e8e5",
      200: "#c2ddd8",
      300: "#aed1cb",
      400: "#9ac6be",
      500: "#86bab0",
      600: "#72afa3",
      700: "#5da396",
      800: "#499889",
      900: "#358c7c",
    },
    neutral: {
      0: "#ffffff",
      50: "#e6e7e7",
      100: "#cdcfce",
      200: "#b4b7b6",
      300: "#9b9f9e",
      400: "#828786",
      500: "#696e6d",
      600: "#505655",
      700: "#373e3d",
      800: "#1e2624",
      900: "#050e0c",
    },
  },
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Poppins', sans-serif",
  },
  breakpoints: ["360px", "480px", "640px", "720px", "1080px", "1200px"],
  buttons: {
    primary: {
      color: "text_secondary",
      bg: "background_primary",
      fontFamily: "'Roboto', sans-serif",
      borderRadius: "55px",
      padding: "12px 18px",
      fontSize: "16px",
      fontWeight: 500,
      cursor: "pointer",
    },
    secondary: {
      bg: "background",
      color: "text",
      fontFamily: "'Roboto', sans-serif",
      fontSize: "16px",
      fontWeight: 500,
      cursor: "pointer",
      svg: {
        mr: "10px",
        mb: "-2px",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      overflowX: "hidden",
    },
  },
};

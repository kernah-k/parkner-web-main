const navData = {
  logo: "Parkner",
  navs: [
    {
      name: "Home",
      path: "hero",
    },
    {
      name: "For Drivers",
      dropdown: [
        { name: "About", path: "about-drivers" },
        { name: "Benefits", path: "benefits" },
        { name: "How It Works", path: "how-it-works" },
      ],
    },
    {
      name: "For Companies",
      dropdown: [
        { name: "About", path: "about-companies" },
        { name: "Benefits", path: "benefits-companies" },
        { name: "How It Works", path: "get" },
      ],
    },
    {
      name: "Contact",
      path: "contact",
    },
    


  ],
};

export default navData;

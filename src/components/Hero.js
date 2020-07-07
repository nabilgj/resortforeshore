import React from "react";

const Hero = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};

Hero.defaultProps = {
  hero: "defaultHero",
};

// will go into Home, Rooms, SingleRoom
export default Hero;

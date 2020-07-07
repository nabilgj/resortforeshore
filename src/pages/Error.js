import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";

const Error = () => {
  return (
    <Hero>
      <Banner
        title="Stuck outside our resort"
        subtitle="You need to come back inside the resort"
      >
        <Link to="/" className="btn-primary">
          Back to Rooms
        </Link>
      </Banner>
    </Hero>
  );
};

// wil go into App
export default Error;

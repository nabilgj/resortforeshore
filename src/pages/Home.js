import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// components
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

const Home = () => {
  return (
    <Fragment>
      <Hero>
        <Banner
          title="Luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            Check Rooms
          </Link>
        </Banner>
      </Hero>

      <Services />
      <FeaturedRooms />
    </Fragment>
  );
};

// will go into App
export default Home;

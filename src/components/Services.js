import React, { Component } from "react";

import {
  FaGlassMartiniAlt,
  FaHiking,
  FaCaravan,
  FaBirthdayCake,
} from "react-icons/fa";

import Title from "./Title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaGlassMartiniAlt />,
        title: "Free Drinks",
        info:
          "Man bun slow-carb pour-over photo booth tbh you probably haven't heard of them coloring book iceland.",
      },
      {
        icon: <FaHiking />,
        title: "Endess Hiking",
        info:
          "Man bun slow-carb pour-over photo booth tbh you probably haven't heard of them coloring book iceland.",
      },
      {
        icon: <FaCaravan />,
        title: "Free Shuttle",
        info:
          "Man bun slow-carb pour-over photo booth tbh you probably haven't heard of them coloring book iceland.",
      },
      {
        icon: <FaBirthdayCake />,
        title: "Birthday Parties",
        info:
          "Man bun slow-carb pour-over photo booth tbh you probably haven't heard of them coloring book iceland.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

// will go into Home
export default Services;

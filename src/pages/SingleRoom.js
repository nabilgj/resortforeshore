import React, { Component } from "react";
import { Link } from "react-router-dom";

import defaultBcg from "../images/details-4.jpg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";

import { RoomContext } from "../Context";

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;

  // componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3> no rooms available... </h3>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    const [mainImg, ...defaultImg] = images;
    console.log(defaultImg);

    return (
      <React.Fragment>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3> info </h3>
              <h6> price: ${price}</h6>
              <h6> size: {size} per SQFT </h6>
              <h6>
                max capaity:
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6> {pets ? "Pets Allowed" : "Pets Not Allowed"} </h6>
              <h6> {breakfast && "free breakfast included"} </h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item} </li>
            ))}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}

// will go into App
export default SingleRoom;

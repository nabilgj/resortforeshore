import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import defaultImage from "../images/details-4.jpg";

const Room = ({ room }) => {
  const { name, slug, images, price } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImage} alt={`${name} room image`} />
        <div className="price-top">
          <h6>${price}</h6>
          <p> per night </p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number.isRequired,
  }),
};
// will go into FeaturedRooms & RoomList
export default Room;

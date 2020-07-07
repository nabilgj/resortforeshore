import React from "react";

import Room from "./Room";

const RoomList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3> No Rooms Available! </h3>
      </div>
    );
  }

  return (
    <section className="rooms-list">
      <div className="roomslist-center">
        {rooms.map((item) => (
          <Room key={item.id} room={item} />
        ))}
      </div>
    </section>
  );
};

// will go into RoomsContainer
export default RoomList;

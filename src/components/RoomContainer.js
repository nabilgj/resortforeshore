import React from "react";

import { withRoomConsumer } from "../Context";

import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "./Loading";

const RoomContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
};

// will go into Rooms page
export default withRoomConsumer(RoomContainer);

// import React from "react";

// import { RoomConsumer } from "../Context";

// import RoomFilter from "./RoomFilter";
// import RoomList from "./RoomList";
// import Loading from "./Loading";

// const RoomContainer = () => {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             hello from Rooms Container
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// };

// // will go into Rooms page
// export default RoomContainer;

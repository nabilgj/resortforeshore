import React, { Component } from "react";
// import items from "./data";
import Client from "./Contentfull";

const RoomContext = React.createContext();

// access to 2 components
// 1st is Provider and 2nd is Consumer

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  // from external data like Contentful
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoomExample",
        // order: "sys.createdAt",
        // order: "fields.price",
        order: "-fields.price",
      });

      // this below code formatting data
      // which is coming from items thats imported from js file
      let rooms = this.formatData(response.items);
      console.log(rooms);

      // accessing featured rooms by filtering
      let featuredRooms = rooms.filter((room) => room.featuredRooms === true);

      let maxPrice = Math.max(...rooms.map((item) => item.price));
      let maxSize = Math.max(...rooms.map((item) => item.size));

      this.setState({
        rooms,
        featuredRooms: featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice: maxPrice,
        maxSize: maxSize,
      });
      console.log(rooms);
      console.log(featuredRooms);
    } catch (error) {
      console.log(error);
    }
  };

  // accessing data internally
  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images: images, id: id };
      return room;
    });
    return tempItems;
  }

  // will use this function in SingleRoom
  // to extract values from a slug/url
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  // going into RoomsFilter
  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = e.target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };

  // being used for filtering rooms and sorting
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;

    // for all room
    let tempRooms = [...rooms];

    // transform value
    capacity = parseInt(capacity);
    price = parseInt(price);

    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    // filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);

    // filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    // filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    // filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    // change state
    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

// consumed in RoomContainer as functional Component
const RoomConsumer = RoomContext.Consumer;

// hoc for context api
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

// will be consumed in different components to share data
// 1st it will wrap parent component as Provider
export { RoomProvider, RoomConsumer, RoomContext };

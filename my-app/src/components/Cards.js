import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import img from "../images/img-9.jpg";
import img2 from "../images/img-6.jpg";
function Cards() {

  const fakedata = [
    {
      src: img,
      label: "Adventure",
      path: "/services",
      text: "Explore the hidden waterfall deep inside the Amazon Jungle",
    },
    {
      src: img2,
      label: "Adventure",
      path: "/services",
      text: "Explore the hidden waterfall deep inside the Amazon Jungle",
    },
  ];
  const fakedata2 = [
    {
      src: img,
      label: "Adventure",
      path: "/services",
      text: "Explore the hidden waterfall deep inside the Amazon Jungle",
    },
    {
      src: img2,
      label: "Adventure",
      path: "/services",
      text: "Explore the hidden waterfall deep inside the Amazon Jungle",
    },
    {
      src: img,
      label: "Adventure",
      path: "/services",
      text: "Explore the hidden waterfall deep inside the Amazon Jungle",
    },
  ];

  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {fakedata.map((item, sa) => (
              <CardItem key={(() => `${sa}`)()} {...item} />
            ))}
           
            {/* <CardItem
              src={img}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={img} 
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            /> */}
          </ul>
          <ul className="cards__items">
            {fakedata2.map((item, xb) => (
              <CardItem key={(() => `${xb}`)()} {...item}/>
            ))}
            {/* <CardItem
              src={img}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={img}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={img}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

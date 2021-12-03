import React, { useEffect, useState } from "react";
// glide
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from "@glidejs/glide";
// images
import moon_0 from "../assets/destination/image-moon.png";
import mars_1 from "../assets/destination/image-mars.png";
import europa_2 from "../assets/destination/image-europa.png";
import titan_3 from "../assets/destination/image-titan.png";
// get data
import { getData } from "../Api/Api";

function Destionations() {
  const [destinations, setDestinations] = useState([]);
  let glide;

  useEffect(() => {
    getData()
      .then((res) => {
        setDestinations(res.data.destinations);
      })
      .then(() => glide.mount());
    glide = new Glide(".glide", {
      perView: 1,
      type: "carousel",
    });
  }, []);

  const getImage = (i) => {
    let array = [moon_0, mars_1, europa_2, titan_3];
    return array[i];
  };

  return (
    <div className="wrapper">
      <h2 className="destination__heading">
        <span className="destination__heading__number">01</span>
        PICK YOUR DESTINATION
      </h2>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {destinations.map((destination, i) => {
              return (
                <li key={i} className="glide__slide">
                  <div className="destination__imageWrapper">
                    <img className="destination__image" src={getImage(i)} />
                  </div>
                  <div
                    className="glide__bullets sliderButtons__wrapper"
                    data-glide-el="controls[nav]"
                  >
                    <button
                      className="glide__bullet sliderButton "
                      data-glide-dir="=0"
                    >
                      MOON
                    </button>
                    <button
                      className="glide__bullet sliderButton"
                      data-glide-dir="=1"
                    >
                      MARS
                    </button>
                    <button
                      className="glide__bullet sliderButton"
                      data-glide-dir="=2"
                    >
                      EUROPA
                    </button>
                    <button
                      className="glide__bullet sliderButton"
                      data-glide-dir="=3"
                    >
                      TITAN
                    </button>
                  </div>
                  <div className="destination__destInfo">
                    <h1 className="destination__destName">
                      {destination.name.toUpperCase()}
                    </h1>
                    <p className="destination__destDescription">
                      {destination.description}
                    </p>
                    <hr className="destination__hr" />
                    <div className="destination__traveldata">
                      <div className="destination__traveldata__distance">
                        <h6>AVG. DISTANCE</h6>
                        <h5>{destination.distance.toUpperCase()}</h5>
                      </div>
                      <div className="destination__traveldata__time">
                        <h6>EST. TRAVEL TIME</h6>
                        <h5>{destination.travel.toUpperCase()}</h5>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Destionations;

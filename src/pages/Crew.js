import React, { useState, useEffect } from "react";
// glide
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from "@glidejs/glide";

import { getData } from "../Api/Api";
// images
import crew_0 from "../assets/crew/image-douglas-hurley.png";
import crew_1 from "../assets/crew/image-mark-shuttleworth.png";
import crew_2 from "../assets/crew/image-victor-glover.png";
import crew_3 from "../assets/crew/image-anousheh-ansari.png";

function Crew() {
  const [crew, setCrew] = useState([]);

  let glide;

  useEffect(() => {
    getData()
      .then((res) => {
        setCrew(res.data.crew);
      })
      .then(() => glide.mount());
    glide = new Glide(".glide", {
      perView: 1,
      type: "carousel",
    });
  }, []);
  const getImage = (i) => {
    let array = [crew_0, crew_1, crew_2, crew_3];
    return array[i];
  };

  return (
    <div className="crewPage">
      <div className="wrapper">
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {crew.map((crewmember, i) => {
                return (
                  <li className="glide__slide" key={i}>
                    <h4>
                      <span>02</span>MEET YOUR CREW
                    </h4>
                    <div className="crewPage__crewmember">
                      <div className="crewPage__info">
                        <h3>{crewmember.role.toUpperCase()}</h3>
                        <h2>{crewmember.name.toUpperCase()}</h2>
                        <p className="crewPage__bio">{crewmember.bio}</p>
                      </div>
                      <div
                        className="glide__bullets"
                        data-glide-el="controls[nav]"
                      >
                        <button
                          className="glide__bullet circleBullets "
                          data-glide-dir="=0"
                        ></button>
                        <button
                          className="glide__bullet circleBullets "
                          data-glide-dir="=1"
                        ></button>
                        <button
                          className="glide__bullet circleBullets"
                          data-glide-dir="=2"
                        ></button>
                        <button
                          className="glide__bullet circleBullets"
                          data-glide-dir="=3"
                        ></button>
                      </div>
                      <div className="crewPage__imageWrapper">
                        <img
                          className="crewPage__image"
                          src={getImage(i)}
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;

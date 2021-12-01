import React, { useState, useEffect } from "react";
// images
import img_1 from "../assets/technology/image-launch-vehicle-landscape.jpg";
import img_2 from "../assets/technology/image-space-capsule-landscape.jpg";
import img_3 from "../assets/technology/image-spaceport-landscape.jpg";
// images for large screen size
import img_1xl from "../assets/technology/image-launch-vehicle-portrait.jpg";
import img_2xl from "../assets/technology/image-space-capsule-portrait.jpg";
import img_3xl from "../assets/technology/image-spaceport-portrait.jpg";
//  glide
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from "@glidejs/glide";
// api
import { getData } from "../Api/Api";

function Technology() {
  const [images, setImages] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  let glide;
  useEffect(() => {
    setImage();
    getData()
      .then((res) => {
        setTechnologies(res.data.technology);
      })
      .then(() => glide.mount());
    glide = new Glide(".glide", {
      perView: 1,
      type: "carousel",
    });

    window.addEventListener("resize", setImage);
    return (_) => {
      window.removeEventListener("resize", setImage);
    };
  }, []);

  const setImage = (e) => {
    if (window.innerWidth < 768) {
      setImages([img_1, img_2, img_3]);
    } else {
      setImages([img_1xl, img_2xl, img_3xl]);
    }
  };
  const getImage = (i) => {
    return images[i];
  };

  return (
    <div className="wrapper">
      <h3>
        <span>03</span>
        SPACE LAUNCH 101
      </h3>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {technologies.map((technology, i) => {
              return (
                <li className="glide__slide" key={i}>
                  <div className="technology__imgWrapper">
                    <img className="technology__img" src={getImage(i)} alt="" />
                  </div>
                  <div className="technology__body">
                    <div
                      className="glide__bullets"
                      data-glide-el="controls[nav]"
                    >
                      <button className="glide__bullet" data-glide-dir="=0">
                        1
                      </button>
                      <button className="glide__bullet" data-glide-dir="=1">
                        2
                      </button>
                      <button className="glide__bullet" data-glide-dir="=2">
                        3
                      </button>
                    </div>
                    <div className="technology__textContent">
                      <h6>THE TERMINOLOGY ...</h6>
                      <h5>{technology.name.toUpperCase()}</h5>
                      <p>{technology.description}</p>
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

export default Technology;

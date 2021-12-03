import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="wrapper">
      <div className="home__heading">
        <h3>SO, YOU WANT TO TRAVEL TO</h3>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link to="/destination" className="home__circleBtn">
        <span className="home__circleBtn__text">EXPLORE</span>
      </Link>
    </div>
  );
}
export default HomePage;

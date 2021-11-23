import React, { useEffect } from "react";

function HomePage() {
  return (
    <div className="homePage">
      <h3>SO, YOU WANT TO TRAVEL TO</h3>
      <h2>SPACE</h2>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <button className="homePage__circleBtn">
        <span className="homePage__circleBtn__text">EXPLORE</span>
      </button>
    </div>
  );
}
export default HomePage;

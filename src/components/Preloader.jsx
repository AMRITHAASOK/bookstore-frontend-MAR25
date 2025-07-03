import React from "react";
import img from "../assets/bookAnimation.gif";
function Preloader() {
  return (
    <div>
      <div className="flex flex-row bg-amber-100 h-300">
        <div className="basis-128"></div>
        <div className="basis-64 justify-center mt-60 p-5">
          <img src={img} alt="" />
          <h1>Welcome to Story Harbor</h1>
        </div>
        <div className="basis-128"></div>
      </div>
    </div>
  );
}

export default Preloader;

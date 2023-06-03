import React from "react";
import "./Hero.css"
import {HiLocationMarker} from "react-icons/hi"
import CountUp from "react-countup"

const Hero = () => {
  return (
    <section className="hero-wrappper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>Discover <br /> Most Suitable <br /> Property</h1>
          </div>
          <div className="flexColStart secondaryText hero-desc">
            <span>Find a variety of properties that suit you very easilty </span>
           
            <span>Forget all difficulties in finding a residence for you </span>
          </div>
          
          <div className="flexCenter search-bar">
            <HiLocationMarker  color="var(--blue)" size={25}></HiLocationMarker>
            <input type="text"  />
            <button className="button" >Search</button>
          </div>
          <div className="flexCenter stats">
             <div className="flexColCenter stat">
              <span>
                <CountUp start={8000} end={9000} duration={4} ></CountUp>
                <span>+</span>
              </span>
              <span className="secondaryText">
                Premium Products
              </span>
             </div>
             <div className="flexColCenter stat">
              <span>
                <CountUp start={1940} end={2000} duration={4} ></CountUp>
                <span>+</span>
              </span>
              <span className="secondaryText">
                Happy Costumer
              </span>
             </div>
             <div className="flexColCenter stat">
              <span>
                <CountUp  end={28} ></CountUp>
                <span>+</span>
              </span>
              <span className="secondaryText">
                Award Winning
              </span>
             </div>
             
          </div>

        </div>
        <div className="flexCenter hero-right">
          <div className="image-conatiner">
            <img src="./hero-image.png" alt="" height="100%" width="100%" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
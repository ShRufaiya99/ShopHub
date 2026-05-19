import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="flex gap-8">
          <div className="w-148 mt-38.5">
            <h1 className="hero-h1 ">Summer Sale</h1>
            <p className="hero-p">
              Up to 70% off on selected items. Limited time offer!
            </p>
            <button className="hero-btn ">Shop Now</button>
          </div>
          <div className="pt-22.5">
          <img  src="public/img/hero.png" alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

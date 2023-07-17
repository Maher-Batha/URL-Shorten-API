import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img
        src="./images/illustration-working.svg"
        alt="working"
        className="hero-image"
      />
      <div className="container">
        <div className="text">
          <h1>More than just shortner links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn">get started</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

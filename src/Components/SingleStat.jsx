import React from "react";

const SingleStat = ({ image, title, info }) => {
  return (
    <article className="stat">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{info}</p>
    </article>
  );
};

export default SingleStat;

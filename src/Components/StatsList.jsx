import React from "react";
import { allStats } from "../data";
import SingleStat from "./SingleStat";
const StatsList = () => {
  return (
    <div className="stats-list">
      {allStats.map((item, index) => {
        const { title, info, image } = item;
        return (
          <SingleStat title={title} info={info} image={image} key={index} />
        );
      })}
    </div>
  );
};

export default StatsList;

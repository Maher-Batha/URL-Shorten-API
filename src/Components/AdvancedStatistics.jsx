import React from "react";
import StatsList from "./StatsList";

const AdvancedStatistics = () => {
  return (
    <div className="container advanced">
      <div className="text">
        <h2>advanced statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <StatsList />
    </div>
  );
};

export default AdvancedStatistics;

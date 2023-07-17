import React from "react";
import SingleGeneratedLink from "./SingleGeneratedLink";

const GeneratedLinks = ({ allLinks }) => {
  return (
    <div className="container">
      <ul className="all-links">
        {allLinks.map((item, index) => {
          const { full_short_link, original_link } = item;
          return (
            <SingleGeneratedLink
              key={index}
              short={full_short_link}
              original={original_link}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default GeneratedLinks;

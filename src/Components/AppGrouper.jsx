import React, { useState } from "react";
import AdvancedStatistics from "./AdvancedStatistics";
import LinkShortner from "./LinkShortner";
import axios from "axios";
import GeneratedLinks from "./GeneratedLinks";

const apiURL = "https://api.shrtco.de/v2/shorten?url=";
const AppGrouper = () => {
  const [shortenedURLs, setShortenedURLs] = useState([]);
  const handleShorten = async (value) => {
    const { url } = value;
    const response = await axios.get(`${apiURL}${url}`);
    const { result } = await response.data;
    setShortenedURLs((prevState) => {
      return [...prevState, result];
    });
  };
  return (
    <section className="app-grouper">
      <LinkShortner onShorten={handleShorten} />
      <GeneratedLinks allLinks={shortenedURLs} />
      <AdvancedStatistics />
    </section>
  );
};

export default AppGrouper;

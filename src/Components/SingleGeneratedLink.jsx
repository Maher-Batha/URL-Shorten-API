import React, { useState } from "react";

const SingleGeneratedLink = ({ short, original }) => {
  const [isCopied, setIsCopied] = useState("default");
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`${short}`);
        setIsCopied("success");
      } catch (error) {
        setIsCopied("error");
      }
    } else {
      setIsCopied("failure");
    }
  };
  return (
    <li className="single-link">
      <p className="original-link">{original}</p>
      <div className="short-link">
        <a href={short}>{short}</a>
        <button onClick={saveToClipboard} className={isCopied}>
          {isCopied === "default"
            ? "copy"
            : isCopied === "error"
            ? "error"
            : "copied"}
        </button>
      </div>
    </li>
  );
};

export default SingleGeneratedLink;

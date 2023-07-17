import React, { useState } from "react";

const LinkShortner = ({ onShorten }) => {
  const [formState, setFormState] = useState("default");
  const urlRegex =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/;
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUrl = Object.fromEntries(formData);
    if (!newUrl.url.trim().match(urlRegex)) {
      setFormState("error");
      e.currentTarget.reset();
      return;
    }
    setFormState("success");
    e.currentTarget.reset();
    onShorten(newUrl);
  };
  return (
    <div className="container link-shortner">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="url"
          id="shortner"
          placeholder="shorten a link here"
          className={`form-input ${formState}`}
        />
        <button type="submit" className="form-btn">
          shorten it!
        </button>
      </form>
    </div>
  );
};

export default LinkShortner;

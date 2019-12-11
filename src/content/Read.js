import React from "react";
import info from "./info";

function Read() {
  const content = info.read.map(({ id, link, text }) => (
    <p key={id}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </p>
  ));
  return (
    <div className="content">
      {content}
    </div>
  );
}

export default Read;

import React from "react";
import info from "./info";

function Mixes() {
  const content = info.mixes.map(({ id, link, text }) => (
    <p key={id}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </p>
  ));
  return <div className="content">{content}</div>;
}

export default Mixes;

import React from "react";
import info from "./info";

function Photos() {
  const content = info.photos.map(({ id, src, description }) => (
    <figure key={id}>
      <img src={src} alt="By me" />
      <figcaption>{description}</figcaption>
    </figure>
  ));
  return <div className="content">{content}</div>;
}

export default Photos;

import React from "react";
import info from "./info";

function Videos() {
  const content = info.videos.map(({ id, link }) => (
    <iframe
      key={id}
      title={id}
      width={360}
      height={202}
      src={link}
      frameBorder={0}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ));
  return <div className="content">{content}</div>;
}

export default Videos;

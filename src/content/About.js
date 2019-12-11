import React from "react";
import info from "./info";

function About() {
  const content = info.about.map(({ id, text }) => <p key={id}>{text}</p>);
  return <div className="content">{content}</div>;
}

export default About;

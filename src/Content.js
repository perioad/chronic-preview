import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./content/About";
import Dates from "./content/Dates";
import Mixes from "./content/Mixes";
import Photos from "./content/Photos";
import Videos from "./content/Videos";
import Read from "./content/Read";
import Contact from "./content/Contact";
import Default from "./content/Default";

function Content() {
  return (
    <Switch>
      <Route path="/" exact>
        <About />
      </Route>
      <Route path="/dates">
        <Dates />
      </Route>
      <Route path="/mixes">
        <Mixes />
      </Route>
      <Route path="/photos">
        <Photos />
      </Route>
      <Route path="/videos">
        <Videos />
      </Route>
      <Route path="/read">
        <Read />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route>
        <Default />
      </Route>
    </Switch>
  );
}

export default Content;

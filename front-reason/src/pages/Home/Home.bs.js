'use strict';

var React = require("react");

function Home(Props) {
  return React.createElement("h1", undefined, "Home");
}

var make = Home;

exports.make = make;
/* react Not a pure module */

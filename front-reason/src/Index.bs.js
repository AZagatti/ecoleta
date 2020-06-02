'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var Routes$ReasonReactExamples = require("./Routes.bs.js");

function Index$App(Props) {
  return React.createElement(Routes$ReasonReactExamples.make, { });
}

var App = {
  make: Index$App
};

ReactDOMRe.renderToElementWithId(React.createElement(Index$App, { }), "root");

exports.App = App;
/*  Not a pure module */

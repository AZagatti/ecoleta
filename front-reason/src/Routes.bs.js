'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var Nav$ReasonReactExamples = require("./components/Nav/Nav.bs.js");
var Home$ReasonReactExamples = require("./pages/Home/Home.bs.js");
var Dashboard$ReasonReactExamples = require("./pages/Dashboard/Dashboard.bs.js");

function Routes(Props) {
  var url = ReasonReactRouter.useUrl(undefined, undefined);
  console.log(url);
  var match = url.path;
  var tmp;
  tmp = match ? (
      match[0] === "dashboard" ? (
          match[1] ? React.createElement(Home$ReasonReactExamples.make, { }) : React.createElement(Dashboard$ReasonReactExamples.make, { })
        ) : React.createElement(Home$ReasonReactExamples.make, { })
    ) : React.createElement(Home$ReasonReactExamples.make, { });
  return React.createElement("div", undefined, React.createElement(Nav$ReasonReactExamples.make, { }), tmp);
}

var make = Routes;

exports.make = make;
/* react Not a pure module */

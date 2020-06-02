'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");

function Nav(Props) {
  return React.createElement("header", undefined, React.createElement("a", {
                  onClick: (function (param) {
                      return ReasonReactRouter.push("/");
                    })
                }, "Home"), React.createElement("a", {
                  onClick: (function (param) {
                      return ReasonReactRouter.push("/dashboard");
                    })
                }, "Dashboard"));
}

var make = Nav;

exports.make = make;
/* react Not a pure module */

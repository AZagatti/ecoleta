'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");

function handleClick(href, _event) {
  return ReasonReactRouter.push(href);
}

function Link(Props) {
  var name = Props.name;
  var href = Props.href;
  return React.createElement("a", {
              onClick: (function (param) {
                  return ReasonReactRouter.push(href);
                })
            }, name);
}

var make = Link;

exports.handleClick = handleClick;
exports.make = make;
/* react Not a pure module */

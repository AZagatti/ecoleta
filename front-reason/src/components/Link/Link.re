let handleClick = (href, _event) => {
  ReasonReactRouter.push(href);
};

[@react.component]
let make = (~name, ~href) => {
  <a onClick={handleClick(href)}> {React.string(name)} </a>;
};
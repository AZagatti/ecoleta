[@react.component]
let make = () => {
  <header>
    <a onClick={(_) => ReasonReactRouter.push("/")}> {React.string("Home")} </a>
    <a onClick={(_) => ReasonReactRouter.push("/dashboard")}> {React.string("Dashboard")} </a>
  </header>;
};
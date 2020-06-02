type route =
  | Home
  | Dashboard;

[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();

  Js.log(url);

  <div>
    <Nav />
    {switch (url.path) {
     | [] => <Home />
     | ["dashboard"] => <Dashboard />
     | _ => <Home />
     }}
  </div>;
};
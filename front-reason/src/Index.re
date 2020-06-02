module App = {
  [@react.component]
  let make = () => {
    <Routes />;
  };
};

ReactDOMRe.renderToElementWithId(<App />, "root");
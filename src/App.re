module Router = {
  [@react.component] [@bs.module "pages/Router"]
  external make: _ => React.element = "default";
};

module Header = {
  [@react.component] [@bs.module "components"]
  external make: _ => React.element = "Header";
};

module Wrapper = {
  [@react.component] [@bs.module "components"]
  external make: (~children: React.element) => React.element = "Wrapper";
}

let make = () => {
  <> <Header /> <Wrapper> <Router /> </Wrapper> </>;
};

let default = make;

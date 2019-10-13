module Router = {
  [@react.component] [@bs.module "pages/Router"]
  external make: _ => React.element = "default";
};

module Wrapper = {
  [@react.component] [@bs.module "components"]
  external make: (~children: React.element) => React.element = "Wrapper";
};

let make = () => {
  let title = "Warpokex";
  <> <Header title /> <Wrapper> <Router /> </Wrapper> </>;
};

/** @todo remove if Index.re is done **/
let default = make;

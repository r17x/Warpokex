module ThemeProvider = {
  [@react.component] [@bs.module "atomize"]
  external make: (~children: React.element, ~theme:'theme) => React.element = "ThemeProvider";
};

module StyleReset = {
  [@react.component] [@bs.module "atomize"]
  external make: _ => React.element = "StyleReset";
};


[@bs.deriving abstract]
type m = {
  b: string,
  t: string,
  r: string,
  l: string,
};

module Div = {
  [@react.component] [@bs.module "atomize"]
  external make:
    (
      ~w: string=?,
      ~bg: string=?,
      ~textAlign: string=?,
      ~children: React.element
    ) =>
    React.element =
    "Div";
};

module Text = {
  [@react.component] [@bs.module "atomize"]
  external make:
    (
      ~tag: string=?,
      ~textSize: string=?,
      ~textColor: string=?,
      ~m: m=?,
      ~children: React.element
    ) =>
    React.element =
    "Text";
};

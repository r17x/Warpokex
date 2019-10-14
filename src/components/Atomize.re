module ThemeProvider = {
  [@react.component] [@bs.module "atomize"]
  external make: (~children: React.element, ~theme: 'theme) => React.element =
    "ThemeProvider";
};

module StyleReset = {
  [@react.component] [@bs.module "atomize"]
  external make: _ => React.element = "StyleReset";
};

[@bs.deriving abstract]
type m = {
  [@bs.optional]
  b: string,
  [@bs.optional]
  t: string,
  [@bs.optional]
  r: string,
  [@bs.optional]
  l: string,
  [@bs.optional]
  x: string,
  [@bs.optional]
  y: string,
  [@bs.optional]
  xs: string,
  [@bs.optional]
  md: string,
};

module Div = {
  [@react.component] [@bs.module "atomize"]
  external make:
    (
      ~w: string=?,
      ~bg: string=?,
      ~textAlign: string=?,
      ~p: m=?,
      ~m: m=?,
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
      ~color: string=?,
      ~m: m=?,
      ~children: React.element
    ) =>
    React.element =
    "Text";
};

module Tag = {
  [@react.component] [@bs.module "atomize"]
  external make:
    (
      ~rounded: string=?,
      ~bg: string=?,
      ~m: m=?,
      ~p: m=?,
      ~textSize: string=?,
      ~textColor: string=?,
      ~children: React.element
    ) =>
    React.element =
    "Tag";
};

module Col = {
  [@react.component] [@bs.module "atomize"]
  external make:
    (~size: string=?, ~onClick: unit => unit, ~children: React.element) =>
    React.element =
    "Col";
};

module Row = {
  [@react.component] [@bs.module "atomize"]
  external make: (~m: m=?, ~p: m=?, ~children: React.element) => React.element =
    "Row";
};

module Image = {
  [@react.component] [@bs.module "atomize"]
  external make: (~src: string=?) => React.element =
    "Image";
}

module Label = {
  [@react.component] [@bs.module "atomize"]
  external make: (~color: string=?, ~children: React.element) => React.element =
    "Label";
}

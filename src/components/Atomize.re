[@bs.deriving abstract]
type m = {
  b: string,
  t: string,
  r: string,
  l: string,
};

module Div = {
  [@bs.obj]
  external makeProps:
    (~w: 'w, ~bg: 'bg, ~textAlign: 'textAlign, unit) =>
    {
      .
      "w": 'w,
      "bg": 'bg,
      "textAlign": 'textAlign,
    } =
    "";
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
  [@bs.obj]
  external makeProps:
    (~tag: 'tag, ~textColor: 'textColor, ~textSize: 'textSize,~m: 'm) =>
    {
      .
      "tag": 'tag,
      "textColor": 'textColor,
      "textSize": 'textSize,
      "m": 'm,
    } =
    "";

  [@react.component] [@bs.module "atomize"]
  external make:
    (~tag: string=?, 
     ~textSize: string=?,
     ~textColor: string=?, 
     ~m:m=?,
     ~children: React.element,) =>
    React.element =
    "Text";
};

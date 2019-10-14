open Atomize;

type pokeType =
  | Water
  | Fire
  | Grass
  | Flying;

let getColor = (color: pokeType) =>
  switch (color) {
  | Water => "info"
  | Fire => "danger"
  | Grass => "success"
  | Flying => "warning"
  };

[@react.component]
let renderItem = (~number, ~name, ~image, ~types, ~id, ~size, ~onClick) => {
  let p = m(~l=".5rem", ~r=".5rem", ~t=".5rem", ~b=".5rem", ());
  let m = p;
  <Col size onClick>
    <Div p m>
      <Image src=image />
      <Text tag="h1" color="black"> {{number ++ name}->React.string} </Text>
    </Div>
  </Col>;
};

let listToReactArray = (list, func) => {
  let result = [||];
  List.iter(item => result |> Js.Array.push(func(item)) |> ignore, list);
  React.array(result);
};

[@react.component]
let make = (~data , ~onClick) => {
  let p = m(~xs=".5rem", ~md="1rem", ());
  <Row p> data->listToReactArray(d => renderItem(d))</Row>;
};

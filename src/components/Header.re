open Atomize;

[@react.component]
let make = (~title: string) => {
  <Div w="100%" bg="black500" textAlign="center">
    <Text
      tag="h1"
      textColor="white"
      textSize="display1"
      m={m(~b="4rem", ~r="0", ~t="0", ~l="0")}>
      title->React.string
    </Text>
  </Div>;
};

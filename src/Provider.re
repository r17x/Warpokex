open Atomize;
open Apollo;

[@bs.module "services/graph"] external client: 'client = "default";
[@bs.module "theming"] external theme:  'theme = "theme"

[@react.component]
let make = (~children: React.element) => {
  <ThemeProvider theme>
    <StyleReset />
    <ApolloProvider client> children </ApolloProvider>
  </ThemeProvider>;
};

let default = make 

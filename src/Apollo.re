module ApolloProvider = {
    [@react.component][@bs.module "react-apollo"]
    external make: (~children: React.element, ~client:'client) => React.element = "ApolloProvider"
}

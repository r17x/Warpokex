import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import constants from 'constants' 

const configLink = {
  uri: constants.GraphAPI,
}

export default new ApolloClient({
  link: new HttpLink(configLink),
  cache: new InMemoryCache(),
})

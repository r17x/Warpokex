import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { fragmentCacheRedirect } from 'apollo-link-state-fragment'
import constants from 'constants.js'

const configLink = new HttpLink({
  uri: constants.graphAPI,
})

export default new ApolloClient({
  link: configLink,
  cache: new InMemoryCache({
    cacheRedirects: {
      Query: {
        ...fragmentCacheRedirect(),
      },
    },
  }),
})

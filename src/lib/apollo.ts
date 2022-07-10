import { ApolloClient, InMemoryCache } from "@apollo/client";
import { onError } from 'apollo-link-error'


const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message))
  })

export const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_ACESS_TOKEN}`
    },

    cache: new InMemoryCache()
})
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

// configure an ApolloClient
const AppApolloClient = new ApolloClient({
  link: new HttpLink({ uri: process.env.REACT_APP_API_URL }),
  cache: new InMemoryCache(),
});

export default AppApolloClient;

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Routes from '../../routes/Routes';
import AppApolloClient from './AppApolloClient';

const AppApolloProvider = () => (
  <ApolloProvider client={AppApolloClient}>
    <Routes />
  </ApolloProvider>
);

export default AppApolloProvider;

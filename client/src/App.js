import React, { Component } from 'react';

import { ApolloProvider } from 'react-apollo';
import { Post } from './modules/post';
import apolloClient from './config/createApolloClient';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Post />
      </ApolloProvider>
    );
  }
}

export default App;

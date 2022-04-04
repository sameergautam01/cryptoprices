
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import DisplayData from './DisplayData';
// import SearchBar from './SearchBar';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphqlzero.almansi.me/api',
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <DisplayData />
    </div>
    </ApolloProvider>
  );
}

export default App;

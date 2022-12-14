import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Races from './pages/Races';
// import RaceByDay from './pages/Races';
import Tournaments from './pages/Tournament';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Payment from './pages/Payment'
import OneRace from './pages/OneRace';
import PlaceBet from './pages/PlaceBet';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <div>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/Home"
                element={<Home />}
              />
              <Route
                path='/races'
                element={<Races />}
              />
              <Route
                path='/events/:eventid'
                element={<Races />}
              />
              <Route
                path='/races/:raceid'
                element={<OneRace />}
              />
              <Route
                path='/tournaments'
                element={<Tournaments />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/payment"
                element={<Payment />}
              />
              <Route 
                path="/Profile" 
                element={<Profile />}
              />
              <Route
                path="/profiles/:profileId"
                element={<Profile />}
              />
              <Route
                path="/placebet/:raceid"
                element={<PlaceBet />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
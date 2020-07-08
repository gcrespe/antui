import React from 'react';
import LoginComponent from './components/LoginComponent/LoginComponent';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const navigator = createStackNavigator({
  Login: {screen: LoginComponent},
  Auth: {screen: Auth},
  Home: {screen: Home},
},
{
  headerMode: "none"
});

const AppContainer = createAppContainer(navigator);

const App = () => {
  return (
      <AppContainer/>
  );
};

export default App;


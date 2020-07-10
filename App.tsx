import React from 'react';
import LoginComponent from './screens/Login/Login';
import Auth from './screens/Login2/Login2';
import Home from './screens/Home/Home';
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


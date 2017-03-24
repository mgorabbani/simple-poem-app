import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import TabScreen from './TabScreen'
import About from './js/About'
import Single from './js/Single'

 

const App = StackNavigator({
  tab: { screen: TabScreen, navigationOptions: {
      header: {
          visible: false
      }
  } },
  about: { screen: About,navigationOptions: {
      title: "About Apps & Privacy Policy",
      
  } },
  single: {screen: Single,navigationOptions: {
      title: ({ state }) => `${state.params.title}`,
      
  }}
}, {
    headerMode: 'screen'
});



Expo.registerRootComponent(App);

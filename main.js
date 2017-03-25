import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import TabScreen from './TabScreen'
import playground from './playground'
import About from './js/About'
import Single from './js/Single'
import store from './js/Store'

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

const Main = ()=> {
    return(
        <App screenProps= {store}/>
    )
}

Expo.registerRootComponent(Main);

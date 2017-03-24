import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import InfoScreen from './js/Info';
import HomeScreen from './js/Home';
import FavScreen from './js/Fav'
import { Octicons } from '@expo/vector-icons';

const RouteConfigs = {
  home: {
    screen: HomeScreen,
    navigationOptions : {
    tabBar: {
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      icon: ({ tintColor }) => (
         <Octicons name="home" size={26} color={tintColor} />
      ),
    },
  }
  },
   fav: {
    screen: FavScreen, 
  },
  info: {
    screen: InfoScreen,
  }
}

const TabNavigatorConfig = {
headerMode: 'screen',

tabBarOptions: {
   indicatorStyle:{backgroundColor:'#fff'},
  inactiveTintColor: '#D4FCEA',
  showLabel: false,
  showIcon:true,
  activeTintColor: 'white',
  labelStyle: {
    fontSize: 12,
  },
  style: {
    backgroundColor: '#12CC7B'
  },
}

}

const App = TabNavigator(RouteConfigs,TabNavigatorConfig);


Expo.registerRootComponent(App);

import Expo from 'expo';
import React from 'react';
import { TabNavigator } from 'react-navigation';
import InfoScreen from './js/Info';
import HomeScreen from './js/List';
import FavScreen from './js/Fav'
import { Octicons,MaterialIcons } from '@expo/vector-icons';

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
     navigationOptions : {
    tabBar: {
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      icon: ({ tintColor }) => (
          <MaterialIcons name="favorite-border" size={26} color={tintColor} />
      ),
    },
  }
  },
  info: {
    screen: InfoScreen,
     navigationOptions : {
    tabBar: {
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      icon: ({ tintColor }) => (
         <MaterialIcons name="filter-list" size={26} color={tintColor} />
      ),
    },
  }
  }
}

const TabNavigatorConfig = {

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

const TabScreen = TabNavigator(RouteConfigs,TabNavigatorConfig);

export default TabScreen;
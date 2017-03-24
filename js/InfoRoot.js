import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import Info from './Info'
import About from './About'
import { Entypo } from '@expo/vector-icons';
 

const Home = StackNavigator({
  info: {
    screen: Info,
    navigationOptions : {
        header: {
            visible:false
        },
    tabBar: {
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      icon: ({ tintColor }) => (
           <Entypo name="list" size={32} color={tintColor} />
      ),
    },
  }
  },
  about: {
    screen: About,
        navigationOptions : {
            tabBar : {
                visible: false
            },
        header: {
            visible:true
        },
    headerMode: 'none'
  }
  },
});
export default Home;
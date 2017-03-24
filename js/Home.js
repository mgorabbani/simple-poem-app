import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import ListScreen from './List'
import SingleScreen from './Single'

 

const Home = StackNavigator({
  list: {
    screen: ListScreen,
    navigationOptions : {
        header: {
            visible:false
        },
    tabBar: {
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      icon: ({ tintColor }) => (
         <Octicons name="home" size={26} color={tintColor} />
      ),
    },
  }
  },
  single: {
    screen: SingleScreen,
  },
},{
      mode:'modal',
      headerMode: 'none'
  });
export default Home;
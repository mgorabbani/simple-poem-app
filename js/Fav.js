import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View,Button,ListItem,StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { MaterialIcons } from '@expo/vector-icons';


export default class List extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            size:12,
            text:`I wanna ফাক you\nFuck you so much!`
        }
    }
     static navigationOptions = {
    tabBar: {
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      icon: ({ tintColor }) => (
         <MaterialIcons name="favorite-border" size={26} color={tintColor} />
      ),
    },
  }
   

  render() {
    return (
      <View style={styles.container}>
         
      <Text>Hello Favorite tor heda!</Text>
            
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

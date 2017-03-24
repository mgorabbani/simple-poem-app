import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View,Button,ListItem } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { MaterialIcons } from '@expo/vector-icons';


export default class About extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            size:12,
            text:`I wanna ফাক you\nFuck you so much!`
        }
    }
  //    static navigationOptions = {
   
  // }
   

  render() {
    return (
      <View style={styles.container}>
         
      <Text>Hello About tor heda!</Text>
            
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
   About.navigationOptions = {
      headerMode:'screen'
   }
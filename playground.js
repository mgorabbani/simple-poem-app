import Expo from 'expo';
import React from 'react';
import { Animated, AsyncStorage } from 'react-native';
import Animation from 'lottie-react-native';

export default class BasicExample extends React.Component {
  componentDidMount() {


    AsyncStorage.getItem('kobitaDB').then((data) => {
      d = JSON.parse(data)
      newData = d.filter(function (el) {
        return el.title !== "suck";
      });
      AsyncStorage.setItem('kobitaDB', JSON.stringify(newData))
      console.log("afte set data", newData)
    });
  }

  render() {
    return (
      <Animation
        ref={animation => { this.animation = animation; }}
        style={{
          width: 200,
          height: 200,
        }}
        source={require('./assets/save.json')}
      />
    );
  }
}
import Expo from 'expo';
import React from 'react';
import { Animated } from 'react-native';
import Animation from 'lottie-react-native';

export default class BasicExample extends React.Component {
  componentDidMount() {
    this.animation.play();
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
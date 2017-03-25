import Expo, {Font} from 'expo';
import React from 'react';

import { Animated,StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Button, ListView, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import poems from './Poems'
const Animation = Expo.DangerZone.Lottie;

import { Octicons } from '@expo/vector-icons';
export default class Single extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        size:16,
        favourite:false,
  progress: new Animated.Value(0)
    };
      this.onPlayPress =  this._startAnimation();
  }

  _startAnimation = () => {
    Animated
      .timing(this.state.progress, {
        toValue: 1,
        duration: 4000
      })
      .start(this._reverseAnimation);
  };
static navigationOptions =  {
    header: {
right: ( <TouchableWithoutFeedback onPress={()=>this.onPlayPress()}>
        <Animation 
        ref={animation => { this.animation = animation; }}
        style={{
          width: 200,
          height: 200,
        }}
        source={require('../assets/love.json')}
      />
      </TouchableWithoutFeedback> ),
style: {
    backgroundColor:'#12CC7B',
},
tintColor: '#fff',
titleStyle: {
    color:'#fff',
    fontFamily:'CharukolaUltraLight'
}
    }
  };

  render() {
    return (
      
            <View style={styles.container}>
           
                <View style={{ alignItems: 'center' }}>
                   
                    {
                        this.props.navigation.state.params.fontLoaded? (
                            <Text style={{ fontSize: 40, padding: 20,fontFamily:'CharukolaUltraLight' }}>{this.props.navigation.state.params.title}</Text>
                        ) : null
                    }
                </View>

                <ScrollView style={{ height: 400,padding:20,paddingTop:0 }}>
                    {
                        this.props.navigation.state.params.fontLoaded ? (
                            <TextInput
                                editable={false}
                                multiline={true}
                                numberOfLines={30}
                                onContentSizeChange={(event) => {
                                    this.setState({ height: event.nativeEvent.contentSize.height });
                                }}

                                style={{ fontSize: this.state.size,lineHeight:34,textAlign:'center', fontFamily:'CharukolaUltraLight',height: Math.max(35, this.state.height) }}
                                value={this.props.navigation.state.params.body}

                            />
                        ) : null
                    }
                </ScrollView>

            </View>
    );
  }
}

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});



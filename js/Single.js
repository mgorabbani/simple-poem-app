import Expo, {Font} from 'expo';
import React from 'react';

import { Animated,StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Button, ListView, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import poems from './Poems'
import Animation from 'lottie-react-native';

import { Octicons } from '@expo/vector-icons';
export default class Single extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        size:16,
        favourite:false
    };

  }


static navigationOptions =  {
    header: ({ state, setState }) => ({
right: (
        <Button
          title={state.favourite ? 'like' : 'liked!'}
          onPress={() => setState({favourite: state.favourite ? false : true})}
        />
   ),
style: {
    backgroundColor:'#12CC7B',
},
tintColor: '#fff',
titleStyle: {
    color:'#fff',
    fontFamily:'CharukolaUltraLight'
}
    }),
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



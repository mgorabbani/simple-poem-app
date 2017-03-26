import Expo, { Font } from 'expo';
import React from 'react';

import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View, ListView, ScrollView,Share } from 'react-native';
import { StackNavigator } from 'react-navigation';
import poems from './Poems'
import { observer } from 'mobx-react/native'

// import Share, { ShareSheet, Button } from 'react-native-share';
import { Ionicons } from '@expo/vector-icons';

@observer
export default class Single extends React.Component {
      _shareMessage: Function;
    constructor(props) {
        super(props)
        this.state = {
            love: true,
            color: !this.props.screenProps.nightMode ? '#282C34' : '#9C9C9E',
            bgColor: this.props.screenProps.nightMode ? '#282C34' : '#fff',
            height: 250,
            size: Number(this.props.screenProps.size),
            visible: false


        };
        if(this.state.visible) {
            
        }
   this._shareMessage = this._shareMessage.bind(this);
    this._setLove = this._setLove.bind(this);
    }

    componentDidMount() {
   this.props.navigation.setParams({ share: this._shareMessage,setLove: this._setLove });

    }

    _setLove(){
        this.props.navigation.setParams({love:!this.props.navigation.state.params.love})
         console.log(this.props.navigation.state.params.body)
    }
    static navigationOptions = {
        header: ({ state,setParams }) => ({
            right: (<View style={{flexDirection:'row'}}>

                <TouchableOpacity onPress={state.params.setLove} style={{ padding: 20 }} >
                    <Ionicons name={!state.params.love ? "md-heart" : "md-heart-outline"} size={35} color={!state.params.love ? "#ff316b" : "#D4FCEA"} />
                </TouchableOpacity>
                 <TouchableOpacity  onPress={state.params.share} style={{ padding: 20}}>
                 <Ionicons name="md-share-alt" size={35} color="#FFFFFF" />
                </TouchableOpacity>
            </View>),
            style: {
                backgroundColor: '#12CC7B',
            },
            tintColor: '#fff',
            titleStyle: {
                color: '#fff',
                fontFamily: 'CharukolaUltraLight'
            }
          })
    };

_shareMessage() {
    Share.share({
      message: this.props.navigation.state.params.body,
      url: 'http://facebook.github.io/react-native/',
      title:this.props.navigation.state.params.title
    }, {
      dialogTitle: 'Share with Your Friends',
    })
    .then(this._showResult)
    .catch((error) => this.setState({result: 'error: ' + error.message}));

  }

    render() {
        return (

        <View style={{ flex: 1, backgroundColor: this.state.bgColor,}}>
            <View style={{ flex: .85 }}>
                <View style={{ alignItems: 'center' }}>

                    {
                        this.props.navigation.state.params.fontLoaded ? (
                            <Text style={{ color: this.state.color, fontSize: 40,paddingTop:10 ,fontFamily: 'CharukolaUltraLight' }}>{this.props.screenProps.fontSize} {this.props.navigation.state.params.title}</Text>
                        ) : null
                    }
                    
                </View>

                <ScrollView style={{ height: 20, padding: 10, paddingTop:0 }}>
                    {
                        this.props.navigation.state.params.fontLoaded ? (
                            <TextInput
                                editable={false}
                                multiline={true}
                                numberOfLines={20}
                                onContentSizeChange={(event) => {
                                    this.setState({ height: event.nativeEvent.contentSize.height });
                                }}

                                style={[this.jewelStyle(), { height: Math.max(35, this.state.height) }]}
                                value={this.props.navigation.state.params.body}

                            />
                        ) : null
                    }
                </ScrollView>
                <View style={{ flex: .15 }}>

   </View>
   </View>
            </View>
        );
    }

    jewelStyle = function () {

        return {
            color: this.state.color,
            fontSize: this.state.size,
            lineHeight: 34,
            textAlign: 'center',
            fontFamily: 'CharukolaUltraLight',
        }
    }

}

import Expo, { Font } from 'expo';
import React from 'react';

import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View, ListView, ScrollView, Share, AsyncStorage, ToastAndroid } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Animation from 'lottie-react-native';
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
            visible: false,
            progress: new Animated.Value(0),


        };
        if (this.state.visible) {

        }
        this._shareMessage = this._shareMessage.bind(this);
        this._setLove = this._setLove.bind(this);




    }



    componentDidMount() {
        this.props.navigation.setParams({ share: this._shareMessage, setLove: this._setLove });

    }

    _setLove() {
        let FAVDATA ={
            title: this.props.navigation.state.params.title,
            body: this.props.navigation.state.params.body
        };
        console.log("Fucking prog",this.state.progress)
         Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 5000,
            }).start();
        AsyncStorage.setItem('PoemDB', JSON.stringify(FAVDATA), () => {
            ToastAndroid.show('কবিতা প্রিয়তে রাখা হয়েছে!', ToastAndroid.SHORT);
        });


    }
    static navigationOptions = {
        header: ({ state, setParams }) => ({
            right: (<View style={{ flexDirection: 'row' }}>

                <TouchableOpacity onPress={state.params.setLove} style={{ paddingTop: 14 }} >
                    <Animation
                        style={{
                        width: 50,
                        height: 50,
                        }}
                         source={require('../assets/save.json')}
                         progress={state.progress}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={state.params.share} style={{ padding: 20 }}>
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
            url: 'http://melopixel.com/apps',
            title: this.props.navigation.state.params.title
        }, {
                dialogTitle: 'Share with Your Friends',
            })
            .then(this._showResult)
            .catch((error) => this.setState({ result: 'error: ' + error.message }));

    }

    render() {
        return (

            <View style={{ flex: 1, backgroundColor: this.state.bgColor, }}>
                <View style={{ flex: .85 }}>
                    <View style={{ alignItems: 'center' }}>

                        {
                            this.props.navigation.state.params.fontLoaded ? (
                                <Text style={{ color: this.state.color, fontSize: 24, paddingTop: 10, fontFamily: 'CharukolaUltraLight' }}>{this.props.screenProps.fontSize} {this.props.navigation.state.params.title}</Text>
                            ) : null
                        }

                    </View>

                    <ScrollView style={{ height: 20, padding: 10, paddingTop: 0 }}>
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
            backgroundColor:'transparent'
        }
    }

}

import Expo, { Font } from 'expo';
import React from 'react';

import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, ListView, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import poems from './Poems'
import { observer } from 'mobx-react/native'


import { Ionicons } from '@expo/vector-icons';

@observer
export default class Single extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            love: false,
            color: !this.props.screenProps.nightMode ? '#282C34' : '#fff',
            bgColor: this.props.screenProps.nightMode ? '#282C34' : '#fff',
            height: 300,
            size: Number(this.props.screenProps.size),
            icon: false,

        };

    }
onLovePress () {
    this.setState({ love: !this.state.love })
    this.props.screenProps.onLovePress()
    console.log("dekh",this.state.love)
}
   
    static navigationOptions = {
       header: ({ state,setParams }) => ({
            right: (<TouchableOpacity onPress={() => setParams({ icon: !state.params.icon})} style={{padding:20}} >
                 <Ionicons name={!state.params.icon ? "md-heart" : "md-heart-outline"} size={35} color={!state.params.icon ? "#ff316b" : "#D4FCEA"} />
            </TouchableOpacity>),
            style: {
                backgroundColor: '#12CC7B',
            },
            tintColor: '#fff',
            titleStyle: {
                color: '#fff',
                fontFamily: 'CharukolaUltraLight'
            }
        }),
    };

    render() {
        return (

            <View style={{ flex: 1, backgroundColor: this.state.bgColor }}>

                <View style={{ alignItems: 'center' }}>

                    {
                        this.props.navigation.state.params.fontLoaded ? (
                            <Text style={{ color: this.state.color, fontSize: 40, padding: 20, fontFamily: 'CharukolaUltraLight' }}>{this.props.screenProps.fontSize} {this.props.navigation.state.params.title}</Text>
                        ) : null
                    }
                </View>

                <ScrollView style={{ height: 400, padding: 20, paddingTop: 0 }}>
                    {
                        this.props.navigation.state.params.fontLoaded ? (
                            <TextInput
                                editable={false}
                                multiline={true}
                                numberOfLines={30}
                                onContentSizeChange={(event) => {
                                    this.setState({ height: event.nativeEvent.contentSize.height });
                                }}

                                style={[this.jewelStyle(), { height: Math.max(35, this.state.height) }]}
                                value={this.props.navigation.state.params.body}

                            />
                        ) : null
                    }
                </ScrollView>

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


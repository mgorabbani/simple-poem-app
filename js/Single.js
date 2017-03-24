import Expo, { Font } from 'expo';
import React from 'react';
import { StyleSheet, TextInput, View, Button, ScrollView, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            size: 15,
            height: 0,
            fontLoaded: false,
        }

    }

    async componentDidMount() {
        await Font.loadAsync({
            'CharukolaUltraLight': require('../assets/fonts/CharukolaUltraLight.ttf'),
        });

        this.setState({ fontLoaded: true });
    }

    render() {
        return (




            <View>

                <View style={{ alignItems: 'center' }}>
                    <Button style={{ margin: 20 }} onPress={() => {
                        this._increaseFont()
                    }} title="Biggner" />
                    <Button style={{ margin: 20 }} onPress={() => {
                        this._decreaseFont()
                    }} title="Smaller" />
                    {
                        this.state.fontLoaded ? (
                            <Text style={{ fontSize: 40, padding: 20 }}>{this.props.navigation.state.params.title}</Text>
                        ) : null
                    }
                </View>

                <ScrollView style={{ height: 400 }}>
                    {
                        this.state.fontLoaded ? (
                            <TextInput
                                editable={false}
                                multiline={true}
                                numberOfLines={30}
                                onContentSizeChange={(event) => {
                                    this.setState({ height: event.nativeEvent.contentSize.height });
                                }}

                                style={{ fontSize: this.state.size, height: Math.max(35, this.state.height) }}
                                value={this.props.navigation.state.params.body}

                            />
                        ) : null
                    }
                </ScrollView>

            </View>

        );
    }

    _increaseFont() {
        this.setState({
            size: this.state.size + 2
        })
    }
    _decreaseFont() {
        this.setState({
            size: this.state.size - 2
        })
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#fff',


    },
});

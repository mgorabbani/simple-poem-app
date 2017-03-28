import Expo, { Font } from 'expo';
import React from 'react';

import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Button, ListView, ScrollView, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import poems from './Poems'

import { Octicons } from '@expo/vector-icons';



export default class List extends React.Component {

  constructor(props) {

    super(props)
    this.state = {
      counter: 1,
      fontLoaded: false,
    };

  }


  async componentWillMount() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    await Font.loadAsync({
      'CharukolaUltraLight': require('../assets/fonts/CharukolaUltraLight.ttf'),
    });


    this.setState({ fontLoaded: true });
    await AsyncStorage.getItem('PoemDB').then((data) => {
      
      this.setState({dataSource: ds.cloneWithRows(JSON.parse(data))})

    });


  }



  render() {

    console.log(this.state.dataSource )
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center', backgroundColor: "#12CC7B", padding: 10 }}>
          {
            this.state.fontLoaded ? (
              <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'CharukolaUltraLight' }}> প্রিয় কবিতা </Text>
            ) : null

          }
        </View>
 { 
            this.state.dataSource ? (
        <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this._renderScene(rowData)}
          />
             ) : null

          }
      </View>
    );
  }

  _renderScene(rowData) {
    console.log("mone hoy kaj korer!",rowData)
    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('single', { title: rowData.title, body: rowData.body })}>
        <View style={{ alignItems: 'center', paddingTop: 20, paddingBottom: 20, flexDirection: 'row', borderBottomWidth: 1, borderColor: '#f7f7f7' }}>
          {
            this.state.fontLoaded ? (
              <Text style={{ marginLeft: 15, fontFamily: 'CharukolaUltraLight' }}>{this.state.counter++} {rowData}</Text>
            ) : null
          }
        </View>
      </TouchableWithoutFeedback>)
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
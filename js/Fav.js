import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Button, ListView, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import poems from './Poems'

import { Octicons } from '@expo/vector-icons';
export default class List extends React.Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(poems)
    };

  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems:'center',backgroundColor:"#12CC7B",padding:10}}>
          <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}> প্রিয় কবিতা গুলি  </Text>
        </View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this._renderScene(rowData)}
          />
      </View>
    );
  }

  _renderScene(rowData) {
    return (
    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('single', { title: rowData.title, body: rowData.body })}>
      <View style={{ alignItems: 'center', paddingTop: 20, paddingBottom: 20, flexDirection: 'row', borderBottomWidth: 1, borderColor: '#f7f7f7' }}>
        <Text style={{ marginLeft: 15, fontWeight: '600' }}>{rowData.title}</Text>
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

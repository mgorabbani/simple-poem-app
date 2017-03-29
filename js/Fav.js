import Expo, { Font } from 'expo';
import React from 'react';

import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Button, ListView, ScrollView, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import poems from './Poems'
import { observer } from 'mobx-react/native'
import { Octicons } from '@expo/vector-icons';


const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
@observer
export default class List extends React.Component {

  constructor(props) {

    super(props)
    this.state = {
      counter: 1,
      fontLoaded: false,
      isFav : false,
    };
         AsyncStorage.getItem('kobitaDB').then((data) => {
       newData = JSON.parse(data)
        console.log("Favourite dataaa:",newData.length)
        if (0 < newData.length) { 
        
          this.setState({dataSource: ds.cloneWithRows(newData),isFav:true})

        }
       
    });
  }

//  AsyncStorage.getItem('kobitaDB').then((data) => {
//             newData = JSON.parse(data)
//             let ds = {
//                 title: this.props.navigation.state.params.title,
//                 body: this.props.navigation.state.params.body
//             };
//             newData.push(ds)
//             AsyncStorage.setItem('kobitaDB', JSON.stringify(newData), () => {
//                 ToastAndroid.show('কবিতা প্রিয়তে রাখা হয়েছে!', ToastAndroid.SHORT);
//             });
//             console.log("afte set data", newData)
//         });

  async componentWillMount() {
    
    
    
    await Font.loadAsync({
      'CharukolaUltraLight': require('../assets/fonts/CharukolaUltraLight.ttf'),
    });



this.setState({ fontLoaded: true });
  }




  render() {

    
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
            this.state.isFav ? (
        <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this._renderScene(rowData)}
          />
             ) : (<Text> No Favourite Items Found! </Text>)

          }
      </View>
    );
  }

    _renderScene(rowData) {
    return (
    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('singleFav', {fontLoaded:  this.state.fontLoaded, title: rowData.title, body: rowData.body })}>
      <View style={{ alignItems: 'center', paddingTop: 20, paddingBottom: 20, flexDirection: 'row', borderBottomWidth: 1, borderColor: '#f7f7f7' }}>
         {
    this.state.fontLoaded ? (
        <Text style={{ marginLeft: 15,fontFamily:'CharukolaUltraLight',fontSize:20 }}>{this.state.counter++} { rowData.title}</Text>
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
import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Switch, Picker, Modal, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Entypo,Octicons,Ionicons } from '@expo/vector-icons';
import {observer} from 'mobx-react/native'
@observer
export default class Root extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      falseSwitchIsOn: false,
      size: 13,
      modalVisible: false
    }

  }
  changeFontSize(s) {
    this.setState({ size: s })
    this.props.screenProps.changeFontSize(s)
    console.log("Info page",this.props.screenProps.size)
    
  }
toggleNightMode () {
    this.setState({ falseSwitchIsOn: !this.state.falseSwitchIsOn })
    this.props.screenProps.toggleNightMode(this.state.falseSwitchIsOn)
    console.log("dekh",this.state.falseSwitchIsOn)
}
  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 20 ,backgroundColor:'#fff'}}>
          <Text style={{ color: '#0D8F4F' }}>Preference and Settings</Text>




          <TouchableWithoutFeedback onPress={() => this.toggleNightMode()} >
            <View style={{ paddingTop: 20, paddingBottom: 20, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#f7f7f7' }}>
              <View style={{ flexDirection: 'row' }}>
                <Entypo name="moon" size={32} color='#0D8F4F' />
                <View>
                  <View style={{ flexDirection: 'column', alignItems: 'stretch' }}>
                    <Text style={{ marginLeft: 15, fontSize:16 }}>Night Mode</Text>
                    <Text style={{ fontWeight: '400', color: '#696969',fontSize:14,  marginLeft: 15 }}>Text readibility at night</Text>
                  </View>
                </View>
              </View>

              <Switch
                onValueChange={(value) => this.toggleNightMode()}
                style={{ alignItems: 'flex-end' }}
                value={this.state.falseSwitchIsOn} />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => this.setModalVisible(true)} >
            <View style={{ paddingTop: 20, paddingBottom: 20, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#f7f7f7' }}>
              <View style={{ flexDirection: 'row' }}>
                <Octicons name="text-size" size={32} color='#0D8F4F' />
                <View>
                  <View style={{ flexDirection: 'column', alignItems: 'stretch' }}>
                    <Text style={{ marginLeft: 15, fontSize:18  }}>Font Size</Text>
                    <Text style={{ fontWeight: '400', color: '#696969',fontSize:14 , marginLeft: 15 }}>Text readibility at night</Text>
                  </View>
                </View>
              </View>
              <View><Picker style={{ width: 100, padding: 10,color:'#0D8F4F', backgroundColor: '#fff', left: 50 }} mode='dialog'
                selectedValue={this.state.size}
                onValueChange={(s) => this.changeFontSize(s)}>
                <Picker.Item label="13" value="center" />
                <Picker.Item label="15" value="15" />
                <Picker.Item label="17" value="17" />
              </Picker></View>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={{ borderTopColor:'#d9d9d9',borderTopWidth: 15,padding:20, backgroundColor:'#fff'}}>
          <Text style={{ color: '#0D8F4F' }}>Other</Text>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('about')} >
            <View style={{ paddingTop: 20, paddingBottom: 20, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#f7f7f7' }}>
              <View style={{ flexDirection: 'row' }}>
                <Entypo name="info" size={32} color='#0D8F4F' />
                <View>
                  <View style={{ flexDirection: 'column', alignItems: 'stretch' }}>
                    <Text style={{ marginLeft: 15, fontSize:18 }}>About Apps & Privacy Policy</Text>
                  </View>
                </View>
              </View>

               <Ionicons name="ios-arrow-forward-outline" size={32} color='#0D8F4F' />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={()=> alert("Holly shit")} >
            <View style={{ paddingTop: 20, paddingBottom: 20, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#f7f7f7' }}>
              <View style={{ flexDirection: 'row' }}>
                <Entypo name="chat" size={32} color='#0D8F4F' />
                <View>
                  <View style={{ flexDirection: 'column', alignItems: 'stretch' }}>
                    <Text style={{ marginLeft: 15, fontSize:18}}>Contact with us</Text>
                  </View>
                </View>
              </View>

               <Ionicons name="ios-arrow-forward-outline" size={32} color='#0D8F4F' />
            </View>
          </TouchableWithoutFeedback>
        </View>
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


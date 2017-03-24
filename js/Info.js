import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text,StatusBar, View,TouchableWithoutFeedback,Switch ,Picker} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';
export default class Root extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      falseSwitchIsOn:false,
      size: 12,
      animated:true,
      translucent:false
    }
  }

  static navigationOptions = {
    tabBar: {
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      icon: ({ tintColor }) => (
         <Entypo name="list" size={32} color={tintColor} />
      ),
    },
  }
  render() {
    return (
      <View style={styles.container}>
         
        <View style={{height:50,backgroundColor:'#0D8F4F'}}>
          <View style={{marginTop:20, alignItems:'center'}}>
            <Text style={{fontSize:20,color:'#fff'}}>
              কবিতা সমগ্র
            </Text>
          </View>
        </View>
         <View style={{padding:10}}>
            <Text style={{color:'#0D8F4F'}}>Preference and Settings</Text>
            



<TouchableWithoutFeedback onPress={()=> this.setState({falseSwitchIsOn: !this.state.falseSwitchIsOn}) } >
        <View style={{ alignItems:'center', paddingTop:20,paddingBottom:20, flexDirection:'row', borderBottomWidth:1, borderColor:'#f7f7f7' }}>
           <Entypo name="list" size={32} color='#0D8F4F' />
           <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'stretch' }}>
                <View style={{ flexDirection:'column', alignItems:'stretch' }}>
                  <Text style={{ marginLeft:15, fontWeight:'600' }}>Night Mode</Text>
                  <Text style={{ fontWeight:'400', color:'#333', marginLeft:15 }}>Text readibility at night</Text>
                </View>

                <Switch
                onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                style={{ alignItems:'flex-end' }}
                value={this.state.falseSwitchIsOn} />
          </View>
        </View>
      </TouchableWithoutFeedback>
<TouchableWithoutFeedback onPress={()=> this.setState({falseSwitchIsOn: !this.state.falseSwitchIsOn}) } >
        <View style={{ alignItems:'center', paddingTop:20,paddingBottom:20, flexDirection:'row', borderBottomWidth:1, borderColor:'#f7f7f7' }}>
           <Entypo name="list" size={26} color='#0D8F4F' />
           <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'stretch' }}>
                <View style={{ flexDirection:'column', alignItems:'stretch' }}>
                  <Text style={{ marginLeft:15, fontWeight:'600' }}>Font Size</Text>
                  <Text style={{ fontWeight:'400', color:'#333', marginLeft:15 }}>Increase or Decrease Font Size</Text>
                </View>

                 <Picker
                 mode='dialog'
 style={{  alignItems:'flex-end' }}
                  selectedValue={this.state.size}
                  onValueChange={(val) => this.setState({size: val})}>
                  <Picker.Item label="Small" value="12" />
                  <Picker.Item label="Big" value="15" />
                   <Picker.Item label="Huge" value="18" />
                </Picker>


          </View>
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


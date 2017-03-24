import Expo from 'expo';
import React from 'react';
import { StyleSheet, TextInput, View,Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class List extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            size:15,
            height:0,
        }

    }
  

  render() {
    return (
      <View>
        
      <View style={{flex:.2,flexDirection:'row',backgroundColor:'green'}}>
            <Button  style={{margin:20}} onPress={()=>{
                 this._increaseFont()
                }} title="Biggner"/>
                <Button style={{margin:20}} onPress={()=>{
                this._decreaseFont()
            }} title="Smaller"/>
      </View>
     <View style={{flex:.8,backgroundColor:'blue',justifyContent:'flex-start'}} >
        <TextInput
        editable = {false}
         multiline = {true}
         numberOfLines = {10}
        value={this.props.navigation.state.params.body}
        style={{fontSize:this.state.size,backgroundColor:'red',flex:1}}/>


    </View>
      </View>
    );
  }

    _increaseFont (){
        this.setState({
            size:this.state.size+2
        })
    }
    _decreaseFont(){
        this.setState({
            size:this.state.size-2
        })
    }
}


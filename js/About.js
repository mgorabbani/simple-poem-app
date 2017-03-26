import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Button, ListItem, Linking, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { MaterialCommunityIcons } from '@expo/vector-icons';


export default class About extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',

        }}>

          <Text style={{ fontSize: 30, marginBottom: 20 }}>হেলাল হাফিজের কবিতা</Text>
          <Image style={{ borderRadius: 10 }}
            source={require('../assets/helal-hafiz.jpg')}
          />
        </View>

        <Text style={{ paddingTop: 50 }}>
          এই অ্যাপ এর সকল কবিতা কবি হেলাল হাফিজের। কবিতাগুলি ইন্টারনেট থেকে সংগ্রহ করা। এখানে আমাদের কোনো ক্রেডিট নাই.সবগুলো কবিতার ক্রেডিট সম্পূর্ণ লেখকের।
          </Text>
        <TouchableOpacity onPress={() => Linking.openURL("http://messenger.com/mgorabbani")} >
          <View style={{ paddingTop: 20, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#f7f7f7' }}>
            <View>
              <Text> ডেভেলপার </Text>
              <Text style={{ fontSize: 17 }}> গোলাম রাব্বানি </Text>
            </View>
            <MaterialCommunityIcons style={{ right: 30 }} name="facebook-messenger" size={35} color="#137CC9" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("http://messenger.com/hmijan1")} >
          <View style={{ paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text> কবিতা সংগ্রাহক </Text>
              <Text style={{ fontSize: 17 }}> মিজানুর রহমান নিয়ন </Text>
            </View>
            <MaterialCommunityIcons style={{ right: 30 }} name="facebook-messenger" size={35} color="#137CC9" />
          </View>
        </TouchableOpacity>
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop:30

        }}>
          <TouchableOpacity onPress={() => Linking.openURL("http://melopixel.com")} ><Text>Sponsored By Melopixel.com</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20

  },
});

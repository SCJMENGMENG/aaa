/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,NativeModules} from 'react-native';

// 创建原生模块
var aaa = require('react-native').NativeModules.aaa;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={() =>{
            // 方法调用
            aaa.doSomething('zw name');
        }}>Welcome to React Native!</Text>
        <Text style={styles.instructions} onPress={() =>{
            // Response 调用方式
            // 创建原生模块
            var aaa = require('react-native').NativeModules.aaa;
            //  方法调用
            aaa.doThing(('RN->原生的数据'),(error,events) => {
                if (error) {
                    console.warn(error);
                } else {
                    alert(events)//返回的数据
                }
            })
        }}>To get started, edit App.js</Text>
        <Text style={styles.instructions} onPress={() =>{
            // Promise 调用方式
            // 创建原生模块
            var aaa = require('react-native').NativeModules.aaa;
            // 方法调用
            aaa.testPromisesEvent(('zw')).then((events)=>{
                alert(events+1111)
            });
        }}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

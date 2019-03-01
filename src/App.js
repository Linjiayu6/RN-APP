
import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';

// import Demo from './components/demo';
import Header from './components/header';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center', // 长度居中
    alignItems: 'center', // 宽度居中
    backgroundColor: '#f6f8fa',
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

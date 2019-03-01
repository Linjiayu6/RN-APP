
import React, { Component } from 'react';
import { 
  ThemeProvider, 
  Avatar,
  Header
} from 'react-native-elements';

export default class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content" // or directly
          // leftComponent={<MyCustomLeftComponent />}
          centerComponent={{ 
            text: 'Lin JY', 
            style: { color: '#fff', fontSize: 20 } 
          }}
          containerStyle={{
            backgroundColor: '#000000',
            justifyContent: 'space-around',
          }}
        />
        <Avatar
          size='xlarge'
          rounded
          title='Lin'
          containerStyle={{ marginTop: 20 }}
          source={{
            uri: 'https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:a4938654/screenshot.png',
          }}
        />
      </ThemeProvider>
    );
  }
}

// const styles = StyleSheet.create({
//   avatar: {
//     width: 200,
//     height: 200
//   }
// });
import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import { HomeScreen } from './src/screens/Home';
import { AboutScreen } from './src/screens/About';
import { SettingsScreen } from './src/screens/Settings'


// import {  } from 'native-base';


const Route = createStackNavigator({
  Home: HomeScreen,
  About: AboutScreen
}, {
    initialRouteName: 'Home',
    navigationOptions: {
      headerTitleStyle: {
        marginLeft: 50,
      },
      headerStyle: {
        backgroundColor: '#d33',
        // textColor:"white"
      },
      // 60b0ff
      headerTintColor: '#fff',
    }
  });

const Settings = createStackNavigator({
  SettingsScreen
}, {
    initialRouteName: 'SettingsScreen',
  })

const Drawer = createDrawerNavigator({
  Route,
  Settings
})



export default class App extends React.Component {
  render() {
    return (
  
      <Drawer />
    );
  }
}


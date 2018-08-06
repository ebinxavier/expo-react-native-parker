import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';


import { HomeScreen } from './Home';
import { AboutScreen } from './About';
import { SettingsScreen } from './Settings';
import SideMenu  from './Drawer';


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
          backgroundColor: '#000',
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
  
  export const Drawer = createDrawerNavigator({
    Route,
    Settings
  }, {
      contentComponent: SideMenu,
      drawerWidth: 350
    })
import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../css/style'
import { HamburgerMenu } from './Menu';

export class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Settings Page',
      headerTitleStyle: {
        marginLeft: 0,
      },
      headerStyle: {
        backgroundColor: '#d33',
        // textColor:"white"
      },
      // 60b0ff
      headerTintColor: '#fff',
      headerLeft: <HamburgerMenu navigation={navigation} />
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings Route</Text>
        <Button title="go to about" onPress={() => {
          this.props.navigation.navigate('Home');
        }} />
      </View>
    );
  }
} 
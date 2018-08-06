import React from 'react';
import { Text, View, Button as Btn, StatusBar } from 'react-native';
import styles from '../css/style';
import { YellowBox } from 'react-native';
import { HamburgerMenu } from './Menu';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


export class HomeScreen extends React.Component {

    toggleDrawer = () => {

        console.log(this.props.navigationProps);

        this.props.navigationProps.toggleDrawer();

    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home',
            headerTitleStyle: {
                marginLeft: 0,
            },
            headerLeft: (
                <HamburgerMenu navigation={navigation} />
            )

        };
    }

    render() {

        return (
            <View style={[styles.container, { backgroundColor: '#fff' }]}>
                <Text>Home Route1</Text>
                <Btn title="about" onPress={() => {
                    this.props.navigation.navigate('About');
                }} />
            </View>
        );
    }
} 
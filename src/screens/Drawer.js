import { Text, View, Button as Btn, Image } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Icon, ListItem, Separator, List } from 'native-base';


export class SideMenu extends Component {
  render() {
    const resizeMode = 'contain';
    let h=350;
    return (
      <Container>

        <Content>
          <View style={{flex:1,height:h}}>
          <Image  style={{
         flex: 1,
         resizeMode: 'cover',
         width: undefined,
         height: undefined
        }} source={require('../assets/react-native.png')} />
          </View>
         
          {/* <Separator bordered>
            <Text>MIDFIELD</Text>
          </Separator> */}
          <List>
            <ListItem onPress={()=>{
              this.props.navigation.navigate('Home');
            }}>
              <Icon name='home' /><Text style={{ marginLeft: 10, fontWeight: 'bold' }}> {'  '} Home</Text>
            </ListItem>
            <ListItem onPress={()=>{
              this.props.navigation.navigate('Settings');
            }}>
              <Icon name='settings' /><Text style={{ marginLeft: 10 }}>{'  '} Settings</Text>
            </ListItem>
            <ListItem onPress={()=>{
              this.props.navigation.navigate('About');
            }}>
              <Icon name='person' /><Text style={{ marginLeft: 10 }}> {'  '} About</Text>
            </ListItem>
            
          </List>

        </Content>
      </Container>
    );
  }
}
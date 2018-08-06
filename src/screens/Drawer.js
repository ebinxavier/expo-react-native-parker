import { Text, View, Button as Btn, Image } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Icon, ListItem, Separator, List } from 'native-base';
import { connect } from 'react-redux';
import {CHANGE_DRAWER_MENU} from "../redux/actions"

class SideMenu extends Component {
  render() {
    const resizeMode = 'contain';
    let h = 350;
    return (
      <Container>

        <Content>
          <View style={{ flex: 1, height: h }}>
            <Image style={{
              flex: 1,
              resizeMode: 'cover',
              width: undefined,
              height: undefined
            }} source={require('../assets/logo.jpg')} />
          </View>

          {/* <Separator bordered>
            <Text>{this.props.currentDrawerMenu}</Text>
          </Separator> */}
          <List>
            <ListItem onPress={() => {
              this.props.changeMenu('Home');
              this.props.navigation.navigate('Home');
            }}>
              <Icon name='home' /><Text style={{ marginLeft: 10, fontWeight: this.props.currentDrawerMenu=='Home'?'bold':'normal' }}> {'  '} Home</Text>
            </ListItem>
            <ListItem onPress={() => {
              this.props.changeMenu('Settings');
              this.props.navigation.navigate('Settings');
            }}>
              <Icon name='settings' /><Text style={{ marginLeft: 10, fontWeight: this.props.currentDrawerMenu=='Settings'?'bold':'normal'  }}>{'  '} Settings</Text>
            </ListItem>
            <ListItem onPress={() => {
              this.props.changeMenu('About');
              this.props.navigation.navigate('About');
            }}>
              <Icon name='person' /><Text style={{ marginLeft: 10, fontWeight: this.props.currentDrawerMenu=='About'?'bold':'normal'  }}> {'  '} About</Text>
            </ListItem>

          </List>

        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentDrawerMenu: state.drawerReducer.drawerSelectedMenu
})
const mapDispatchToProps = dispatch => ({
  changeMenu: name => dispatch({
    type: CHANGE_DRAWER_MENU,
    payload:name
  })
})
export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);


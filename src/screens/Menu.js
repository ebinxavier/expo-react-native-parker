import { Icon, Button } from 'native-base';
import React from 'react';

export class HamburgerMenu extends React.Component {
    render() {
        return (
            <Button transparent onPress={() => { this.props.navigation.toggleDrawer() }}>
                <Icon style={{ color: '#fff', marginTop: 5, marginLeft: 10 }} name='menu' />
            </Button>
        )
    }
}


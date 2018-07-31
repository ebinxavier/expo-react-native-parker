import React from 'react';
import { Drawer } from './src/screens/Navigations'


// import {  } from 'native-base';

// Redux imports
import { Provider } from 'react-redux';
import { createStore } from 'redux';







export default class App extends React.Component {
  render() {
    return (
      // <Provider store={{}}>
        <Drawer />
      // </Provider>
    );
  }
}


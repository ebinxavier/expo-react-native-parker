import React from 'react';
import { Drawer } from './src/screens/Navigations'
import Reducer from './src/redux/reducers'


// import {  } from 'native-base';

// Redux imports
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { CHANGE_DRAWER_MENU} from './src/redux/actions'  
const store = createStore(Reducer)






export default class App extends React.Component {

  render() {
    store.subscribe(()=>{
      console.log(store.getState());
    })

    return (
      <Provider store={store}>
        <Drawer />
      </Provider>
    );
  }
}


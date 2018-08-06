import { CHANGE_DRAWER_MENU } from '../actions';
import initialState  from '../initialState';

export default drawerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_DRAWER_MENU:
            return {...state,drawerSelectedMenu:action.payload}
        default:
            return state;
    }
}
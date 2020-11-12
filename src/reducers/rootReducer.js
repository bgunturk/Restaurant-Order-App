import {combineReducers} from 'redux';
import {cartReducer} from './cartReducer';
import {authReducer} from './authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer
  });
  
  export default rootReducer;
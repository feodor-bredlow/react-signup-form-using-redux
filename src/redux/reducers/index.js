import { combineReducers } from 'redux';
import userInfo from './userInfo';
import address from './address';

export default combineReducers({ userInfo, address });

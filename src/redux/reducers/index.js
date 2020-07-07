import { combineReducers } from 'redux';
import user from './user';
import address from './address';
import additionalInfo from './additionalInfo';

export default combineReducers({ user, address, additionalInfo });

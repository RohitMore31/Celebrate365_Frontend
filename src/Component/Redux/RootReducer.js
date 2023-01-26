import { combineReducers } from 'react-redux';
import reducer from './reducer';

const RootReducers = combineReducers(reducer);

export default RootReducers;
import { combineReducers } from 'redux';
import board from './board';
import cards from './cards';
import profile from './profile';


const rootReducer = combineReducers({
  board,
  cards,
  profile
});

export default rootReducer;

import {
    TOGGLE_GAME_ACTIVE,
    CHANGE_CARDS_SKIRT,
    CHANGE_DIFFICULTY,
    SET_TOTAL_TIME,
    RESET_GAME
  } from '../constants';
  
  import { createNewValues } from '../assets/helpers/data-constructor.js';
  
  const initialState = {
    gameActive: false,
    skirt: 'despicableMe1',
    difficulty: '4x2',
    values: [ 'D', 'C', 'B', 'A', 'C', 'A', 'B', 'D'],
    totalTime: '0:00'
  };
  
  const board = (state = initialState, action) => {
    switch (action.type) {
  
      case TOGGLE_GAME_ACTIVE:
        return { ...state, gameActive: action.flag };
  
      case CHANGE_CARDS_SKIRT:
        return { ...state, skirt: action.skirt };  
  
      case CHANGE_DIFFICULTY:
        return { 
          ...state, 
          difficulty: action.difficulty, 
          values: createNewValues(action.difficulty)
        };
  
      case SET_TOTAL_TIME:
        return { ...state, totalTime: action.time };
  
      case RESET_GAME:
        return {
          ...state, 
          gameActive: false,
          skirt: 'despicableMe1',
          difficulty: '4x2',
          values: createNewValues(action.difficulty),
          totalTime: '0:00'
        }; 
      default:
        return state;
    }
  };
  
  export default board;
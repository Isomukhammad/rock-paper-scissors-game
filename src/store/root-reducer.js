import { combineReducers } from 'redux';
import { scoreReducer } from './score/score.reducer';

export const rootReducer = combineReducers({
    score: scoreReducer
})
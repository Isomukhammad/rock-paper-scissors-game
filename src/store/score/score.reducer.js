import { SCORE_ACTION_TYPE } from "./score.types";

const INITIAL_VALUE = {
    score: 0,
    action: true
}

export const scoreReducer = (state = INITIAL_VALUE, action) => {
    const {type, payload} = action;

    switch(type) {
        case SCORE_ACTION_TYPE.SET_SCORE:
            return {...state, score: payload}

        case SCORE_ACTION_TYPE.SET_ACTION:
            return {...state, action: payload};
    
        default: 
            return state;
    }
}
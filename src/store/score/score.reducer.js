import { SCORE_ACTION_TYPE } from "./score.types";

const INITIAL_VALUE = {
    score: 0,
    action: true,
    playerChoice: '',
    opponentChoice: '',
    result: ''
}

export const scoreReducer = (state = INITIAL_VALUE, action) => {
    const {type, payload} = action;

    switch(type) {
        case SCORE_ACTION_TYPE.SET_SCORE:
            return {...state, score: payload}

        case SCORE_ACTION_TYPE.SET_ACTION:
            return {...state, action: payload};

        case SCORE_ACTION_TYPE.SET_PLATER_CHOICE:
            return {...state, playerChoice: payload};
    
        case SCORE_ACTION_TYPE.SET_OPPONENT_CHOICE:
            return {...state, opponentChoice: payload};

        case SCORE_ACTION_TYPE.SET_RESULT:
            return {...state, result: payload};

        default: 
            return state;
    }
}
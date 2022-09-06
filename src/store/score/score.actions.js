import { createAction } from "../../utils/reducer/reducer.utils";
import { SCORE_ACTION_TYPE } from "./score.types";

const result = (value) => {
    if(value === 0) {
        return 'draw'
    }
    if(value === 1) {
        return 'win'
    }
    if(value === -1) {
        return 'lose'
    }
}

export const setScore = (score) => createAction(SCORE_ACTION_TYPE.SET_SCORE, score);
export const setAction = (boolean) => createAction(SCORE_ACTION_TYPE.SET_ACTION, boolean); 
export const setPlayerChoice = (playerChoice) => createAction(SCORE_ACTION_TYPE.SET_PLATER_CHOICE, playerChoice);
export const setOpponentChoice = (opponentChoice) => createAction(SCORE_ACTION_TYPE.SET_OPPONENT_CHOICE, opponentChoice);
export const setResult = (value) => createAction(SCORE_ACTION_TYPE.SET_RESULT, result(value));
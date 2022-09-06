import { createAction } from "../../utils/reducer/reducer.utils";
import { SCORE_ACTION_TYPE } from "./score.types";

export const setScore = (score) => createAction(SCORE_ACTION_TYPE.SET_SCORE, score);
export const setAction = (action) => createAction(SCORE_ACTION_TYPE.SET_ACTION, action); 
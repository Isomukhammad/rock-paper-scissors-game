import { useDispatch, useSelector } from 'react-redux';

import { selectAction, selectScore } from '../../store/score/score.selector';
import { setAction, setScore } from '../../store/score/score.actions';

import checkResult from '../../utils/check-result';

import {ReactComponent as Paper} from '../../assets/icon-paper.svg'
import {ReactComponent as Scissor} from '../../assets/icon-scissors.svg'
import {ReactComponent as Rock} from '../../assets/icon-rock.svg'

import styles from './button.module.scss';

const Button = ({type, types}) => {
    const dispatch = useDispatch();

    const score = useSelector(selectScore);
    const action = useSelector(selectAction);

    const onClickHandler = (type, types, action) => {
        if(action === true) {
            const random = Math.floor(Math.random() * types.length);
            const result = checkResult(type, types[random].type);
            console.log(result);
            const newScore = score + result;
            dispatch(setAction(false));
            dispatch(setScore(newScore));
        } return false;
    };

    return(
        <div 
            className = {styles.div}
            onClick = {() => onClickHandler(type, types, action)}            
            style = {{
                backgroundColor: type === 'paper' ? `hsl(230, 89%, 65%)` : null || 
                type === 'scissor' ? `hsl(39, 89%, 49%)` : null ||
                type === 'rock' ? `hsl(349, 71%, 52%)` : null,

                borderBottom: type === 'paper' ? `7px solid hsl(230, 89%, 40%)` : null || 
                type === 'scissor' ? `7px solid hsl(39, 89%, 40%)` : null ||
                type === 'rock' ? `7px solid hsl(349, 71%, 40%)` : null,
            }}
            >
                <div className={styles.color}>
                    {
                        type === 'paper' ? <Paper/> : null ||
                        type === 'scissor' ? <Scissor /> : null ||
                        type === 'rock' ? <Rock /> : null
                    }
                </div>
        </div>
    )
}

export default Button;
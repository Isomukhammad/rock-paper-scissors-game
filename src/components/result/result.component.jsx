import { useDispatch, useSelector } from 'react-redux';
import { setAction } from '../../store/score/score.actions';
import { selectOpponentChoice, selectPlayerChoice, selectResult } from '../../store/score/score.selector';
import Button from '../button/button.component';
import styles from './result.module.scss';

const Result = () => {
    const dispatch = useDispatch();
    const result = useSelector(selectResult);
    const playerChoise = useSelector(selectPlayerChoice);
    const opponentChoice = useSelector(selectOpponentChoice);

    return(
        <div className={styles.result}>
            <div className={styles.choices}>
                <Button type = {playerChoise}/>
                <Button type = {opponentChoice}/> 
            </div>

            <h1>you {result}</h1>
            <p onClick = {() => dispatch(setAction(true))}>play again</p>
        </div>
    )
}

export default Result;
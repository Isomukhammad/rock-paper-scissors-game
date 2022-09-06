import { useSelector } from 'react-redux';
import {ReactComponent as Logo} from '../../assets/logo.svg'
import { selectScore } from '../../store/score/score.selector';

import styles from './scoreboard.module.scss';

const Scoreboard = () => {
    const score = useSelector(selectScore);

    return(
        <div className = {styles.div}>
            <div className = {styles.title}>
                <Logo viewBox='0 0 280 90' height={'60px'}/>
            </div>
            <div className={styles.scoreTab}>
                <p>score</p>
                <p className={styles.score}>{score}</p>
            </div>
        </div>
    )
}

export default Scoreboard;
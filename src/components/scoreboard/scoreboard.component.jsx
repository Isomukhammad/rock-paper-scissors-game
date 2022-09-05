import {ReactComponent as Logo} from '../../assets/logo.svg'

import styles from './scoreboard.module.scss';

const Scoreboard = ({score}) => {
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
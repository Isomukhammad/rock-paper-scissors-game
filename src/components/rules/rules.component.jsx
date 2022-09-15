import {ReactComponent as RulesImage} from '../../assets/image-rules.svg'
import {ReactComponent as Close} from '../../assets/icon-close.svg'

import styles from './rules.module.scss';

const Rules = ({setOpen}) => {
    return(
        <div className={styles.div}>
            <div className= {styles.rulesContainer}>
                <div className={styles.title}>RULES</div>
                <div className={styles.img}>
                    <RulesImage />
                </div>
                <div className={styles.button}>
                    <Close onClick={() => setOpen(false)}/>
                </div>
            </div>
        </div>
    )
}

export default Rules;
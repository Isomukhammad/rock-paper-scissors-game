import {ReactComponent as RulesImage} from '../../assets/image-rules.svg'
import {ReactComponent as Close} from '../../assets/icon-close.svg'

import styles from './rules.module.scss';

const Rules = ({setOpen}) => {
    return(
        <div className={styles.div}>
            <div className={styles.title}>RULES</div>
            <RulesImage />
            <Close onClick={() => setOpen(false)}/>
        </div>
    )
}

export default Rules;
import Button from '../button/button.component';
import styles from './buttons.module.scss';

const Buttons = () => {
    return(
        <div className={styles.div}>
            <Button />
            <Button />
            <Button />
        </div>
    )
}

export default Buttons;
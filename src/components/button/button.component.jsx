import { useState } from 'react';
import styles from './button.module.scss';
import {ReactComponent as Paper} from '../../assets/icon-paper.svg'

const Button = ({props}) => {
    const [clicked, setClicked] = useState(false);

    const clickHandler = () => {
        if(clicked == true){
            returnState(false, function() {
                setClicked(false);
            })
        } else {
            setClicked(!clicked);
        }
    }

    const returnState = (param, callback) => {
        setClicked(false);
        callback();
    }

    return(
        <div 
            className = {`${styles.div} ${clicked ? `${styles.active}` : null}`} 
            onClick = {clickHandler}>
                <div className={styles.color}>
                    <Paper/>
                </div>
        </div>
    )
}

export default Button;
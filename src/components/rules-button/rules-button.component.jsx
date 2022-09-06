import { useState } from 'react';
import Rules from '../rules/rules.component';
import styles from './rules-button.module.scss';

const RulesButton = () => {
    const [open, setOpen] = useState(false);

    return(
        <>
        <div 
            className={styles.button}
            onClick = {() => setOpen(true)}
        >
            rules
        </div>
        {open ? <Rules setOpen = {setOpen}/> : null}
        </>
    )
} 

export default RulesButton;
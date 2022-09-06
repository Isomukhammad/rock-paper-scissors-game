import { useDispatch } from 'react-redux';

import Button from '../button/button.component';

import {ReactComponent as Triangle} from '../../assets/bg-triangle.svg'

import styles from './buttons.module.scss';

const Buttons = () => {
    const dispatch = useDispatch();

    const types = [
        {
            'id': 0,
            'type': 'paper'
        }, 
        {
            'id': 1,
            'type': 'scissor'
        },
        {
            'id': 2,
            'type': 'rock'
        }
    ];

    return(
        <div className={styles.div}>
        {
            types.map((type) => (
                <Button 
                    key = {type.id} 
                    type = {type.type}
                    types = {types}
                />
            ))
        }
        </div>
    )
}

export default Buttons;
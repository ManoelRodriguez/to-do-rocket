import styles from './Tasks.module.css'
import clipboard from '../assets/clipboard.png'
import { Trash } from 'phosphor-react'

export function Tasks(props) {

    return (
        <div className={styles.tasks}>
            <div className={styles.task}>
                <label className={styles.checkboxContainer}>
                    <input type="checkbox" className={styles.checkbox} defaultChecked={props.isComplete} />
                    <span className={styles.checkmark}></span>
                </label>
                <p>{props.title}</p>
                <a href="#"><Trash /></a>
            </div>
        </div>
    )
}
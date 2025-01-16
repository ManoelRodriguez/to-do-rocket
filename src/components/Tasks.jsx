import styles from './Tasks.module.css'
import clipboard from '../assets/clipboard.png'
import { Trash } from 'phosphor-react'

export function Tasks({ id, title, isComplete, handleDeleteTask }) {

    return (
        <div className={styles.tasks}>
            <div className={styles.task}>
                <label className={styles.checkboxContainer}>
                    <input type="checkbox" className={styles.checkbox} defaultChecked={isComplete} />
                    <span className={styles.checkmark}></span>
                </label>
                <p>{title}</p>
                <a href="#" onClick={() => handleDeleteTask(id)}><Trash /></a>
            </div>
        </div>
    )
}
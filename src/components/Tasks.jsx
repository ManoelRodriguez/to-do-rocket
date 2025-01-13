import styles from './Tasks.module.css'
import clipboard from '../assets/clipboard.png'
import { Trash } from 'phosphor-react'

export function Tasks(props) {
    return (
        <div className={styles.tasks}>
            <header className={styles.header}>
                <p>Tarefas criadas<span className={styles.cont}>0</span></p>
                <p className={styles.concluidas}>Concluídas<span className={styles.cont}>0</span></p>
            </header>
            <div className={styles.task}>
                <input type="checkbox" id="task1" />
                <p>{props.title}</p>
                <a href="#"><Trash /></a>
            </div>
        </div>
    )
}
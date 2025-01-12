import styles from './Tasks.module.css'
import clipboard from '../assets/clipboard.png'

export function Tasks() {
    return (
        <div className={styles.tasks}>
            <header className={styles.header}>
                <p>Tarefas criadas<span className={styles.cont}>0</span></p>
                <p className={styles.concluidas}>Concluídas<span className={styles.cont}>0</span></p>
            </header>
            <div className={styles.taskList}>
                <img src={clipboard} alt="Foto de uma lista de tarefas" />
                <p>
                    <span>
                        Você ainda não tem tarefas cadastradas
                    </span><br />
                    Crie tarefas e organize seus itens a fazer
                </p>
            </div>
        </div>
    )
}
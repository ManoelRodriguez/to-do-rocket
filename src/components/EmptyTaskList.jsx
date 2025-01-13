import styles from './EmptyTaskList.module.css'
import clipboard from '../assets/clipboard.png'

export function EmptyTaskList() {
    return (

        <div className={styles.noTasks}>
            <header className={styles.header}>
                <p><span>Tarefas criadas</span><span className={styles.cont}>0</span></p>
                <p className={styles.concluidas}>Concluídas<span className={styles.cont}>0</span></p>
            </header>
            <div className={styles.emptyList}>
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
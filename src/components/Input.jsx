import styles from './Input.module.css'
import { PlusCircle } from 'phosphor-react'

export function Input() {
    return (
        <div className={styles.inputCreate}>
            <input type="text" className={styles.input} placeholder='Adicione uma tarefa' />
            <a className={styles.createTask} href='#' onClick={() => console.log('Criar')}>
                Criar
                <PlusCircle size={19.5} />
            </a>
        </div>
    )
}
import styles from './Input.module.css'
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'

export function Input({ handleCreateTask }) {

    const [title, setTitle] = useState('')
    return (
        <div className={styles.inputCreate}>
            <input type="text"
                className={styles.input}
                placeholder='Adicione uma tarefa'
                value={title}
                onChange={(event) => setTitle(event.target.value)} />

            <a className={styles.createTask} href='#'
                onClick={() => {
                    handleCreateTask(title)
                    setTitle('')
                }}
            >
                Criar
                <PlusCircle size={19.5} />
            </a>
        </div>
    )
}
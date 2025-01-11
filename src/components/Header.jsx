import styles from './Header.module.css'
import logoTodo from '../assets/logo-todo-rocket.png'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logoTodo} alt="Logo do To-do Rocket" />
        </header>
    )
}
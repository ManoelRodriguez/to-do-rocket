import { Header } from './components/Header'
import { Input } from './components/Input'
import { Tasks } from './components/Tasks'

import "./global.css"
import styles from './App.module.css'

import { v4 as uuidv4 } from 'uuid'
import { EmptyTaskList } from './components/EmptyTaskList'

const tasks = [
  {
    id: uuidv4(),
    title: 'Estudar ReactJs',
    isComplete: true,
  },
  {
    id: uuidv4(),
    title: 'Estudar NextJs',
    isComplete: false,
  },
  {
    id: uuidv4(),
    title: 'Ir para a academia',
    isComplete: true,
  }
]

function App() {

  return (
    <div>
      <Header />
      <div className={styles.input}>
        <Input />
      </div>

      <main className={styles.tasks}>
        <EmptyTaskList />
        <Tasks />
      </main>
    </div>
  )
}

export default App

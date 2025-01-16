import { Header } from './components/Header'
import { Input } from './components/Input'
import { Tasks } from './components/Tasks'

import "./global.css"
import styles from './App.module.css'

import { v4 as uuidv4 } from 'uuid'
import { EmptyTaskList } from './components/EmptyTaskList'
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([
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
  ])

  const hasTasks = tasks.length > 0

  const handleCreateTask = (title) => {
    const newTask = {
      id: uuidv4(),
      title: title,
      isComplete: false,
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div>
      <Header />
      <div className={styles.input}>
        <Input handleCreateTask={handleCreateTask} />
      </div>
      <main className={styles.tasks}>

        <div className={styles.teste}>
          <div className={styles.header}>
            <p>Tarefas criadas<span className={styles.cont}>0</span></p>
            <p className={styles.concluidas}>Concluídas<span className={styles.cont}>0</span></p>
          </div>
          {hasTasks ? (

            tasks.map(task => {
              return (
                <Tasks
                  key={task.id}
                  title={task.title}
                  isComplete={task.isComplete} />
              )
            })

          ) : (
            <EmptyTaskList />
          )}

        </div>
      </main>
    </div>
  )
}

export default App

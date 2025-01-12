import { Header } from './components/Header'
import { Input } from './components/Input'
import "./global.css"
import styles from './App.module.css'
import { Tasks } from './components/Tasks'

function App() {

  return (
    <div>
      <Header />
      <div className={styles.input}>
        <Input />
      </div>

      <div className={styles.tasks}>
        <Tasks />
      </div>
    </div>
  )
}

export default App

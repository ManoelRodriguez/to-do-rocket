import { Header } from './components/Header'
import { Input } from './components/Input'
import "./global.css"
import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header />
      <div className={styles.input}>
        <Input />
      </div>
    </div>
  )
}

export default App

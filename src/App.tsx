import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <img src="https://genrandom.com/api/cat" />
      <div className="firework"/>
      <div className="firework"/>
      <div className="firework"/>

      </div>
      <h1>Conrad & Sylvia</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Click to increase count
        </p>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Home from './AppParts/Home/Home'

function App() {
  const [tab, setTab] = useState(0)

  return (
    <>
      <div>
        <Home />
      </div>
    </>
  )
}

export default App

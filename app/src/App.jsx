import { useState } from 'react'
import './App.css'
import Tab from './AppParts/Navigation/Tab/Tab'


function App() {
  // const [tab, setTab] = useState(0)



  return (
    <>

      <div>
        <Tab name='Main' path='/'/>
        <Tab name='Home' path='/home'/>
        <Tab name='Dark' path='/'/>
        <Tab name='Tech' path='/'/>
        <Tab name='Visual' path='/'/>
      </div>

    </>
  )
}

export default App

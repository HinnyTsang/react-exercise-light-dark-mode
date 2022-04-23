import React, {useState} from 'react'
import {Navbar, Content} from './components'
import './app.css'

const App = () => {

  let [useLightMode, setUseLightMode] = useState(true)

  return (
    <div className={useLightMode? 'app--container' : 'app--container-dark'} >
      <Navbar Mode={useLightMode} SetMode={setUseLightMode}/>
      <Content Mode={useLightMode}/>
    </div>
  )
}

export default App
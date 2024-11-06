import React from 'react'
import Curd from './Curd'
import { FirstComp } from './Router/FirstComp'
import { ThirdComp } from './Router/ThirdComp'


const App = () => {
  return (
    <div>
      <h1>Curd Operations in React.js</h1>
    <Curd />
    <FirstComp/>
    <SecondComp/>
    <ThirdComp/>
    <FourthComp/>
    </div>
  )
}

export default App
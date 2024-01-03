import React, { useContext } from 'react'
import logo from './logo.svg'
import './App.css'
import appContext from './context/appContext'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App () {
  const { state } = useContext<any>(appContext)
  console.log(state)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Learn React
        </a>
      </header>
    </div>
  )
}

export default App

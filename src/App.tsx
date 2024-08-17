import './App.css'

import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <>
      <div className='mb-2'>
        <Navbar/>
      </div>
      <div>
        <Dashboard/>
      </div>
    </>
  )
}

export default App

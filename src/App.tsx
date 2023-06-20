import React,{ useState } from 'react'
import Layout from './components/Layout'
import ThemeButton from './components/ThemeButton'
import './styles/themeButton.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
    className='box-border flex flex-col h-screen gap-4 p-10 m-0 overflow-hidden bg-zinc-200 dark:bg-zinc-950'
    >
      <div>
        <ThemeButton/>
        <span className='absolute text-2xl top-[0.5em] left-[0.5em]' >Personal Portfolio</span>
      </div>
      <Layout/>
    </div>
  )
}

export default App

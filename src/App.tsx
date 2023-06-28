import React,{ useState } from 'react'
import Layout from './components/Layout'
import ThemeButton from './components/ThemeButton'
import './styles/themeButton.css'
import NavSection from './components/NavSection'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
    className='box-border flex flex-col h-screen gap-4 p-12 m-0 overflow-hidden bg-zinc-200 text-zinc-950 dark:text-zinc-200 dark:bg-zinc-950'
    >
      <div className='flex justify-center gap-4 lg:justify-between' >
        <NavSection/>
        <ThemeButton/>
      </div>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/about' element={<About/>} />
      </Routes>
      <Layout/>
    </div>
  )
}

export default App

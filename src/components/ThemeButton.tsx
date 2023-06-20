import React, { useState } from 'react'

const ThemeButton = () => {
    const [theme, setTheme] = useState('');
  return (
    <div className='flex justify-end' >
    <button className='py-1 px-2 border-zinc-950 shadow-cardBoxShadow w-min border-[1.25px] lg:border-[1.35px] dark:border-zinc-200 shine' >
        {theme === 'dark' ? 'dark' : 'ligth'}
    </button>
    </div>
  )
}

export default ThemeButton
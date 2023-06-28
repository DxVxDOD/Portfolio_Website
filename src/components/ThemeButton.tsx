import React, { useEffect, useState } from 'react'

const ThemeButton = () => {

  const userTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useState(userTheme);

  const themeSwitch = () => {
    
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('ligth');
      localStorage.setItem('theme', 'ligth');
      setTheme('ligth');
      return;
    }

    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('ligth');
    localStorage.setItem('theme', 'dark');
    setTheme('dark');
  };

  useEffect(() => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
      document.documentElement.classList.add('dark');
      return;
    }
    document.documentElement.classList.add('ligth');
    
  }, [userTheme, systemTheme])

  return (
    <div className='w-min' >
    <button
    onClick={themeSwitch}
    className='py-1 px-2 border-zinc-950 shadow-cardBoxShadow border-[1.25px] lg:border-[1.35px] dark:border-zinc-200 shine' >
        {theme}
    </button>
    </div>
  )
}

export default ThemeButton
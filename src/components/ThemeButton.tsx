import React, { useEffect } from 'react'

const ThemeButton = () => {
  const userTheme = localStorage.getItem('theme');

  const themeSwitch = () => {
    
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('ligth');
      localStorage.setItem('theme', 'ligth');
      return;
    }

    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('ligth');
    localStorage.setItem('theme', 'dark');
  };

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
      document.documentElement.classList.add('dark');
      return;
    }
    document.documentElement.classList.add('ligth');
    
  }, [userTheme])

  return (
    <div className='flex justify-end' >
    <button
    onClick={themeSwitch}
    className='py-1 px-2 border-zinc-950 shadow-cardBoxShadow w-min border-[1.25px] lg:border-[1.35px] dark:border-zinc-200 shine' >
        {userTheme}
    </button>
    </div>
  )
}

export default ThemeButton
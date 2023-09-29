function App() {
  return (
      <main className={'bg-zinc-950 w-screen h-screen overflow-hidden box-border grid grid-cols-2 grid-rows-2 m-0 p-20 text-zinc-300'}>
          <h1 className={'flex flex-col text-5xl'} >
              <p className={'w-fit'} >David Orbang</p>
              <p className={'p-10 pl-20 w-fit'}>Front-End Developer</p>
          </h1>
          <nav className={'flex gap-4 justify-end p-4 text-zinc-400'} >
              <a href={'https://github.com/DxVxDOD'} >GitHub</a>
              <a href={'https://www.linkedin.com/in/david-orbang/'} >LinkedIn</a>
              <a href={'https://twitter.com/OrbanDavid24'} >Twitter</a>
              <a href={'https://my-blog-jtqt0npju-dxvxdod.vercel.app/'} >Personal-Blog</a>
          </nav>
          <aside>
              Need to write intro about me....
          </aside>
          <section className={'p-4'} >
              <nav className={'flex flex-col items-end'} >
                  <h2 className={'text-xl text-zinc-400'}>Projects:</h2>
                  <p>Marks</p>
                  <p>Personal-Blog</p>
                  <p>E-Commerce-Website</p>
              </nav>
          </section>
      </main>
  )
}

export default App

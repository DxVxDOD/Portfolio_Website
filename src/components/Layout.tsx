import React, { Suspense } from 'react'
import AnimationCanvas from './animation/AnimationCanvas'

const Layout = () => {
  return (
    <div
    className='flex shadow-layoutBoxShadow w-full h-full border-[1.25px] border-zinc-950 lg:border-[1.35px] dark:border-zinc-200'
    >
      <Suspense fallback={<>Loading...</>} >
        <AnimationCanvas/>
      </Suspense>
    </div>
  )
}

export default Layout
import React from 'react'

const Hero = () => {
  return (
    <section className='relative max-w-7xl mx-auto'>
      
        <div className='flex flex-col md:flex-row items-center lg:h-[60vh] justify-center ' >
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
               <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug items-center text-white'>Hi There, <br />I'm Vorleak </h1>
               <p className='md:text-2xl text-xl mb-4 text-white'>Fullstack Developer </p>
               <p className='mb-4 text-white'>I'm a passionate web developer with expertise in React, Next.js, and modern web technologies. I love creating beautiful and functional website that solve real world problems.</p>
               <button className='bg-white text-black px-3 py-2 w-max rounded-md'><a href="https://drive.google.com/file/d/1LBMHWpTgTGkvCTcHYiU8JQRCHb5-SRl8/view?usp=sharing" download target='_blank'>Download CV</a></button>
            </div>
        </div>

    </section>
  )
}

export default Hero

import React from 'react'
import MernStack from '../assets/mernstack.png'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import Javascript from '../assets/JS.png'
import ReactLogo from '../assets/React.png'
import Tailwind from '../assets/Tailwind Css.png'
import Bootstrap from '../assets/Bootstrap.png'
import Mongodb from '../assets/mongodb.svg'




const About = () => {
    return (
        <div className='relative' id='about'>
            <div className='bg-black py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='mt-10'>
                        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                            <div>
                                <h3 className='text-2xl font-semibold text-white'>About  Me</h3>
                                <p className='mt-4 text-lg text-white'>
                                    I started my journey in web development with a passion for creating intuitive and scalable applications. With proficiency in the MERN stack (MongoDB, Express.js, React, and Node.js), I have built Projects such as a full-stack food ordering website , ajob portal, and even a LinkedIn clone. My projects demonstrate my ability to integrate poweful backend solutions with sleek, user-friendly frontend designs.
                                </p>                            </div>
                            <div className='border border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-red-300'>
                                <h3 className='text-2xl font-semibold text-red-600'>Skills</h3>
                                <div className='flex items-center justify-center flex-wrap gap-3'>

                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Html} alt="" className='w-10' />
                                        <span className='font-semibold text-white'>HTML</span>
                                    </div>

                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Css} alt="" className='w-8' />
                                        <span className='font-semibold text-white'>CSS</span>
                                    </div>

                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Javascript} alt="" className='w-10' />
                                        <span className='font-semibold text-white'>Javascript</span>
                                    </div>

                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={ReactLogo} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold text-white'>React</span>
                                    </div>
                    
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Tailwind} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold text-white'>Tailwind Css</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Bootstrap} alt="" className='w-10' />
                                        <span className='font-semibold text-white'>Bootstrap</span>
                                    </div>
                                 
                                    <div className='border border-red-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Mongodb} alt="" className='w-10' />
                                        <span className='font-semibold text-white'>Mongodb</span>
                                    </div>

                                    <div className='border border-red-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Mongodb} alt="" className='w-10' />
                                        <span className='font-semibold text-white'>Mongodb</span>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

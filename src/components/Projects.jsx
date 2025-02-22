import React from 'react'

import PPweather from '../assets/pp-weather.png'
import Minimal from '../assets/MinimalBlog.png'
import Cards from './Cards'
import Botanico from '../assets/Botanico.png'
import sellingbicycle from '../assets/sellingBicycle.png'
import Agromarket from '../assets/Agromarket.png'
const Projects = () => {

    const projectJson = [
        {
          title: 'Botanico',
          desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
          image: Botanico ,
          live: "https://botanico-us-91nl.vercel.app/",
        },
        {
          title: 'Minimal Blog',
          desc: 'The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!',
          image: Minimal,
          live: "https://minimal-blog-beryl.vercel.app/",
       
        },
        {
          title: 'PP-Weather',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: PPweather,
          live: "https://pp-weather-azure.vercel.app/",
     
        },
        {
          title: 'Selling Bicycle',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: sellingbicycle ,
          live: "https://limsopheak16.github.io/Selling-Bicycle/",
     
        },
        {
          title: 'AgroMarket',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Agromarket,
          live: "",
        
        },
      ];

  return (
    <section id='projects' className='relative bg-black py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-2xl font-semibold text-white w-max pb-4 '>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects

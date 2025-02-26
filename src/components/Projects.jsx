import React from 'react'

import PPweather from '../assets/pp-weather.png'
import Minimal from '../assets/MinimalBlog.png'
import Cards from './Cards'
import Botanico from '../assets/Botanico.png'
import sellingbicycle from '../assets/sellingBicycle.png'
import library from '../assets/library.png'
import Survey from '../assets/survey.png'
const Projects = () => {

    const projectJson = [
        {
          title: 'Botanico',
          desc: 'This website was created for the company to sell its products and provide customers with information about Botanico.',
          image: Botanico ,
          live: "https://botanico-us-91nl.vercel.app/",
        },
        {
          title: 'Minimal Blog',
          desc: 'This simple blog template is made for creative ideas, with a clean and stylish design to display your thoughts, art, and stories in an attractive way.',
          image: Minimal,
          live: "https://minimal-blog-beryl.vercel.app/",
       
        },
        {
          title: 'PP-Weather',
          desc: 'The PP-Weather website is to give users accurate and current weather information. detailed climate details, and other weather-related information for different places',
          image: PPweather,
          live: "https://pp-weather-azure.vercel.app/",
     
        },
        {
          title: 'Selling Bicycle',
          desc: 'Bicycle selling website is to provide an online platform where customers can easily browse and purchase different types of bicycles.',
          image: sellingbicycle ,
          live: "https://limsopheak16.github.io/Selling-Bicycle/",
     
        },
        {
          title: 'Library Management System',
          desc: 'A Library Management System is built to help libraries organize books, track check-outs .',
          image: library,
          // live: "",
        
        },
        {
          title: 'Survey Form',
          desc: 'Online survey form is to collect opinions or information from many people easily and quickly. ',
          image: Survey,
          live: "https://survey-form-new-lilac.vercel.app/",
        
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

import React from 'react'
import Portfolio from '../assets/Portfolio.png'
import SpicyBites from '../assets/SpicyBites.png'
import Youtube from '../assets/Youtube.png'
import Webelite from '../assets/Webelite.png'
import Supercar from '../assets/Supercar.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Botanico',
          desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
          image: Portfolio,
          live: "https://botanico-us-91nl.vercel.app/",
        },
        {
          title: 'Spicy Bites',
          desc: 'The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!',
          image: SpicyBites,
          live: "https://spicybites.netlify.app/",
       
        },
        {
          title: 'YouTube Clone',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Youtube,
          live: "https://youtube-clone-93300.netlify.app/",
     
        },
        {
          title: 'Webelite builder',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Webelite,
          live: "https://www.webelitebuilders.com/",
     
        },
        {
          title: 'Super Car',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Supercar,
          live: "https://supercar123.netlify.app/",
        
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

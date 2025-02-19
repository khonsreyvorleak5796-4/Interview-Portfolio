import React from 'react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import Lottie from 'lottie-react'
import contact from '../assets/Contact.json'

const Contact = () => {
  return (
    <section id='contact' className='z-50 bg-black relative py-10 px-5 md:px-0'>

<div className='mb-16 max-w-7xl mx-auto flex justify-center items-center'>
  <div className='text-center'>
    <h2 className='text-3xl font-bold mb-3 text-white'>Get in Touch</h2>
    {/* <p className='mb-4 text-white'>Best way to reach me is through!</p> */}
    <p className="mb-4 text-white">
  <a href="mailto:khonsreyvorleak5796@gmail.com" className="underline text-blue-400 hover:text-white text-xl">
    khonsreyvorleak5796@gmail.com
  </a>
</p>


  </div>
</div>

    </section>
  )
}

export default Contact

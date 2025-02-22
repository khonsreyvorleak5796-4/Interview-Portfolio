import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='z-50 bg-black relative py-10 px-5 md:px-0'>

<div className='mb-16 max-w-7xl mx-auto flex justify-center items-center'>
  <div className='text-center'>
    <h2 className='text-3xl font-bold mb-3 text-white'>Get in Touch</h2>
    {/* <p className='mb-4 text-white'>Best way to reach me is through!</p> */}
    <div className="mb-6 text-white">
  <p className="text-xl">
    <span className="font-semibold">Email:</span>
    <a href="mailto:khonsreyvorleak5796@gmail.com" className="underline text-2xl ml-2">
      khonsreyvorleak5796@gmail.com
    </a>
  </p>
  <p className="text-xl mt-2">
    <span className="font-semibold">Telegram:</span>
    <span className="text-2xl ml-2">070513499</span>
  </p>
</div>



  </div>
</div>

    </section>
  )
}

export default Contact

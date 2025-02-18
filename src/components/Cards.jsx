import React from 'react'
import Github from '../assets/Github.png'

const Cards = ({ item }) => {
    return (
        <div className='border border-white rounded-lg w-[350px] lg:w-[400px] bg-black'>
            <img src={item.image} alt="" className='rounded-lg' />
            <div className='p-4'>
                <h1 className='font-semibold text-xl mb-2 text-white'>{item.title}</h1>
                <p className='text-white'>{item.desc}</p>
                <div className='flex gap-3 mt-4'>
                    <button className='bg-white text-black px-3 py-2 rounded-md'><a href={item.live} target='_blank'>Deomo</a></button>
                </div>
            </div>
        </div>
    )
}

export default Cards


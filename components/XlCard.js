import React from 'react'
import Image from 'next/image'

function XlCard({img,title,description,buttontext}) {
  return (
    <section className='relative py-16 cursor-pointer'>
      <div className='relative min-w-[300px] h-96'>
        <Image src={img} layout='fill' objectFit='cover' className='rounded-2xl'/>
      </div>
      <div className='absolute top-32 left-12'>
        <h2 className='text-4xl mb-3 w-64'>{title}</h2>
        <p>{description}</p>
        <button className='text-sm bg-gray-900 text-white px-4 py-2 rounded-lg mt-5'>{buttontext}</button>
      </div>


    </section>
  )
}

export default XlCard

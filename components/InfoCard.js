import React from 'react'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon }  from '@heroicons/react/solid'

function InfoCard({img,location,title,description,star,price,total}) {
  return (
    <div>
    <div className='relative w-14 h-24 md:h-52 md:w-80 flex-shrink-0'>
     <Image src={img} layout='fill' objectFit='cover'/>
    </div>
    <div>
        <div className='flex justify-between'>
            <p>{location}</p>
            <HeartIcon className='h-7 cursor-pointer'/>
        </div>
        <div>
        <StarIcon className='h-7 cursor-pointer text-yellow-400'/>
        </div>
    </div>
    </div>
  )
}

export default InfoCard

import React from 'react'
import Spotlight from './Spotlight'
import Carousel from './Carousel'

function SpotlightMain() {
  return (
    <section className='bg-white'>
    <Spotlight />
    <Carousel />
    <div className='flex justify-center items-center'>
        <div>
         <button className='btn btn-sm bg-custom-2 text-white border-[#D4A400]'>Discover More</button>
        </div>
    </div>
    </section>
  )
}

export default SpotlightMain
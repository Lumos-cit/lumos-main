// eslint-disable-next-line no-unused-vars
import React from 'react'

function AboutUs() {
  return (
    <> 

        <div className="text-center h-[80vh] bg-white flex flex-col items-center justify-center lg:w-full">
          <div className="w-3/4 flex flex-col items-center justify-center gap-y-6">
            <h1 className='bg-yellow-300  text-4xl text-black lg:w-[14rem] mx-auto p-2 rounded-3xl  mt-10 '>ABOUT US</h1>
              <div className="mx-auto lg:w-auto lg:mt-10"> 
                  <h1 className='font-bold text-black text-3xl mb-3'>Mission statement</h1>
                  <p className='lg:w-auto text-center font-semibold text-black  '>
                    Our mission is to inspire, educate, and support students in realizing their full potential and preparing them to thrive in an ever-changing world. Through dynamic media, impactful events, and comprehensive resources, we foster a vibrant college community that cultivates academic excellence, personal growth, and overall well-being.
                  </p>
              </div>
              <div className="">
                  <h1 className='font-bold text-black text-3xl mb-3'>Vision statement</h1>
                  <p className='lg:w-auto text-center font-semibold text-black'>We envision a future where students are holistically developed, equipped with the knowledge, skills, and support needed to thrive academically, emotionally, and socially. Our aim is to cultivate a community that fosters self-discovery, critical thinking, and 20vwa sense of purpose and fulfillment among students. We strive to be the trusted resource that empowers students to become resilient, compassionate, and confident contributors to society, preparing them for a successful and meaningful future.</p>
              </div>
            </div>
           
        </div> 
    
    </>
  )
}

export default AboutUs
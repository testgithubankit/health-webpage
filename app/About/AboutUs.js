import React from 'react'

const AboutUs = () => {
  return (
    <>
    <section className='bg-grey-500 aboutBanner border-t'>
        <div className='max-w-[640px] mx-auto mt-2 md:mt-10 text-center px-5 md:px-1'>
            <h1 className='text-xl font-bold md:text-4xl mb-3'>About Us</h1>
            <p className='text-md md:text-xl'>House Works is a comprehensive and easy-to-use platform that helps patients find the best doctors, hospitals, get second opinions and top-quality case reviews, and lots more.
            </p>
            <img 
            className="inline"
            src="../images/about/about.svg"
            alt="About HW" />
        </div>
    </section>
    </>
   
  )
}

export default AboutUs
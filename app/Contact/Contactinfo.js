import React from 'react'
const Contactinfo = () => {
  return (
    <>
    <section>
        <div 
        className='max-w-full text-center
        bg-no-repeat bg-center text-[#fff] 
        bg-[url("https://househealthinc.com/wp-content/uploads/2021/11/BG-contact-hero-New.png")]'>
            <div 
            className='flex flex-col p-10 min-h-[100px] justify-center item-center 
            bg-indigo-500 text-center items-center'>
                <h1 className='text-xl md:text-2xl xl:text-3xl font-bold'> Contact Us</h1>
                <p className='text-md md:text-xl mt-2 text-[#fff]'>We Would Be Happy To Assist You</p>
            </div>       
        </div>
        <div 
        className='text-[#101426cc] pt-10 sm:pt-16 gap-6 max-w-[1140px] mx-auto items-center grid grid-cols-1 md:grid-cols-3 py-10 px-5 text-center
        bg-no-repeat bg-left bg-[url("https://househealthinc.com/wp-content/uploads/2021/11/BG-contact-info.png")]'>
            <div className='shadow-md rounded-2xl rounded-bl-[70px] bg-[#f7f9fc] p-10 md:p-12 md:h-[225px]'>
                <img src="../images/contact/Phoneicon.png"  
                className="max-w-[70px] text-center inline"/>
                <h3 className='text-xl md:text-2xl font-regular py-3'>Give Us A Call</h3>
                <p className='text-[#101426cc] text-xl'>2093375705</p>
            </div>
            <div className='shadow-md rounded-2xl rounded-bl-[70px] bg-[#f7f9fc] p-10 md:p-12 h-[225px]'>
                <img src="../images/contact/Location-icon.png"  
                className="max-w-[70px] text-center inline"/>
                <h3 className='text-xl md:text-2xl font-regular py-3'>We're On The Map</h3>
                <p className='text-[#101426cc]'>25550 HAWTHORNE BLVD</p>
            </div>
            <div className='shadow-md rounded-2xl rounded-bl-[70px] bg-[#f7f9fc] p-10 md:p-12 h-[225px]'>
                <img src="../images/contact/Mail-icon.png"  
                className="max-w-[70px] text-center inline"/>
                <h3 className='text-xl md:text-2xl font-regular py-3'>Send Us A Message</h3>
                <p className='text-[#101426cc]'>admin@houseworksinc.co</p>
            </div>
        </div>
        <div className='hwContactmap max-w-[1140px] mx-auto mb-0 sm:mb-15 rounded-md'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.6954564675134!2d-118.35103992429451!3d33.79436177325513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd4baaf2b68937%3A0x62ecf2b961b1b32b!2s25550%20Hawthorne%20Blvd%20STE%20212%2C%20Torrance%2C%20CA%2090505%2C%20USA!5e0!3m2!1sen!2sin!4v1696417225204!5m2!1sen!2sin" className="px-5 w-[100%] md:w-[1140px] h-[250px] sm:h-[300px] md:h-[450px] mb-0 sm:my-10 rounded-xl"></iframe>
        </div>
    </section>
    </>
  )
}

export default Contactinfo
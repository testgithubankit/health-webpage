import React from 'react'

const CaseReviewhead = () => {
  const hwproviderBlocks = [
	  {
	    id: 1,
      title: 'The best doctors will review your case',
	    imageUrl: '../Images/casereview/hwCR01.png',
	    description: 'Our team of expert doctors will review your case for freeand will guide you on further steps.',
	    
	  },
	  {
	    id: 2,
      title: 'Submit a Case from any location',
	    imageUrl: '../Images/casereview/hwCR02.png',
	    description: 'Our team of expert doctors will review your case no matter from which location you submit a case for review.',
	  },
	  {
	    id: 3,
      title: 'There is no cost involved',
	    imageUrl: '../Images/casereview/hwCR03.png',
	    description: 'Your case will be reviewed for free from the top doctors in the US',
	  },
	  {
	    id: 4,
      title: 'Your personal information is safe',
	    imageUrl: '../Images/casereview/hwCR04.png',
	    description: 'You can trust us with your information, we take utmost care to keep your medical information safe.',
	  },
	];
  return (
    <>
    <section className='border-t'>
        <div className='max-w-[840px] mx-auto mt-2 md:pt-10 text-center p-5 md:px-1'>
            <h1 className='text-xl font-bold md:text-4xl mb-3'>House Works 
            <span className='text-[#6e2feb] mb-2'> Case Review</span></h1>
            <p className='text-md md:text-2xl'>Get your Case reviewed by a team of best doctors for free</p>
        </div>

        <div className='max-w-[1140px] mx-auto pt-10'>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-25 lg:gap-25 items-center">
            <div className="">
                <ul className="">
                {hwproviderBlocks.map((block) => (
                <li className="hwprovider-lists flex items-center gap-4 pt-6" key={block.id}>
                  <div className='min-w-[70px]'> 
                    <img src={block.imageUrl} alt={block.title} />
                  </div>
                  <div>
                    <h4 className='font-semibold'>{block.title}</h4>
                    <p>{block.description}</p>
                  </div>
                </li>
                ))}
              </ul>
            </div>
            <div className="">
              <img 
              className="hover:scale-105 duration-500" 
              src='../Images/casereview/CRDashboard.svg' 
              alt='{aboutHouseworkProvider.title}' />
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default CaseReviewhead
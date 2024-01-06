import React from 'react'

const Howtoget = () => {
    const CRhead = {
		title: "How to get a Case reviewed?",
		decription: "Case review is for patients and next of kin, to be able to get expert opinion with no geographical boundaries."
	}

	// Sample data for each block
	const casereviewBlocks = [
	  {
	    id: 1,
	    imageUrl: '../Images/casereview/htgCR01.svg',
	    description: 'You signup and submit \n your case',
	    
	  },
	  {
	    id: 2,
	    imageUrl: '../Images/casereview/htgCR02.svg',
	    description: 'You get timely updates and status reports for your case',
	  },
	  {
	    id: 3,
	    imageUrl: '../Images/casereview/htgCR03.svg',
	    description: 'Our team of providers will review the case & recommend suitable treatment',
	  },
	  {
	    id: 4,
	    imageUrl: '../Images/casereview/htgCR04.svg',
	    description: 'We suggest the next course of action',
	  }
	];

	return(
		<>
			<section className="text-center pt-10 md:pt-20 md:py-10">
				<div className="max-w-[1140px] mx-auto">
					<div className="sec_head max-w-[645px] mx-auto px-8">
			          <h2 className="sec_title center">{CRhead.title}</h2>
			          <p className="text-md md:text-xl font-regular">{CRhead.decription}</p>
			        </div>
					<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 text-center gap-10 py-10">
				      {casereviewBlocks.map((block) => (
				        <div className="bg-grey-100 hover:scale-105 duration-500 md:px-4 px-4" key={block.id}>
				          <img className="inline-block mb-4" src={block.imageUrl} alt={block.title} />
				          <p>{block.description}</p>
				        </div>
				      ))}
					</div>
				</div>
			</section>
		</>
	)
}
export default Howtoget
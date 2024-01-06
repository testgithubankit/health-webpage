import React from 'react'

const CareJourney = () => {
  const CJhead = {
		title: "Care Journey",
		decription: "A vertically integrated health information tool that works in conjunction with other systems to provide parallel patient care clinical flow, inter-coordination and feed-back loops for all involved parties."
	}

	// Sample data for each block
	const journeyBlocks = [
	  {
	    id: 1,
	    title: 'Referral Phase',
	    description: 'The patient is referred to the platform by their doctor or family',
	    imageUrl: '../images/home/HWreferal.svg',
	  },
	  {
	    id: 2,
	    title: 'Evaluation Phase',
	    description: 'Diagnostics are conducted, and experts are consulted to get a better picture of the patient’s health',
	    imageUrl: '../images/home/HWevaluation.svg',
	  },
	  {
	    id: 3,
	    title: 'Treatment Phase',
	    description: 'Patient undergoes surgical or medical treatment as suggested by their doctors',
	    imageUrl: '../images/home/treatmentPhase.svg',
	  },
	  {
	    id: 4,
	    title: 'Surveilance Phase',
	    description: 'After the treatments, the patients continue to be under expert surveillance',
	    imageUrl: '../images/home/HWsurvelience.svg',
	  },
	];

	return(
		<>
			<section className="px-5 py-10 sm:py-16" id="hwCareJourney">
				<div className="max-w-[1140px] mx-auto">
					<div className="sec_head max-w-[750px]">
			          <h2 className="sec_title left">{CJhead.title}</h2>
			          <p className="sec_desc font-normal sm:font-medium">{CJhead.decription}</p>
			        </div>
					<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-2 md:gap-4 pt-6 md:pt-10">
				      {journeyBlocks.map((block) => (
				        <div className="md:mt-6 mt-5 mb-2 relative border bg-[#fff] hover:scale-105 duration-500 p-5 pt-10 rounded-md" key={block.id}>
				          <img className='absolute bottom-[90%] sm:bottom-[85%]' src={block.imageUrl} alt={block.title} />
				          <h3 className='font-bold mb-2 mt-2 text-[#101426]'>{block.title}</h3>
				          <p>{block.description}</p>
				        </div>
				      ))}
					</div>
				</div>
			</section>
		</>)
}

export default CareJourney
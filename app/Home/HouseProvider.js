import React from 'react'

const HouseProvider = () => {
    const aboutHouseworkProvider = {
		title: "",
		decription: "House Works helps you search for providers, Submit a case for review and learn everything about Transplant and Oncology care journey.",
		imageUrl: './images/home/hwsearchprovider.png'
	}

	// Sample data for each block
	const hwproviderBlocks = [
	  {
	    id: 1,
	    imageUrl: '../images/home/hwsignup.png',
	    description: 'You signup and submit your case',
	    example: 'e.g. Oncology'
	  },
	  {
	    id: 2,
	    imageUrl: '../images/home/timely.svg',
	    description: 'You get timely updates and status reports for your case',
	    example: 'eg. 12001'
	  },
	  {
	    id: 3,
	    imageUrl: '../images/home/review.svg',
	    description: 'Our team of providers will review the case & recommend suitable treatment',
	    example: 'eg. Plainsboro Hospital'
	  }
	];
	return(
		<>
			<section className="hwSection py-10 sm:py-12 md:py-20" >
				<div className="max-w-[1140px] mx-auto flex justify-between items-center grid grid-col-2 px-5">
					<div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 items-center">
						<div className="hwHouseworkProviderLeft">
							<img className="hover:scale-105 duration-500" src={aboutHouseworkProvider.imageUrl} alt={aboutHouseworkProvider.title} />
						</div>
						<div className="hwAHouseworkProviderRight">
							<div className="sec_head">
					          <h2 className="sec_title left text-lg">
							  How to make best use of <span className='sm:inline'><br /></span> HW Provider Search
							  </h2>
					        </div>  
					          <ul className="sec_desc">
					           {hwproviderBlocks.map((block) => (
						        <li className="hwprovider-lists flex items-center gap-3 py-3" key={block.id}>
						          <img src={block.imageUrl} alt={block.title} />
						          <p>{block.description}<br/><span className='font-bold'>{block.example}</span>
						          </p>
						        </li>
						      ))}
					        </ul>
				        </div>
					</div>
				</div>
			</section>
		</>
	)
}

export default HouseProvider
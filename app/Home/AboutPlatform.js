'use client'
import React, { useEffect,useState } from 'react';
import {motion,useAnimation} from 'framer-motion';
const AboutPlatform = () => {
    const controls=useAnimation();
	const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

	useEffect(() => {
		controls.start({
		  opacity: scrollY > 100 ? 1 : 0,
		  y: scrollY > 100 ? 5 : 20,
		  transition: { duration: 0.8 },
		});
	  }, [scrollY, controls]);

	  const aboutThePlatform = {
		title: "About the Platform",
		decription: "House Works helps you search for providers, Submit a case for review and learn everything about Transplant and Oncology care journey.",}

	return(
		<>
		
			<section>
				<motion.div initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}>
				<div className="max-w-[1140px] mx-auto px-5 md:py-20 py-5">
					<div className="flex flex-col sm:flex-row items-center">
						<div className="pr-5 sm:pr-15 lg:pr-15 sm:basis-1/2">
							<div className="sec_head">
					          <h2 className="sec_title left">{aboutThePlatform.title}</h2>
					          <p className="text-md sm:text-md md:text-xl lg:text-3xl">{aboutThePlatform.decription}</p>
					        </div>
				        </div>
						<div className="hwAboutPlatformRight pt-10 px-5 sm:basis-1/2">							
							<img className="hidden sm:block hover:scale-105 duration-500"
							 src="./images/home/about-us.png" alt={aboutThePlatform.title} />
							<img className="block sm:hidden hover:scale-105 duration-500"
							 src="./images/home/about-us-mobile.svg" alt={aboutThePlatform.title} />
						</div>
					</div>
				</div>
			</motion.div>
			</section>
		</>
  )
}

export default AboutPlatform
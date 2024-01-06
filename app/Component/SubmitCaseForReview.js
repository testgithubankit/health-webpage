"use client";
import React, { useState } from 'react';

import FaAngleDown from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';


const SubmitCaseForReview = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='transition duration-300 ease-out max-w-[300px] mx-auto fixed bottom-0 right-4 left-auto z-10 bg-gradient-to-b from-[#f7f4ff] to-[#ece3fd] rounded-t-xl '> 
      <div className='max-w-[300px] py-2 px-6 bg-gradient-to-b from-[#f7f4ff] to-[#ece3fd] rounded-t-xl'>
        <button onClick={toggleContent}
          className='flex justify-between gap-1 items-center'
        ><span className='font-extrabold text-base text-[#6e2feb] racking-wide'>Submit a Case for Review</span>
        <span className=''>{isOpen ? <FiChevronDown className='text-[#6e2feb] text-3xl'/> : <FiChevronUp className='text-[#6e2feb] text-3xl' />}
        </span>
        </button>
     </div>
      {isOpen && (
        <div className='border-t px-4 py-3 max-w-[281px]'>
          <p className='text-sm'>With our case review, we enable the patients and their next of kin to get an expert opinion without any geographical boundaries
          </p>
          <div className="image-container py-2">
            <div className="flex items-start pt-2">
              <img className="w-8" src="../Images/casereview/htgCR01.svg" alt="Image 1" />
              <p className='pl-2 text-sm'>You signup and submit your case</p>
            </div>
            <div className="flex items-start py-2">
              <img className="w-8" src="../Images/casereview/htgCR02.svg" alt="Image 1" />
              <p className='pl-2 text-sm'>You get timely updates and status reports for your case</p>
            </div>

            <div className="flex items-start">
              <img className="w-8" src="../Images/casereview/htgCR03.svg" alt="Image 1" />
              <p className='pl-2 text-sm'>Our team of providers reviews the case & recommend suitable treatment</p>
            </div>
            <div className="flex items-start py-2">
              <img className="w-8" src="../Images/casereview/htgCR04.svg" alt="Image 1" />
              <p className='pl-2 text-sm'>We suggest the next course of action</p>
            </div>
          </div>
         <div className='py-1 text-center'>
            <a 
            href='#'
            className='w-full font-bold text-sm text-[#fff] rounded-md bg-[#6e2feb] flex items-center justify-center p-2 cursor-pointer'>Know More</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmitCaseForReview;
"use client"
import React from 'react';
import HospitalsSearch from './HospitalsSearch';
// import SubmitCaseForReview from '@/Components/SubmitCaseForReview';

const SearchHospitals = () => {
  return (
    <>
      <section
        className="SearchDoctors mb-1"
      >
        <HospitalsSearch />
        {/* <SubmitCaseForReview /> */}
      </section>
    </>
  );
}

export default SearchHospitals;
'use client'
import React, { useState, useEffect } from 'react';
import HwSearchZip from '../../Component/HwSearchZip'
import HWLoader from '../../Component/HWLoader';
import HwShareon from '../../Component/HwShareon';
import MedicareNote from '../../Component/MedicareNote';

import {PiGenderMaleLight, PiShareNetwork} from "react-icons/pi";
import {BsTelephone, BsArrowLeft} from "react-icons/bs";
import {SlLocationPin} from "react-icons/sl";
import {BiFilterAlt, BiCheck} from "react-icons/bi";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {RiSearchLine} from 'react-icons/ri';
import {GrClose} from 'react-icons/gr';
import Modal from 'react-modal';

async function fetchHospitals(page, perPage) {
    const response = await fetch(`https://api.coc.houseworksinc.co/api/v1/hospitals/?page=${page}&per_page=${perPage}`)
    const data = await response.json();
    return data;
}

export default function ApiData() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [selectedHospital, setSelectedHospital] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [showZipCode, setShowZipCode] = useState(null);
    const [additionalInfo, setAdditionalInfo] = useState({});
    const [selectedHospitalId, setSelectedHospitalId] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);
    const [showCheckboxes, setShowCheckboxes] = useState(false);
    const [filterModalIsOpen, setFilterModalIsOpen] = useState(false);
    const [compareModalIsOpen, setCompareModalIsOpen] = useState(false);

    const [doctorsData, setDoctorsData] = useState([]);

    const [page, setPage] = useState(1);
    const [perPage] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    const [totalDataCount, setTotalDataCount] = useState(0);
    const [selectedItemID, setSelectedItemID] = useState(null);
    const [selectedPage, setSelectedPage] = useState(1);

    // Capitalize the first letter of each word
    function capitalizeString(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    //Add Search Icon in Search Filter
    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };
    // Share on Social Media
    const [isShareOpen, setIsShareOpen] = useState(false);
    const toggleShare = () => {
      setIsShareOpen(!isShareOpen);
    };

    //Loader 
    const [isLoading, setIsLoading] = useState(true);

    const handleItemClick = (itemId) => {
      setSelectedItemID(itemId);
      //setActiveItemID(itemId);
    };
    
    useEffect(() => {
      const fetchData = async () => {
        console.log(window.location);
        let myKeys = window.location.search;
        console.log("k & V :", myKeys);
        let urlParams = new URLSearchParams(myKeys);
        let param1 = urlParams.get("search");
        console.log(param1);
        let filterParams = new URLSearchParams(param1);
        // Get values for type, searchFor, and organ
        let type = filterParams.get("type");
        let searchFor = filterParams.get("searchFor");
        let organ = filterParams.get("organ");
        console.log(type, searchFor, organ);
        try {
          console.log(type,organ);
          const apiUrl=`https://api.coc.houseworksinc.co/api/v1/doctors/?type=${type}&organ=${organ}`;
          const response = await fetch(apiUrl);
          const result = await response.json();
          setDoctorsData(result.results);
          console.log(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);

    // Filter Pagination 
    const loadMore = () => {
      if (page < totalPages) {
        setPage(page + 1);
      }
    };
    const loadPrevious = () => {
      if (page > 1) {
        setPage(page - 1);
      }
    };
    const generatePageNumbers = () => {
      const pageNumbers = [];
      const numPageLinksToShow = 5;
      let startPage = Math.max(1, page - Math.floor(numPageLinksToShow / 1));
      let endPage = Math.min(totalPages, startPage + numPageLinksToShow);

      if (endPage - startPage < numPageLinksToShow) {
        startPage = Math.max(1, endPage - numPageLinksToShow + 1);
      }
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
  };

    // Result Load Code
    useEffect(() => {
      async function loadResults() {
        const data = await  fetchHospitals(page, perPage);
        setResults(data.results);
        setTotalDataCount(data.count);
        setTotalPages(Math.ceil(data.count / perPage));
        if (data.results && data.results.length > 0) {
          setSelectedItemID(data.results[0].id);
        }
        setIsLoading(false);
      }
      loadResults();
    }, [page,perPage]);

    const toggleZipCode = (HospitalId) => {
      setShowZipCode(HospitalId);
      setAdditionalInfo(true)
      setSelectedHospitalId(HospitalId);
    };

    const OpenCompareModal = () => {
      setCompareModalIsOpen(true);
    };
    
    const closeCompareModal = () => {
      setCompareModalIsOpen(false);
      setSelectedItems([]);
    };

    const selectedItemsData = selectedItems.map((itemId) => {
      const selectedItem = results.find((item) => item.id === itemId);
      return selectedItem;
    });
    
    useEffect(() => {
      async function loadDefaultHospital(){
        const data = await fetchHospitals(1,1);
        setResults(data.results);
        if (data.results && data.results.length > 0) {
          setShowZipCode(data.results[0].id);
          setSelectedItemID(data.results[0].id); 
        }
      }
      loadDefaultHospital();
    }, []);

    const closeModal = () => {
      setModalIsOpen(false);
    };

    const openCompareModal = () => {
      setCompareModalIsOpen(true);
    };

    const openModal = (Hospital) => {
      setSelectedHospital(Hospital);
      setModalIsOpen(true);
    };
    const toggleSelectItem = (itemId) => {
      if (selectedItems.includes(itemId)) {
        setSelectedItems(selectedItems.filter((id) => id !== itemId));
      } else {
        setSelectedItems([...selectedItems, itemId]);
      }
    };

    const getFullGenderName = (gender) => {
      if (gender === 'M') {
        return 'Male';
      } else if (gender === 'F') {
        return 'Female';
      }
      return gender;
    };
    const openFilterModal = () => {
      setFilterModalIsOpen(true);
    };

    const closeFilterModal = () => {
      setFilterModalIsOpen(false);
    };

    const filteredResults = (results || []).filter((item) => {
      if (searchTerm === "") {
          return true;
      } else if (item.facility_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return true;
      }
      return false;
    });
    const closeSelectedItem = (itemId) => {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    };
    return (
        <>
          {isLoading ? ( <HWLoader />) : (
            <>
            <div className='w-full bg-[#fff] z-40'>
                <Modal
                  className='min-h-[100vh] overflow-hidden bg-[#fff] border-none'
                  isOpen={compareModalIsOpen}
                  onRequestClose={closeCompareModal}
                  contentLabel="Compare Hospitals"
                >
                <div className='relative sm:p-10 mt-16 mx-auto '>
                      <div className='absolute top-4 left-12 font-bold'>
                      {showCheckboxes && (
                        <button 
                        className="min-w-[4px] mr-2 rounded-[100px] gap-x-2.5 p-2.5 font-semibold text-[#fff] bg-[#6e2feb] hover:bg-[#6e2feb]" 
                        onClick={() => {
                          closeCompareModal();
                          setShowCheckboxes(false);
                        }}><BsArrowLeft /></button> )}Compare Hospitals
                        </div>


                      <div className="flex bg-[#fff] mt-10 border-t border-[#e4e9f2]">
                          <div className="compareLeft w-[361px]">
                            <div className="flex flex-1 items-center py-10 gap-4 border-b min-h-[181px] min-w-[361px]">
                                <div>
                                  <img className="min-w-[50px]" src="../images/search/compareDoctor.svg" />
                                </div>
                                <div className="font-semibold text-[#101426]">Hospital</div>
                            </div>

                            <div className="flex items-center justify-start gap-4 py-5 sm:h-[140px]">
                                <div>
                                  <img className="min-w-[50px]" src="../images/search/affiliations.svg" />
                                </div>
                                <div className="font-semibold text-[#101426]">Hospital Type</div>
                            </div>

                            <div className="flex items-center justify-start gap-4 px-0 py-5 sm:h-[140px]">
                                <div>
                                  <img className="min-w-[50px]" src="../images/EmergencyService.png" />
                                </div>
                                <div className="font-semibold text-[#101426]">Emergency Services</div>
                            </div>

                            <div className="flex items-center py-10 gap-4 sm:h-[140px]">
                                <div>
                                  <img className="min-w-[50px]" src="../images/search/education_training.svg" />
                                </div>
                                <div className="font-semibold text-[#101426]">Hospital Ownership</div>
                            </div>
                          </div>{/* CompareLeft End */}

                    
                          <div className="compareRight scroll-smooth overflow-x-scroll custom-scrollbar">
                          <div className="flex justify-between gap-4 border-b border-[#e4e9f2]">
                            {selectedItemsData.map((item, index) => (
                              <div key={index} className={`flex-1 px-4 relative py-6 sm:min-w-[370px] min-h-[180px] ${index % 2 === 0 ? 'bg-[#f7f9fc]' : 'bg-white'}`}>
                                {index > 0 && (
                                  <button className="hidden absolute top-4 right-6 cursor-pointer z-10" onClick={() => closeSelectedItem(item.id)}>X</button>
                                )}
                              <div className="font-bold text-lg hidden">
                                {`${item.facility_name}`}
                              </div>
                              <div className="mb-2 flex">
                                    <div className="flex items-center pr-6 text-[#8F9BB3] font-semibold">
                                        <div className='min-w-[120px]'>NPI Facility ID:</div> 
                                        <div className='font-normal'>{`${item.facility_id}`}</div>
                                    </div>
                                    <div className="px-6 flex items-center text-[#8F9BB3] border-l">
                                       
                                            {item.hospital_overall_rating >= 1 ? (
                                                <AiFillStar className='text-[#ffa940] text-xl' />
                                            ) : (
                                                <AiOutlineStar className='text-[#ffa940] text-xl' />
                                            )}
                                            {item.hospital_overall_rating >= 2 ? (
                                                <AiFillStar className='text-[#ffa940] text-xl' />
                                            ) : (
                                                <AiOutlineStar className='text-[#ffa940] text-xl' />
                                            )}
                                            {item.hospital_overall_rating >= 3 ? (
                                                <AiFillStar className='text-[#ffa940] text-xl' />
                                            ) : (
                                                <AiOutlineStar className='text-[#ffa940] text-xl' />
                                            )}
                                            {item.hospital_overall_rating >= 4 ? (
                                                <AiFillStar className='text-[#ffa940] text-xl' />
                                            ) : (
                                                <AiOutlineStar className='text-[#ffa940] text-xl' />
                                            )}
                                            {item.hospital_overall_rating >= 5 ? (
                                                <AiFillStar className='text-[#ffa940] text-xl' />
                                            ) : (
                                                <AiOutlineStar className='text-[#ffa940] text-xl' />
                                            )}
                                    </div>
                              </div>
                              {item.phone_number.length > 0 && (
                                <div className="w-full text-[#8F9BB3] py-1 flex justify-start gap-2 items-center">
                                  <span><BsTelephone /></span> {`${item.phone_number}`}
                                </div>
                              )}
                              <div className="w-full text-[#8F9BB3] py-1 gap-2 items-center flex gap-2 mt-2">
                              <span><SlLocationPin /> </span>
                              {`${capitalizeString(item.address)}, ${capitalizeString(item.state), (item.city), (item.zip_code)} `}
                              
                              </div>
                            </div>
                          ))}
                          </div>
                          {/* Hospital Type Row */}
                          <div className="H_T flex items-center gap-4">
                            {selectedItemsData.map((item, index) => (
                              <div key={index} className={`flex items-center sm:min-w-[370px] h-[140px] px-4 py-5 ${index % 2 === 0 ? 'bg-[#f7f9fc]' : 'bg-white'}`}>
                                <p className='flex items-center'>{item.hospital_type}</p>
                              </div>
                            ))}
                          </div>

                          {/* Emergency Service */}      
                          <div className="E_S flex items-center gap-4">
                            {selectedItemsData.map((item, index) => (
                            <div key={index} className={`flex items-center sm:min-w-[370px] min-h-[140px] px-4 py-5 min-w-[25%] items-center flex-1 ${index % 2 === 0 ? 'bg-[#f7f9fc]' : 'bg-white'}`}>
                              <div>
                                <p>
                                {item.emergency_services ? (
                                    <span>Yes</span>
                                ) : (
                                    <span>No</span>
                                )}
                                    </p>
                              </div>
                            </div>
                            ))}
                          </div>

                          {/* Hospital Honorship */}
                          <div className="H_N flex text-left gap-4 ">
                            {selectedItemsData.map((item, index) => (
                              <div key={index} className={`min-h-[140px] flex items-center sm:min-w-[370px] px-4 py-5 ${index % 2 === 0 ? 'bg-[#f7f9fc]' : 'bg-white'}`}>
                                <p className=''>{item.hospital_ownership}</p>
                              </div>
                            ))}
                          </div>
                        </div>{/* ###CompareRight End */}
                      </div>
                  </div>
              </Modal>
            </div>

            {/* Filter Form Result Start here */}
            <Modal className='hidden ease-in duration-300 max-w-[100%] sm:w-[485px] bg-[#fff] px-6 py-0 border rounded-md shadow-md mt-4 fixed right-0 top-24 z-50'
                isOpen={filterModalIsOpen}
                onRequestClose={closeFilterModal}
                contentLabel="Filter Hospitals">
                <HwSearchZip />
                <div className="flex items-center gap-2 mt-6 justify-end mb-6">
                  <button className="min-w-[104px] rounded-md gap-x-2.5 p-2.5 font-semibold text-gray-900 bg-[#fff] hover:bg-[#f7f9f7]" onClick={closeFilterModal}>Cancel</button>
                  <button className="min-w-[104px] rounded-md gap-x-2.5 p-2.5 font-semibold text-[#fff] bg-[#6e2feb] hover:bg-[#6e2feb]" onClick={filterModalIsOpen}>Apply</button>
                </div>
            </Modal>{/* ## End Filter Form here */}
            
            <div className='bg-[#fff] border-b border-[#e4e9f2]'>
              <div className='flex items-center justify-between p-4 max-w-[1355px] mx-auto'>
                  {/* HW Filter Top Left */}
                  <div className=''>
                    <p>Showing <span className='font-semibold'>{totalDataCount}</span> results</p>
                  </div>
                  {/* HW Filter Top Right */}
                  <div className='flex items-center gap-5'>
                    <div className=''>
                      <button onClick={() => setShowCheckboxes(true)} active={selectedItems.length !== 0}>
                        Compare
                      </button>
                    </div>
                    <div className='hwFilter text-[#6e2feb]'>
                      <button className='flex gap-2 items-center' onClick={openFilterModal}>
                        <BiFilterAlt className='flex items-center text-[#6e2feb]'/> Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[1355px] mx-auto searhResults ease-in duration-300">
                  {/* Search Result Start here */}
                  <div className='searchResultsDiv bg-[#fff]'>
                      <div className='flex flex-col items-start sm:flex-row justify-between' >
                        <div className='basis-1/3 relative px-4 sm:px-0 border-r border-[#e4e9f2]'>
                        <div className='searchBox p-4 relative'>
                            <input
                                className="placeholder:text-slate-400 text-2xl block bg-[#F7F9FC] w-full border border-[#EDF1F7]-300 rounded px-2.5 py-3 shadow-sm focus:outline-none focus:border-[#6E2FEB]-500 focus:ring-[#6E2FEB]-500 focus:ring-1 sm:text-sm"
                                placeholder="Search"
                                type="text"
                                value={searchTerm}
                                onChange={handleSearchInputChange}
                            />
                            {searchTerm.length === 0 && (
                                <div className="ease-in-out duration-500 absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <RiSearchLine className='text-2xl'/>
                                </div>
                            )}
                            </div>

                          {filteredResults.map((item, index) => (
                          <div 
                            onClick={() => {
                              handleItemClick(item.id);
                              handleItemClick(item.id);
                            }
                          }
                          key={index} 
                          className={`rounded mb-2 sm:rounded-[0px] searchresultLists ease-in min-h-[150px] duration-300 cursor-pointer bg-[#f7f9fc] pl-8 pr-5 pt-4 pb-4 border-l-[6px] border-[#6e2feb] ${selectedItemID === item.id ? 'border-[#6e2feb] bg-[#fff]' : 'border-transparent'}`}>
                            <div className="flex justify-between items-center w-full mb-3 relative">
                                <div className='absolute -left-6 top-0'>
                                  {showCheckboxes && (
                                    <input
                                      type="checkbox"
                                      checked={selectedItems.includes(item.id)}
                                      onChange={() => toggleSelectItem(item.id)}
                                      className='w-4 h-4 rounded-none checked:bg-pink-500'
                                    />
                                  )}
                                </div>
                              <h3 onClick={() => openModal(item)} 
                              className="cursor-pointer text-[#101426CC] font-extrabold">
                              {`${capitalizeString(item.facility_name)}`}
                              </h3>
                              <div className="flex">
                                <PiShareNetwork className="text-2xl text-[#8F9BB3]" />
                              </div>
                            </div>
                            <div className="filterServices text-xs font-normal flex justify-start gap-2 items-center mb-2 cursor-pointer">
                              <span
                                onClick={() => toggleZipCode(item.id)}
                                className={`span_violet rounded-md bg-[#f0f5ff] text-[#1d39c4] border border-[#d6e4ff] ${
                                item.hospital_type ? 'py-1 px-2' : 'py-0 px-0'}`}>
                                {item.hospital_type}
                              </span>
                                <span
                                  onClick={() => toggleZipCode(item.id)}
                                  className="flex relative border-[#95de64] rounded-md bg-[#f6ffed] text-[#95de64] border py-1 px-2"
                                >{item.emergency_services ? (
                                    <BiCheck className='h-[16px] w-[16px] text-6xl leading-1'/>
                                ) : (
                                    <></>
                                )} Emergency Services
                                </span>
                            </div>
                            {item.phone_number.length > 0 && (
                            <div className="w-full text-[#101426] py-1 flex justify-start gap-2 items-center cursor-pointer">
                              <span onClick={() => toggleZipCode(item.id)}><BsTelephone /> </span> 
                                {/* {item.phone_number} */}
                            </div>
                            )}
                            <div onClick={() => toggleZipCode(item.id)} className="w-full text-[#101426] py-1 flex justify-start gap-2 items-center">
                              <span><SlLocationPin /> </span>
                                {`${capitalizeString(item.address)}`}<>, </>
                                {`${capitalizeString(item.city)}`}<>, </>
                                {`${capitalizeString(item.state)}`}<>, </>
                                {`${capitalizeString(item.zip_code)}`}
                            </div> 
                              
                            <div className='flex hospitalReview mt-4'>
                                {item.hospital_overall_rating >= 1 ? (
                                    <AiFillStar className='text-[#ffa940] text-xl' />
                                ) : (
                                    <AiOutlineStar className='text-[#ffa940] text-xl' />
                                )}
                                {item.hospital_overall_rating >= 2 ? (
                                    <AiFillStar className='text-[#ffa940] text-xl' />
                                ) : (
                                    <AiOutlineStar className='text-[#ffa940] text-xl' />
                                )}
                                {item.hospital_overall_rating >= 3 ? (
                                    <AiFillStar className='text-[#ffa940] text-xl' />
                                ) : (
                                    <AiOutlineStar className='text-[#ffa940] text-xl' />
                                )}
                                {item.hospital_overall_rating >= 4 ? (
                                    <AiFillStar className='text-[#ffa940] text-xl' />
                                ) : (
                                    <AiOutlineStar className='text-[#ffa940] text-xl' />
                                )}
                                {item.hospital_overall_rating >= 5 ? (
                                    <AiFillStar className='text-[#ffa940] text-xl' />
                                ) : (
                                    <AiOutlineStar className='text-[#ffa940] text-xl' />
                                )}
                            </div>
                          </div>  
                          ))} 

                          {/* ###Filter Pagination Start*/}
                          <div className='hwFitlerPagination mt-4 text-center'>
                            <div className='flex p-4 items-center justify-center gap-1 border-gray-200'>
                              {/* <button
                              className='inline-flex shadow-md items-center rounded-md text-sm px-3 py-2 text-gray-600 ring-1 hover:text-[#fff] ring-inset bg-[#f7f9fc] hover:bg-[#6E2FEB] ring-gray-100 focus:z-20 focus:outline-offset-0' 
                              onClick={loadPrevious} disabled={page === 1}>Prev</button> */}
                              
                              {/* {generatePageNumbers().map((pageNumber) => (
                                <button className='
                                  relative inline-flex shadow-md items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:text-[#fff] bg-[#f7f9fc] rounded-md ring-1 ring-inset ring-gray-100 hover:bg-[#6E2FEB] focus:z-20 focus:outline-offset-0
                                  ' key={pageNumber} onClick={() => setPage(pageNumber)}>{pageNumber}</button>
                              ))} */}
                              <p className='hidden'><span className='
                              relative shadow-md inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 rounded-md hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>...</span> {totalDataCount}</p>
                              {/* <button 
                              className='shadow-md inline-flex items-center bg-[#f7f9fc] rounded-md text-sm px-3 py-2 ring-1 ring-inset hover:text-[#fff] text-grey-600 hover:bg-[#6E2FEB] ring-gray-100 focus:z-20 focus:outline-offset-0'
                              onClick={loadMore} disabled={page === totalPages}>Next</button> */}
                            </div>
                          </div>{/* ###Filter Pagination End*/}

                          <div className='ease-in-out duration-500 filterCompareBtns sticky bottom-0 left-4 right-10 z-1 bg-[#fff] p-4 max-w-[480px] -shadow-sm'>
                            <div className='flex items-center justify-end gap-[10px]'>
                              <div className=''>
                                {showCheckboxes && (
                                  <button className='min-w-[104px] px-4 py-2.5 rounded-md font-semibold text-gray-900 hover:bg-gray-100' onClick={() => setShowCheckboxes(false)} active={selectedItems.length === 0}>Cancel</button>
                                )} 
                              </div>
                              <div className='ease-in-out duration-500'>
                                {showCheckboxes && (
                                  <button className="min-w-[104px] px-4 py-2.5 font-semibold text-[#fff] rounded-md bg-[#6e2feb] hover:bg-[#6e2feb]" onClick={OpenCompareModal}>Compare</button>
                                )} 
                              </div>
                              
                            </div>
                          </div>
                          {/* ###Filter Comparebtns End*/}
                        </div>

                        {/* ###Filter Details Start*/}
                        <div className='p-10 basis-2/3 sm:sticky top-[30px] ease-in duration-300'>
                          {selectedItemID && (
                              <div className=''>
                                  {filteredResults.map((item, index) => (
                                      item.id === selectedItemID && (
                                          <div key={index} className='detailsInner w-full ease-in-out duration-1500'>
                                            <div className="py-4 detailsTitle text-[#101426]">
                                                <h2 className="text-3xl font-semibold m-b-3 text-[#101426]">
                                                {`${capitalizeString(item.facility_name)}`}
                                                </h2>
                                                <div class="flex space-x-4 py-4 text-sm font-medium">
                                                    <div class="flex-auto flex justify-start items-center font-semibold">
                                                    <div className="mr-6 flex items-center gap-2 cursor-pointer shareBTN text-base font-semibold text-[#101426]"
                                                    onClick={toggleShare}>
                                                      <PiShareNetwork className="text-2xl text-[#8F9BB3] cursor-pointer" /> Share 
                                                      {isShareOpen && <HwShareon onClose={toggleShare} />}
                                                    </div>
                                                    <div class="px-6 border-x text-[#101426] text-base font-normal ">NPI Facility ID: <span className='font-semibold'>{item.facility_id}</span>
                                                    </div>
                                                    <div class="px-6 flex items-center gap-2">
                                                        <div className='text-[#101426] text-base font-normal'>Overall rating: </div>
                                                        <div className='flex hospitalReview'>
                                                            {item.hospital_overall_rating >= 1 ? (
                                                                <AiFillStar className='text-[#ffa940] text-xl' />
                                                            ) : (
                                                                <AiOutlineStar className='text-[#ffa940] text-xl' />
                                                            )}
                                                            {item.hospital_overall_rating >= 2 ? (
                                                                <AiFillStar className='text-[#ffa940] text-xl' />
                                                            ) : (
                                                                <AiOutlineStar className='text-[#ffa940] text-xl' />
                                                            )}
                                                            {item.hospital_overall_rating >= 3 ? (
                                                                <AiFillStar className='text-[#ffa940] text-xl' />
                                                            ) : (
                                                                <AiOutlineStar className='text-[#ffa940] text-xl' />
                                                            )}
                                                            {item.hospital_overall_rating >= 4 ? (
                                                                <AiFillStar className='text-[#ffa940] text-xl' />
                                                            ) : (
                                                                <AiOutlineStar className='text-[#ffa940] text-xl' />
                                                            )}
                                                            {item.hospital_overall_rating >= 5 ? (
                                                                <AiFillStar className='text-[#ffa940] text-xl' />
                                                            ) : (
                                                                <AiOutlineStar className='text-[#ffa940] text-xl' />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="py-6 border-y border-[#E4E9F2]-500 mb-5">
                                                {item.phone_number.length > 0 && (
                                                <div className="w-full text-[#101426] py-1 flex justify-start gap-2 items-center"><span><BsTelephone /> </span>
                                                    {item.phone_number}
                                                </div>)}
                                                <div className="w-full text-[#101426] py-1 flex justify-start gap-2 items-center"><span><SlLocationPin /> </span> 
                                                    {`${capitalizeString(item.address)}`}<>, </>
                                                    {`${capitalizeString(item.city)}`}<>, </>
                                                    {`${capitalizeString(item.state)}`}<>, </>
                                                    {`${capitalizeString(item.zip_code)}`}
                                                </div>
                                            </div>
                                            <div className='py-4 flex sm:items-center gap-1'>
                                                <div className="mr-0 min-w-[70px]">
                                                  <img src="../images/search/affiliations.svg"/></div>
                                                <div className='w-full'>
                                                  <p>Hospital Type</p>
                                                  <p className='font-bold'>{item.hospital_type}</p>
                                                </div>
                                            </div>
                                            <div className='py-4 flex sm:items-center gap-1'>
                                                <div className="min-w-[70px]">
                                                  <img src="../images/EmergencyService.png"/></div>
                                                <div className='w-full'>
                                                  <p>Emergency Services</p>
                                                  <p className='font-bold'>
                                                  {item.emergency_services ? (
                                                        <p className="">Yes</p>
                                                    ) : (
                                                        <p className="font-semibold">No</p>
                                                    )}
                                                </p>
                                                </div>
                                            </div>
                                            <div className='py-4 flex sm:items-center gap-1'>
                                                <div className="min-w-[70px]">
                                                  <img src="../images/HospitalHnrship.png"/></div>
                                                <div className='w-full'>
                                                  <p>Hospital Ownership</p>
                                                  <p className='font-bold'>
                                                    {item.hospital_ownership}
                                                  </p>
                                                </div>
                                            </div>
                                          </div>
                                          <MedicareNote />
                                        </div>
                                      )
                                  ))}
                              </div>
                          )}
                          </div>
                      </div>
                  </div>
              </div>
              {/* Detail Popup Start Here */}
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Hospital Details"
              className='w-full bg-[#fff] min-h-[100vh] pt-14 border-t mt-4'
            >
                {selectedHospital && (
                    <div className='singleDetails p-0 sm:p-10 max-w-[1370px] mx-auto'>
                        <button 
                        className='bg-[#F5F0FF] p-3 sm:px-4 sm:py-3 mt-4 rounded-[100px] ml-5'
                        onClick={closeModal}>
                        <GrClose className='text-xl'/>
                        </button>
                        <div className='p-5 flex justify-between'>
                            <div>
                                <h1 className='font-bold text-md sm:text-2xl md:text-3xl'>
                                    {`${capitalizeString(selectedHospital.facility_name)}`}
                                    </h1>
                                <div className='flex gap-2 pt-4 pb-2'>
                                    <div className=''>
                                        <p>NPI Facility ID: <span className='font-bold'>{`${selectedHospital.facility_id}`}</span></p>
                                    </div>
                                    <div class="px-6 flex items-center gap-2">
                                    <div>Overall rating: </div>
                                        <div className='flex hospitalReview'>
                                            {selectedHospital.hospital_overall_rating >= 1 ? (
                                                <AiFillStar className='text-[#ffa940] text-2xl' />
                                            ) : (
                                                <AiOutlineStar className='text-[#ffa940] text-2xl' />
                                            )}
                                            {selectedHospital.hospital_overall_rating >= 2 ? (
                                                <AiFillStar className='text-[#ffa940] text-2xl' />
                                            ) : (
                                                <AiOutlineStar className='text-[#ffa940] text-2xl' />
                                            )}
                                            {selectedHospital.hospital_overall_rating >= 3 ? (
                                                <AiFillStar className='text-[#ffa940] text-2xl' />
                                            ) : (
                                                <AiOutlineStar className='text-[#ffa940] text-2xl' />
                                            )}
                                            {selectedHospital.hospital_overall_rating >= 4 ? (
                                                <AiFillStar className='text-[#ffa940] text-2xl' />
                                            ) : (
                                                <AiOutlineStar className='text-[#ffa940] text-2xl' />
                                            )}
                                            {selectedHospital.hospital_overall_rating >= 5 ? (
                                                <AiFillStar className='text-[#ffa940] text-2xl' />
                                            ) : (
                                                <AiOutlineStar className='text-[#ffa940] text-2xl' />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden flex h-10 sm:h-11 gap-2 text-md sm:text-md font-bold text-[#6e2feb] py-2 rounded-md px-3 bg-[#F5F0FF]">
                              <PiShareNetwork className="text-md sm:text-xl md:text-md text-[#6e2feb] font-bold top-1 relative" /> Share
                            </div>
                        </div>
                        
                        <div className='p-6 border-y'>
                            {selectedHospital.phone_number.length > 0 && (
                            <div className="w-full text-[#8F9BB3] py-1 flex justify-start gap-2 items-center">
                              <span><BsTelephone /> </span> {`${selectedHospital.phone_number}`}
                              </div>)}
                            <div className="w-full text-[#8F9BB3] py-1 flex justify-start gap-2 items-center"><span><SlLocationPin /> </span>   
                                {`${capitalizeString(selectedHospital.address)}`}<>, </>
                                {`${capitalizeString(selectedHospital.city)}`}<>, </>
                                {`${capitalizeString(selectedHospital.state)}`}<>, </>
                                {`${capitalizeString(selectedHospital.zip_code)}`}</div>  
                            </div>

                        <div className='grid grid-cols-1 sm:grid-cols-3 p-4 sm:p-6 border-b gap-10 sm:items-start'>
                            <div className='flex items-center gap-3'>
                                <div className='min-w-[60px]'>
                                  <img src="./images/HospitalType.png"
                                    alt="Emergency Service"
                                  /> 
                                </div>
                                <div className=''>
                                    <p>Hospital type</p>
                                    <p className='font-bold'>{selectedHospital.hospital_type}</p>
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex items-center gap-3'>
                                    <div className=' min-w-[60px]'>
                                      <img src="./images/BoardCertificate.png"
                                        alt="Emergency Service"
                                      /> 
                                    </div>
                                    <div className=''>
                                        <p>Emergency Services</p>
                                        <p className='font-bold'>
                                        {selectedHospital.emergency_services ? (
                                            <p className="">Yes</p>
                                        ) : (
                                            <p className="font-semibold">No</p>
                                        )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex items-center gap-3'>
                                    <div className='min-w-[60px] '>
                                      <img src="./images/Education&Training.png"
                                        alt="Emergency Service"
                                      />
                                    </div>
                                    <div className=''>
                                        <p>Hospital Ownership</p>
                                        <p className='font-bold'>{selectedHospital.hospital_ownership}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pl-6'>
                          <MedicareNote />   
                        </div>
                  </div>
                )}
            </Modal>
          </>
          )}
        </>
    //     <>
    //   <div>
    //   <h1>Filtered Doctors</h1>
    //   <ul>
    //     {doctorsData.map((doctor) => (
    //       <li key={doctor.id}>
    //         <h3>{`${doctor.first_name} ${doctor.last_name}`}</h3>
    //         <p>NPI: {doctor.npi}</p>
    //         <p>Speciality: {doctor.primary_speciality}</p>
    //         {/* Add more details as needed */}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    //     </>
    );
}
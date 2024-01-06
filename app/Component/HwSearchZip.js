"use client";
import { useState, useEffect } from 'react';
const FilterBox = ({ title }) => {
    const [selectImage, setSelectImage] = useState('Kidney')
    return (
        <div className='transplantOrgans'>
            <div className='flex gap-2'>
                   <div className='hwFilterBox' style={{
                    border: selectImage === 'Kidney' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage === 'Kidney' ? '#6E2FEB' : '#101426',
                    backgroundColor: selectImage === 'Kidney' ? '#F5F0FF' : '#ffff'
                    }}
                    onClick={() => setSelectImage('Kidney')}>    
                    <img 
                    className='w-[36px]'
                    src={selectImage === 'Kidney' ? '../images/search/kidney_active.svg' : '../images/search/kidney.svg'}
                    alt='React Image' />
                    <span className={`${
                            selectImage === 'Kidney' ? 'text-[#6E2FEB]' : 'text-[#101426]'
                        }`}>Kidney</span>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage === 'Lungs' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage === 'Lungs' ? '#6E2FEB' : '#101426',
                    backgroundColor: selectImage === 'Lungs' ? '#F5F0FF' : '#ffff'
                    }}
                    onClick={() => setSelectImage('Lungs')}
                >
                    
                    <img 
                    className='w-[36px]'
                    src={selectImage === 'Lungs' ? '../images/search/lungs_active.svg' : '../images/search/lungs.svg'}
                    alt='React Image' />
                    <span className={`${
                        selectImage === 'Lungs' ? 'text-[#6E2FEB]' : 'text-[#101426]'
                    }`}>Lungs</span>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage === 'Liver' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage === 'Liver' ? '#6E2FEB' : '#101426',
                    backgroundColor: selectImage === 'Liver' ? '#F5F0FF' : '#ffff'
                    }}
                    onClick={() => setSelectImage('Liver')}
                >
                    <img 
                    className=''
                    src={selectImage === 'Liver' ? '../images/search/liver_active.svg' : '../images/search/liver.svg'}
                    alt='React Image' />
                    <span className={`${
                        selectImage === 'Liver' ? 'text-[#6E2FEB]' : 'text-[#101426]'
                    }`}>Liver</span>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage === 'Pancreas' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage === 'Pancreas' ? '#6E2FEB' : '#101426',
                    backgroundColor: selectImage === 'Pancreas' ? '#F5F0FF' : '#ffff'
                    }} onClick={() => setSelectImage('Pancreas')}
                >
                    <img 
                    className='w-[36px]'
                    src={selectImage === 'Pancreas' ? '../images/search/pancreas_active.svg' : '../images/search/pancreas.svg'}
                    alt='React Image' />
                     <span className={`${
                        selectImage === 'Pancreas' ? 'text-[#6E2FEB]' : 'text-[#101426]'
                    }`}>Pancreas</span>
                </div>
                {title}
            </div>
        </div>
    );
};


const Filter = ({ title }) => {
    const [selectImage1, setSelectImage1] = useState('Lungs')
    return (
        <div className='oncologyOrgans'>
            <div className='flex gap-2 flex-wrap'>
                <div className='hwFilterBox' style={{
                    border: selectImage1 === 'Lungs' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage1 === 'Lungs' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                    backgroundColor: selectImage1 === 'Lungs' ? '#F5F0FF' : '#ffff'
                    }}
                    onClick={() => setSelectImage1('Lungs')}>
                    <img 
                    className=''
                    src={selectImage1 === 'Lungs' ? '../images/search/lungs_active.svg' : '../images/search/lungs.svg'}
                    alt='React Image' />
                    <p className={`${
                    selectImage1 === 'Lungs' ? 'text-[#6E2FEB]' : 'text-gray-600 text-opacity-80'
                    }`}>Lungs</p>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage1 === 'Liver' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage1 === 'Liver' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                    backgroundColor: selectImage1 === 'Liver' ? '#F5F0FF' : '#ffff'
                }}
                    onClick={() => setSelectImage1('Liver')}
                >
                    
                    <img 
                    className=''
                    src={selectImage1 === 'Liver' ? '../images/search/liver_active.svg' : '../images/search/liver.svg'}
                    alt='React Image' />
                    <p className={`${
                    selectImage1 === 'Liver' ? 'text-[#6E2FEB]' : 'text-gray-600 text-opacity-80'
                    }`}>Liver</p>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage1 === 'Pancreas' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage1 === 'Pancreas' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                    backgroundColor: selectImage1 === 'Pancreas' ? '#F5F0FF' : '#ffff'
                }}
                    onClick={() => setSelectImage1('Pancreas')}
                >
                    <img 
                    className=''
                    src={selectImage1 === 'Pancreas' ? '../images/search/pancreas_active.svg' : '../images/search/pancreas.svg'}
                    alt='React Image' />
                    <p className={`${
                    selectImage1 === 'Pancreas' ? 'text-[#6E2FEB]' : 'text-gray-600 text-opacity-80'
                    }`}>Pancreas</p>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage1 === 'Bile duct' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage1 === 'Bile duct' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                    backgroundColor: selectImage1 === 'Bile duct' ? '#F5F0FF' : '#ffff'
                }}
                    onClick={() => setSelectImage1('Bile duct')}
                >
                   
                    <img 
                    className=''
                    src={selectImage1 === 'Bile duct' ? '../images/search/bile_duct_active.svg' : '../images/search/bile_duct.svg'}
                    alt='React Image' />
                    <p className={`${
                    selectImage1 === 'Bile duct' ? 'text-[#6E2FEB]' : 'text-gray-600 text-opacity-80'
                    }`}>Bile duct</p>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage1 === 'Adrenal' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage1 === 'Adrenal' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                    backgroundColor: selectImage1 === 'Adrenal' ? '#F5F0FF' : '#ffff'
                }}
                    onClick={() => setSelectImage1('Adrenal')}
                >
                    
                    <img 
                    className=''
                    src={selectImage1 === 'Adrenal' ? '../images/search/adrenal_active.svg' : '../images/search/adrenal.svg'}
                    alt='React Image' />
                    <p className={`${
                    selectImage1 === 'Adrenal' ? 'text-[#6E2FEB]' : 'text-gray-600 text-opacity-80'
                    }`}>Adrenal</p>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage1 === 'Rectum' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage1 === 'Rectum' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                    backgroundColor: selectImage1 === 'Rectum' ? '#F5F0FF' : '#ffff'
                }}
                    onClick={() => setSelectImage1('Rectum')}
                >
                    <img 
                    className=''
                    src={selectImage1 === 'Rectum' ? '../images/search/rectum_active.svg' : '../images/search/rectum.svg'}
                    alt='React Image' />
                    <p className={`${
                    selectImage1 === 'Rectum' ? 'text-[#6E2FEB]' : 'text-gray-600 text-opacity-80'
                    }`}>Rectum</p>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage1 === 'Breast' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage1 === 'Breast' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                    backgroundColor: selectImage1 === 'Breast' ? '#F5F0FF' : '#ffff'
                }}
                    onClick={() => setSelectImage1('Breast')}
                >
                
                    <img 
                    className=''
                    src={selectImage1 === 'Breast' ? '../images/search/breast_active.svg' : '../images/search/breast.svg'}
                    alt='React Image' />
                    <p className={`${
                    selectImage1 === 'Breast' ? 'text-[#6E2FEB]' : 'text-gray-600 text-opacity-80'
                    }`}>Breast</p>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage1 === 'Small intestine' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage1 === 'LSmall intestine' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                    backgroundColor: selectImage1 === 'Small intestine' ? '#F5F0FF' : '#ffff'
                }}
                    onClick={() => setSelectImage1('Small intestine')}
                >
                   
                    <img 
                    className=''
                    src={selectImage1 === 'Small intestine' ? '../images/search/small_intestine_active.svg' : '../images/search/small_intestine.svg'}
                    alt='React Image' />
                    <p className={`${
                    selectImage1 === 'Small intestine' ? 'text-[#6E2FEB] text-center leading-4' : 'text-gray-600 text-opacity-80 text-center leading-4'
                    }`}>Small intestine</p>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage1 === 'Stomach' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage1 === 'Stomach' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                    backgroundColor: selectImage1 === 'Stomach' ? '#F5F0FF' : '#ffff'
                }}
                    onClick={() => setSelectImage1('Stomach')}
                >
                    <img 
                    className=''
                    src={selectImage1 === 'Stomach' ? '../images/search/stomach_active.svg' : '../images/search/stomach.svg'}
                    alt='React Image' />
                    <p className={`${
                    selectImage1 === 'Stomach' ? 'text-[#6E2FEB]' : 'text-gray-600 text-opacity-80'
                    }`}>Stomach</p>
                </div>
                <div className='hwFilterBox' style={{
                    border: selectImage1 === 'Colon' ? '1px solid #C8ADFF' : '1px solid #C5CEE0',
                    color: selectImage1 === 'Colon' ? '#6E2FEB' : 'rgb(16 20 28 / 80%)',
                    backgroundColor: selectImage1 === 'Colon' ? '#F5F0FF' : '#ffff'
                }}
                    onClick={() => setSelectImage1('Colon')}
                >
                    <img 
                    className='max-w-[40px]'
                    src={selectImage1 === 'Colon' ? '../images/search/colon_active.png' : '../images/search/colon.png'}
                    alt='React Image' />
                    <p className={`${
                    selectImage1 === 'Colon' ? 'text-[#6E2FEB]' : 'text-gray-600 text-opacity-80'
                    }`}>Colon</p>
                </div>
                {title}
            </div>
        </div>
    )
};

const HwSearchZip = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    const [showInput, setShowInput] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Transplant');
    const [selectedMutiple, setselectedMutiple] = useState('Doctor');
    const [selectedZip, setSelectedZip] = useState();
    const handleTabClick = (tab) => {
        setSelectedTab(tab);
        setSelectedZip(tab);
        if (tab === 0) {
            setShowInput(true);
        } else {
            setShowInput(false);
        }
    };

    const handleInputChange = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };
    return (
        <div>
            {showInput ? (
                <div className='flex flex-wrap'>
                    <p style={{ marginTop: '30px', marginLeft: '6%' }}>Type a doctor’s or a hospital’s name to find relevant results.</p>
                    <input
                        type="text"
                        placeholder="Start typing"
                        style={{
                            marginTop: '30px', marginLeft: '6%', width: '28%', padding: '14px', borderRadius: '6px',
                            border: selectedZip === 'text' ? '1px solid red' : '1px solid #C5CEE0',
                        }}
                        onClick={() => setSelectedZip('text')}
                        onInput={handleInputChange}
                    />
                    {isLoading && <p>Loading...</p>}
                </div>
            ) : (
                <div className='zipCodeFilter'>
                    <h2 className='font-semibold mt-4 mb-2'>Zipcode</h2>
                    <input 
                    className='border rounded-md px-3 py-3 bg-[#f7f9fc] w-[186px]'
                    type="text" placeholder="Enter" />
                    <h2 className='font-semibold mt-4 mb-2'>Type</h2>
                    <div div className='flex items-center gap-2 justify-items-stretch'>
                        <div
                            className={`min-w-[100px] mt-1 px-4 py-3 border rounded-md cursor-pointer rounded-8 list-none ${selectedOption === 'Transplant' ? 'border-1 border-[#C8ADFF] text-[#6E2FEB] bg-[#F5F0FF]' : 'border-1 border-[#C5CEE0] text-[rgba(16,20,28,80%)] bg-white'}`}
                            onClick={() => setSelectedOption('Transplant')}
                        >Transplant
                        </div>
                        <div
                            className={`min-w-[100px] mt-1 px-4 py-3 border rounded-md cursor-pointer rounded-8 list-none ${selectedOption === 'Oncology' ? 'border-1 border-[#C8ADFF] text-[#6E2FEB] bg-[#F5F0FF]' : 'border-1 border-[#C5CEE0] text-[rgba(16,20,28,80%)] bg-white'}`}
                            onClick={() => setSelectedOption('Oncology')}
                        > Oncology
                        </div>
                    </div>
                    <div className='searchingFor'>
                        <h2 className='font-semibold mt-4 mb-1'>Searching For</h2>
                        <ul className='flex gap-2 items-center'>
                            <li 
                            className={`text-center w-[110px] mt-2 px-4 py-3 border rounded-md cursor-pointer rounded-8 list-none ${selectedMutiple === 'Doctor' ? 'border-1 border-[#C8ADFF] text-[#6E2FEB] bg-[#F5F0FF]' : 'border-1 border-[#C5CEE0] text-[rgba(16,20,28,80%)] bg-white'}`}
                            onClick={() => setselectedMutiple('Doctor')}
                            >
                                <img className='hidden block mx-auto' src='../images/search/hwDoctor.svg'/>
                                Doctor</li>
                            <li className={`text-center w-[110px] mt-2 px-4 py-3 border rounded-md cursor-pointer rounded-8 list-none ${selectedMutiple === 'Hospital' ? 'border-1 border-[#C8ADFF] text-[#6E2FEB] bg-[#F5F0FF]' : 'border-1 border-[#C5CEE0] text-[rgba(16,20,28,80%)] bg-white'}`}
                            onClick={() => setselectedMutiple('Hospital')}
                            >
                                <img 
                                className='hidden block mx-auto'
                                src='../images/search/hwHospital.svg'/>
                                Hospital</li>
                        </ul>
                    </div>
                    {selectedTab === 1 ? (
                        <div>
                            {selectedOption === 'Oncology' || selectedMutiple === 'Hospital' || (
                            <div>
                                <h2 className='font-semibold mt-4 mb-2'>Organ</h2>
                                {/* Render 4 boxes for Transplant */}
                                <FilterBox title="" />
                            </div>
                            )}
                            {selectedOption === 'Transplant' || selectedMutiple === 'Hospital' || (
                            <div className=''>
                                {/* Render 10 boxes for Cancer */}
                                <h2 className='font-semibold mt-4 mb-2'>Organ</h2>
                                <Filter title="" />
                            </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            <div>
                                <FilterBox title="" />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default HwSearchZip;
import React from 'react'
import './MedicareNote.css'

const MedicareNote = () => {
  return (
    <div className="pt-8 detailsNote">
        <p className="text-center bg-[#FFF7E6] px-3 rounded-[30px] py-2.5 block text-[14.7px]"><span className="font-bold text-[#222]">Note:</span> This data is provided by CMS. For more information about care quality, visit <a href="https://www.cms.gov" target='_blank'><span className="text-[#6E2FEB] font-bold">Medicare’s Care Compare site</span></a></p>
    </div>
  )
}

export default MedicareNote
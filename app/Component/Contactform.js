import React from 'react';
import Form from './Contact';
//import axios from 'axios';

const Contact = () => {
  const formInfo = {
      title: "We’d love to hear from you",
      decription: "If you have any questions or feedback for us, please fill out the form and we will reach out to you shortly."
  }
  
  return(
    <>
      <div className="HWfootForm max-w-[1140px] mx-auto">
        <div className="sec_head text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="sec_title center">{formInfo.title}</h2>
          <p className="sec_desc">{formInfo.decription}</p>
        </div>   
        <Form />     
         
    </div>
    </>
  )
}

export default Contact;
"use client";
import React, { useRef, useState, useEffect } from 'react';
import 'react-phone-number-input/style.css'; // Import the CSS
import PhoneInput from 'react-phone-number-input';
import emailjs from '@emailjs/browser';
import { useFormik } from 'Formik';
// import { signUpSchema } from './index'
import * as Yup from "yup";

const initialValues = {
    fullname: "",
    email: "",
    phone: "",
    postContent: ""
}
export const signUpSchema = Yup.object({
    fullname: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Only characters and spaces are allowed")
    .min(5, "Full name must be at least 5 characters")
    .max(25, "Full name must be at most 25 characters")
    .required("Please enter your full name"),
    email: Yup.string().email('please enter a valid email id').required("Please enter your email"),
    phone: Yup.string().min(6, "Number & phone symbols (#,- etc) only").required("Please enter your phone")
});


const Form = () => {

    const [phoneNumber, setPhoneNumber] = useState(); // Initialize state for the phone number
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(
                "🚀 ~ file: Form.js ~ line 13 ~ Form ~ values",
                values
            );
            action.resetForm();
            setPhoneNumber('');
            setSubmissionStatus("Thanks for contacting us! We will get in touch with you shortly.");
        }
    })
    console.log(
        "🚀 ~ file: Form.js ~ line 24 ~ Form ~ errors",
        errors
    );

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_epm1uwd', 'template_40au5z7', form.current, 'wPqu2lsDvhtb7UbT2')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    useEffect(() => {
        if (submissionStatus) {
            const timer = setTimeout(() => {
                setSubmissionStatus(null);
            }, 1000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [submissionStatus]);
    return (
        <div className='hw_container'>
            <form ref={form} onSubmit={(e) => {
                handleSubmit(e);
                sendEmail(e);
            }}>
                <div className='form_input_field flex flex-col sm:flex-row gap-4'>
                    <div className='input_name sm:basis-1/3'>
                        <input className='w-[100%] px-3 bg-[#F7F9FC] border border-[#C5CEE0] sm:p-3 rounded-md h-[42px] md:h-[45px] mb-1'
                            type="text"
                            name="fullname"
                            id="fullname"
                            placeholder="Full Name"
                            autoComplete="off"
                            value={values.fullname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.fullname && touched.fullname ?
                            <p className='form-error text-[#fc2001] m-2'>{errors.fullname}</p> : null}
                    </div>
                    <div className='input_email basis-full sm:basis-1/3'>
                        <input className='w-[100%] border border-[#C5CEE0] px-3 bg-[#F7F9FC] sm:p-3 rounded-md h-[42px] md:h-[45px] mb-1'
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                            autoComplete="off"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && touched.email ? <p className='form-error text-[#fc2001] m-2'>
                            {errors.email}</p> : null}
                    </div>

                    <div className='input_phone basis-full sm:basis-1/3'>
                        <div className="flex items-center">
                            <PhoneInput
                                className='border border-[#C5CEE0] bg-[#F7F9FC] px-3 rounded-md h-[40px] md:h-[45px] mb-1 w-full'
                                placeholder="Phone"
                                international
                                countryCallingCodeEditable={false}
                                defaultCountry="IN"
                                value={phoneNumber}
                                onChange={(value) => {
                                    setPhoneNumber(value);
                                    handleChange({
                                        target: {
                                            name: 'phone',
                                            value: value,
                                        },
                                    });
                                }}
                                name="phone"
                                id="phone"
                                autoComplete="on"
                                onBlur={handleBlur}
                            />
                        </div>
                        {errors.phone && touched.phone ?
                            <p className='form-error text-[#fc2001] m-2'>{errors.phone}</p> : null}
                    </div>

                </div>
                <div className='form_textarea_field mt-4'>
                    <textarea
                        className='rounded-md mb-2 bg-[#F7F9FC] border border-[#C5CEE0] form_textarea w-[100%] px-3 py-2 sm:p-3 rounded-md h-[70px] md:h-[120px]' name="postContent"
                        placeholder='Query' rows={4} cols={40}
                        value={values.postContent}
                        onChange={handleChange}
                        onBlur={handleBlur} required
                    />
                </div>
                <div className='type_button mt-2 flex flex-col sm:flex-row items-center gap-2'>
                    <input type="submit"
                        className='input_type_button cursor-pointer rounded-md text-[#fff] px-5 py-3 text-[18px] font-bold bg-[#6e2feb] hover:bg-[#3c1faf] ease-in duration-300 w-[100%] sm:w-[48.5%] shadow-xl' value="Submit" style={{

                        }} />
                    {submissionStatus && <p className="px-2 py-1" style={{ color: submissionStatus.includes("failed") ? 'red' : 'green' }}>{submissionStatus}</p>}
                </div>
                        
            </form>
        </div>
    );
};

export default Form;
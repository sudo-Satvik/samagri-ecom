import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
// import { response } from "express";
const Email = () => {
  // const [email, setEmail] = useState('');z
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const serviceId = 'service_e2xvkdm'
  //   const templateId = 'template_en9urze'
  //   const publicKey = 'xHCmSR-PkbrwzLaN1'

  //   const templateParams = {
  //     from_email: email
  //   }
  //   console.log(email);
  //   emailjs.sendForm(serviceId, templateId, templateParams, publicKey)
  //   .then((response)=>{
  //     console.log('Email sent successfully!', response);
  //     setEmail('');
  //   })
  //   .catch((error) =>{
  //     console.error("Error sending email", error);
  //   })
  // }
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_e2xvkdm', 'template_en9urze', form.current, {
        publicKey: 'xHCmSR-PkbrwzLaN1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <form onSubmit={handleSubmit} ref={form}>
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-[#ff9900]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-[#ff9900]"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required=""
                    name="user_email"
                    // value={email}
                    // onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 w-[8rem] px-6 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-[#DB4444] hover:bg-[rgb(215 100 100)] border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                  >
                    Signup
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Email;

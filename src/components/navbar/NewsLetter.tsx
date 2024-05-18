'use client';
import { useState } from 'react';

const NewsLetter = () => {
  const componentName = 'NEWSLETTER';
  const [formData, setFormData] = useState({
    name: '',
    phone: 0,
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div
      className={`${componentName} normal-case h-[60dvh] flex flex-col justify-center`}
    >
      <p className='text-black font-[600] px-12 text-center'>
        Sign up for our newsletter to receive exclusive offers & invitation to
        speacial events.
      </p>
      <div className={`${componentName}_FORM_CONTAINER`}>
        <form className='w-full flex flex-col'>
          <input
            type='text'
            placeholder='Name'
            className='border-b-[1px] border-[var(--secondary-color)] w-[85%] mx-auto p-4'
          />
          <input
            type='text'
            placeholder='Last Name'
            className='border-b-[1px] border-[var(--secondary-color)] w-[85%] mx-auto p-4'
          />
          <input
            type='email'
            placeholder='Email'
            className='border-b-[1px] border-[var(--secondary-color)] w-[85%] mx-auto p-4'
          />
          <input
            type='tel'
            placeholder='Phone Number'
            className='border-b-[1px] border-[var(--secondary-color)] w-[85%] mx-auto p-4'
          />
        </form>
        <div className='main_button w-[85%] mx-auto my-4 normal-case'>Sign Up</div>
      </div>
    </div>
  );
};

export default NewsLetter;

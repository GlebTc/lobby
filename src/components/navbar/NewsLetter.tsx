'use client';
import { useState } from 'react';

const NewsLetter = () => {
  const componentName = 'NEWSLETTER';
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
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

  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <div
      className={`${componentName} normal-case h-[60dvh] flex flex-col justify-center`}
    >
      <p className='text-black font-[600] text-[17px] text-center leading-[20px] max-w-[290px] mx-auto mb-4'>
        Sign up for our newsletter to receive exclusive offers & invitation to
        speacial events.
      </p>
      <div className={`${componentName}_FORM_CONTAINER`}>
        <form className='w-full flex flex-col gap-2'>
          <input
            type='text'
            name='name'
            placeholder='Name'
            className='w-[85%] mx-auto p-4 border-b-[1px] border-[var(--secondary-color)] focus:outline-[var(--secondary-color)]'
            onChange={handleChange}
          />
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            className='w-[85%] mx-auto p-4 border-b-[1px] border-[var(--secondary-color)] focus:outline-[var(--secondary-color)]'
            onChange={handleChange}
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            className='w-[85%] mx-auto p-4 border-b-[1px] border-[var(--secondary-color)] focus:outline-[var(--secondary-color)]'
            onChange={handleChange}
          />
          <input
            type='tel'
            name='phone'
            placeholder='Phone Number'
            className='w-[85%] mx-auto p-4 border-b-[1px] border-[var(--secondary-color)] focus:outline-[var(--secondary-color)]'
            onChange={handleChange}
          />
        </form>
        <div
          className='main_button w-[85%] mx-auto my-4 normal-case'
          onClick={handleSubmit}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
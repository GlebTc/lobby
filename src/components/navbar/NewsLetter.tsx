'use client';
import { useState } from 'react';
import IsLoading from '@/src/components/reusable/IsLoading';
import ThankYou from '@/src/components/reusable/ThankYou';
import { FuturaBoldCondesedBT, RobotoRegular } from '@/src/util/fonts/fonts';

const NewsLetter = () => {
  const componentName = 'NEWSLETTER';
  const [isLoading, setIsLoading] = useState(false);
  const [isThankYou, setIsThankYou] = useState(false);
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsLoading(false);
        setIsThankYou(true);
      }
    } catch {
      console.log(
        'FE - There was an error sending your message. Please try again.'
      );
    }
    setFormData({
      name: '',
      lastName: '',
      email: '',
      phone: '',
    });
  };

  return (
    <div
      className={`${componentName} normal-case h-[50dvh] flex flex-col justify-center`}
    >
      {isLoading && (
        <IsLoading loadingMessage='Adding Information to Newsletter List' />
      )}
      {isThankYou && (
        <ThankYou
          thankYouMessage='Congratulations!!'
          thankYouMessageTwo='You have been added to our newsletter list.'
          isThankYou={isThankYou}
          setIsThankYou={setIsThankYou}
        />
      )}
      <div
        className={`${FuturaBoldCondesedBT.className} text-black text-[17px] text-center leading-[20px] max-w-[260px] mx-auto mb-4`}
      >
        <p>Sign up for our newsletter</p>
        <p> to receive exclusive</p>
        <p> offers & invitation to speacial events</p>
      </div>
      <div className={`${componentName}_FORM_CONTAINER`}>
        <form className='w-full flex flex-col gap-2'>
          <input
            type='text'
            name='name'
            placeholder='Name'
            className='sign_up_input'
            onChange={handleChange}
          />
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            className='sign_up_input'
            onChange={handleChange}
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            className='sign_up_input'
            onChange={handleChange}
          />
          <input
            type='tel'
            name='phone'
            placeholder='Phone Number'
            className='sign_up_input'
            onChange={handleChange}
          />
        </form>
        <div
          className={`${RobotoRegular.className} px-4 py-2 bg-[var(--secondary-color)] text-white border-[1px] border-[var(--secondary-color)] hover:bg-[var(--main-bg-color)] duration-[var(--main-duration)] hover:text-[var(--secondary-color)] min-w-[150px] cursor-pointer text-center w-[85%] mx-auto my-4 font-[600] text-[15px]`}
          onClick={handleSubmit}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

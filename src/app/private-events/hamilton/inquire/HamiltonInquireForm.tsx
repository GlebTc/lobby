'use client';
import { useState } from 'react';
import { Roboto } from 'next/font/google';
import { FuturaBoldCondesedBT } from '@/src/util/fonts/fonts';
import IsLoading from '@/src/components/reusable/IsLoading';
import ThankYou from '@/src/components/reusable/ThankYou';

const roboto = Roboto({
  weight: ['400', '500'],
  display: 'swap',
  subsets: ['latin'],
});

const HamiltonInquireForm = () => {
  const componentName = 'HAMILTON_INQUIRE_FORM';
  const [isLoading, setIsLoading] = useState(false);
  const [isThankYou, setIsThankYou] = useState(false);
  const arrayOfStartTime = [
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm',
    '9pm',
    '10pm',
    '11pm',
  ];

  const arrayOfEndTime = [
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm',
    '9pm',
    '10pm',
    '11pm',
    '12am',
    '1am',
    '2am',
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventStyle: '',
    eventDate: '',
    startTime: '11am by default (not changed by user)',
    endTime: 'Not specified by user',
    guestCount: '',
    additionalDetails: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/private-hamilton', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsLoading(false);
        setIsThankYou(true);
      } else {
        console.log('Hamilton FE Error');
      }
    } catch (error) {
      console.log('Hamilton FE Error', error);
    }
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventStyle: '',
      eventDate: '',
      startTime: '',
      endTime: '',
      guestCount: '',
      additionalDetails: '',
    });
  };

  return (
    <div className={`${componentName}_MAIN_CONTAINER max-w-5xl mx-auto`}>
      {isLoading && (
        <IsLoading loadingMessage='Submitting Hamilton Private Event Inquiry' />
      )}
      {isThankYou && (
        <ThankYou
          thankYouMessage='Thank You for Your Inquiry!'
          thankYouMessageTwo='We Will Contact You Shortly With Details'
          isThankYou={isThankYou}
          setIsThankYou={setIsThankYou}
        />
      )}
      <form
        onSubmit={handleSubmit}
        className={`${componentName}_FORM_CONTAINER p-4 flex flex-col items-start gap-2`}
      >
        <h2
          className={`${FuturaBoldCondesedBT.className} uppercase text-[22px] font-[400]`}
        >
          Contact Information
        </h2>
        <div className='grid w-full'>
          <label
            htmlFor='name'
            className='form_label text-[14px]'
          >
            Name
          </label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='First and Last Name'
            className='form_input '
            required
          />
        </div>
        <div className='grid w-full'>
          <label
            htmlFor='email'
            className='form_label text-[14px]'
          >
            Email
          </label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
            className='form_input'
            required
          />
        </div>
        <div className='grid w-full'>
          <label
            htmlFor='phone'
            className='form_label text-[14px]'
          >
            Phone
          </label>
          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='(905) 123-4567'
            className='form_input'
            required
          />
        </div>
        <h2
          className={`${FuturaBoldCondesedBT.className} uppercase text-[22px] font-[400] my-4`}
        >
          Event Details
        </h2>
        <div className='grid w-full'>
          <label
            htmlFor='eventStyle'
            className='form_label text-[14px]'
          >
            Event Style
          </label>
          <input
            type='text'
            name='eventStyle'
            value={formData.eventStyle}
            onChange={handleChange}
            placeholder='Birthday, Business Event, Wedding, etc.'
            className='form_input'
          />
        </div>
        <div className='grid w-full'>
          <label
            htmlFor='eventDate'
            className='form_label text-[14px]'
          >
            Event Date
          </label>
          <input
            type='date'
            name='eventDate'
            value={formData.eventDate}
            onChange={handleChange}
            className='form_input'
          />
        </div>

        <div className='grid w-full'>
          <label
            htmlFor='startTime'
            className='form_label text-[14px]'
          >
            Start Time
          </label>
          <select
            name='startTime'
            value={formData.startTime}
            onChange={handleChange}
            className='form_input bg-white'
          >
            {arrayOfStartTime.map((time, index) => {
              return <option key={index}>{time}</option>;
            })}
          </select>
        </div>
        <div className='grid w-full'>
          <label
            htmlFor='endTime'
            className='form_label text-[14px]'
          >
            End Time
          </label>
          <select
            name='endTime'
            value={formData.endTime}
            onChange={handleChange}
            className='form_input bg-white'
          >
            {arrayOfEndTime.map((time, index) => {
              return <option key={index}>{time}</option>;
            })}
          </select>
        </div>
        <div className='grid w-full'>
          <label
            htmlFor='guestCount'
            className='form_label text-[14px]'
          >
            Number of Guests (Minimum of 10)
          </label>
          <input
            type='number'
            name='guestCount'
            value={formData.guestCount}
            onChange={handleChange}
            className='form_input'
          />
        </div>
        <div className='grid w-full'>
          <label
            htmlFor='additionalDetails'
            className='form_label text-[14px]'
          >
            ADDITIONAL DETAILS YOU WOULD LIKE TO SHARE:
          </label>
          <textarea
            name='additionalDetails'
            value={formData.additionalDetails}
            onChange={handleChange}
            placeholder='Any information to help us better serve you'
            className='form_input'
          />
        </div>
        <button
          type='submit'
          className={`${roboto.className} ${componentName}_SUBMIT_BUTTON uppercase text-[16px] font-[500] p-3 bg-[var(--secondary-color)] text-white border-[1px] border-[var(--secondary-color)] hover:bg-[var(--main-bg-color)] duration-[var(--main-duration)] hover:text-[var(--secondary-color)] min-w-[150px] cursor-pointer text-center w-full rounded-md`}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default HamiltonInquireForm;

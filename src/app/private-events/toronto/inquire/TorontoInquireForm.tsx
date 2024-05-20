'use client';
import { useState } from 'react';

const HamiltonInquireForm = () => {
  const componentName = 'TORONTO_INQUIRE_FORM';
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
    startTime: '',
    endTime: '',
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data to Submit:', formData);
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
    <div className={`${componentName}_MAIN_CONTAINER`}>
      <form
        onSubmit={handleSubmit}
        className={`${componentName}_FORM_CONTAINER p-8 flex flex-col items-start gap-2`}
      >
        <h2 className='uppercase'>Contact Information</h2>
        <div className='grid w-full'>
          <label
            htmlFor='name'
            className='uppercase'
          >
            Name
          </label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='First and Last Name'
            className='form_input'
            required
          />
        </div>
        <div className='grid w-full'>
          <label
            htmlFor='email'
            className='uppercase'
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
            className='uppercase'
          >
            Phone
          </label>
          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='Phone'
            className='form_input'
            required
          />
        </div>
        <h2 className='uppercase my-4'>Event Details</h2>
        <div className='grid w-full'>
          <label
            htmlFor='eventStyle'
            className='uppercase'
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
            className='uppercase'
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
            className='uppercase'
          >
            Start Time
          </label>
          <select
            name='startTime'
            value={formData.startTime}
            onChange={handleChange}
            className='form_input bg-white'
          >
            {arrayOfStartTime.map((time) => {
              return <option>{time}</option>;
            })}
          </select>
        </div>
        <div className='grid w-full'>
          <label
            htmlFor='endTime'
            className='uppercase'
          >
            End Time
          </label>
          <select
            name='endTime'
            value={formData.endTime}
            onChange={handleChange}
            className='form_input bg-white'
          >
            {arrayOfEndTime.map((time) => {
              return <option>{time}</option>;
            })}
          </select>
        </div>
        <div className='grid w-full'>
          <label
            htmlFor='guestCount'
            className='uppercase'
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
            className='uppercase'
          >
            Additional Details
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
          className='uppercase text-base font-[500] p-4 bg-[var(--secondary-color)] text-white border-[1px] border-[var(--secondary-color)] hover:bg-[var(--main-bg-color)] duration-[var(--main-duration)] hover:text-[var(--secondary-color)] min-w-[150px] cursor-pointer text-center w-full rounded-md'
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default HamiltonInquireForm;
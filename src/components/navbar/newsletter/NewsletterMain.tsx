'use client';
import { useState } from 'react';
import MessageToUser from '@/src/components/reusable/MessageToUser';
import IsLoading from '@/src/components/reusable/IsLoading';
import { FuturaBoldCondesedBT, RobotoRegular } from '@/src/util/fonts/fonts';

const NewsletterMain = () => {
  const componentName = 'NEWSLETTER_MAIN';

  // ===============================================================
  // ====                    State Variables                    ====
  // ===============================================================
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [messageOne, setMessageOne] = useState('');
  const [messageTwo, setMessageTwo] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
  });

  // =========================================
  // ====         Event Handlers          ====
  // =========================================

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok && data.message === 'Subscription successful') {
        if (data.message === 'Subscription successful') {
          setMessageOne(
            `Thank you, ${data.profile.data.attributes.first_name}!`
          );
          setMessageTwo('You have successfully subscribed to our newsletter.');
          setIsMessageOpen(true);
          setFormData({
            name: '',
            lastName: '',
            email: '',
            phone: '',
          });
        }
      } else {
        setMessageOne(data.data.errors[0].detail);
        setIsMessageOpen(true);
      }
    } catch (error) {
      setMessageOne('We are sorry!');
      setMessageTwo(
        'There was an error sending your message. Please try again.'
      );
      setIsMessageOpen(true);
    }

    setIsLoading(false);
  };

  return (
    <div
      className={`${componentName}_MAIN_CONTAINER normal-case h-[50dvh] flex flex-col justify-center`}
    >
      {isLoading && (
        <IsLoading loadingMessage='Adding Information to Newsletter List' />
      )}
      {isMessageOpen && (
        <MessageToUser
          messageOne={messageOne}
          messageTwo={messageTwo}
          isMessageOpen={isMessageOpen}
          setIsMessageOpen={setIsMessageOpen}
        />
      )}
      <div
        className={`${FuturaBoldCondesedBT.className} text-black text-[17px] text-center leading-[20px] max-w-[260px] mx-auto mb-4`}
      >
        <p>
          Sign up for our newsletter to receive exclusive offers & invitation to
          special events
        </p>
      </div>
      <div className={`${componentName}_FORM_CONTAINER`}>
        <form
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-2'
        >
          <input
            type='text'
            name='name'
            placeholder='Name'
            className='sign_up_input'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            className='sign_up_input'
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            className='sign_up_input'
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type='tel'
            name='phone'
            placeholder='Phone Number'
            className='sign_up_input'
            value={formData.phone}
            onChange={handleChange}
          />
          <button
            type='submit'
            className={`${RobotoRegular.className} px-4 py-2 bg-[var(--secondary-color)] text-white border-[1px] border-[var(--secondary-color)] hover:bg-[var(--main-bg-color)] duration-[var(--main-duration)] hover:text-[var(--secondary_color)] min-w-[150px] text-center w-[85%] mx-auto my-4 font-[600] text-[15px]`}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterMain;

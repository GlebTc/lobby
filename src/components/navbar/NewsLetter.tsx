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
  const [responseDetails, setResponseDetails] = useState('');
  const [firstName, setFirstName] = useState('');  // New state variable for storing the first name

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e:any) => {
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
      if (response.ok && data.message === "Subscription successful") {
        setFirstName(data.profile.data.attributes.first_name);  // Set the first name from response
        setIsThankYou(true);
        setFormData({
          name: '',
          lastName: '',
          email: '',
          phone: '',
        });
      } else {
        setIsThankYou(false);
        setResponseDetails(data.error || 'An error occurred.');
      }
    } catch (error) {
      setIsThankYou(false);
      setResponseDetails('There was an error sending your message. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div className={`${componentName} normal-case h-[50dvh] flex flex-col justify-center`}>
      {isLoading && <IsLoading loadingMessage='Adding Information to Newsletter List' />}
      {isThankYou && <ThankYou thankYouMessage={`Congratulations ${firstName}!`} thankYouMessageTwo='You have been added to our newsletter list.' isThankYou={isThankYou} setIsThankYou={setIsThankYou}/>}
      <div className={`${FuturaBoldCondesedBT.className} text-black text-[17px] text-center leading-[20px] max-w-[260px] mx-auto mb-4`}>
        <p>Sign up for our newsletter to receive exclusive offers & invitation to special events</p>
      </div>
      <div className={`${componentName}_FORM_CONTAINER`}>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-2'>
          <input type='text' name='name' placeholder='Name' className='sign_up_input' onChange={handleChange} />
          <input type='text' name='lastName' placeholder='Last Name' className='sign_up_input' onChange={handleChange} />
          <input type='email' name='email' placeholder='Email' className='sign_up_input' onChange={handleChange} />
          <input type='tel' name='phone' placeholder='Phone Number' className='sign_up_input' onChange={handleChange} />
          <button type="submit" className={`${RobotoRegular.className} px-4 py-2 bg-[var(--secondary-color)] text-white border-[1px] border-[var(--secondary-color)] hover:bg-[var(--main-bg-color)] duration-[var(--main-duration)] hover:text-[var(--secondary_color)] min-w-[150px] text-center w-[85%] mx-auto my-4 font-[600] text-[15px]`}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;

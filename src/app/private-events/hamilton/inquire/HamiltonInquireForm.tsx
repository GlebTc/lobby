'use client';
import { useState } from 'react';

const HamiltonInquireForm = () => {
  const componentName = 'HAMILTON_INQUIRE_FORM';
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return <div className={`${componentName}_MAIN_CONTAINER`}></div>;
};

export default HamiltonInquireForm;

import React from 'react';

const PrivateEventSuccessModal = () => {
  return (
    <>
      <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div className='bg-white rounded-lg shadow-lg p-6'>
          <h2 className='text-xl font-semibold mb-4'>Success!</h2>
          <p className='text-gray-700 mb-4'>
            Your private event inquiry has been submitted successfully.
          </p>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default PrivateEventSuccessModal;

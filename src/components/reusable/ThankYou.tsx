import { IoMdClose } from 'react-icons/io';

const ThankYou = ({
  thankYouMessage,
  thankYouMessageTwo,
  isThankYou,
  setIsThankYou,
}: {
  thankYouMessage: string;
  thankYouMessageTwo: string;
  isThankYou: boolean;
  setIsThankYou: any;
}) => {
  const componentName = 'IS_LOADING';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER z-[100] fixed top-0 left-0 h-full w-full bg-gray-950/80 flex items-center justify-center`}
    >
      <div className='bg-[var(--main-bg-color)] p-12 md:p-20 flex flex-col gap-4 items-center justify-center relative text-center mx-2 md:mx-8'>
        {' '}
        <div
          className={`${componentName}_CLOSE_BUTTON absolute top-2 right-2`}
          onClick={() => {
            setIsThankYou(!isThankYou);
          }}
        >
          <IoMdClose className='text-4xl cursor-pointer' />
        </div>
        <p className='text-lg md:text-3xl'>{thankYouMessage}</p>
        <p className='text-lg md:text-3xl'>{thankYouMessageTwo}</p>
      </div>
    </div>
  );
};

export default ThankYou;

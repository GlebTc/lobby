import { IoMdClose } from 'react-icons/io';

const MessageToUser = ({
  messageOne,
  messageTwo,
  isMessageOpen,
  setIsMessageOpen,
}: {
  messageOne: string;
  messageTwo: string;
  isMessageOpen: boolean;
  setIsMessageOpen: any;
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
            setIsMessageOpen(!isMessageOpen);
          }}
        >
          <IoMdClose className='text-4xl cursor-pointer' />
        </div>
        <p className='text-lg md:text-3xl'>{messageOne}</p>
        <p className='text-lg md:text-3xl'>{messageTwo}</p>
      </div>
    </div>
  );
};

export default MessageToUser;

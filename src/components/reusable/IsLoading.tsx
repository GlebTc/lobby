const IsLoading = ({loadingMessage} : {loadingMessage: string}) => {
    const componentName = 'IS_LOADING';
    return (
      <div className={`${componentName}_MAIN_CONTAINER z-[100] fixed top-0 left-0 h-full w-full bg-gray-950/80 flex items-center justify-center`}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-300"></div>
        <p className="ml-2 text-white">{loadingMessage}</p>
      </div>
    );
  };
  
  export default IsLoading;
  
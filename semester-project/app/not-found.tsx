import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative">
        <img
          className='brightness-50'
          src="https://wallpapercave.com/wp/wp9435288.jpg"
          alt="404 Image"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="lg:text-[80px] font-bold">OOOPS!</h1>
          <p className="text-xl mt-4">we will be back soon</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

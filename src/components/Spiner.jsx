import React from 'react';

function Spiner () {
  return (
    <div className='relative grid place-items-center h-screen'>
      <div className='flex items-center justify-center space-x-2 animate-bounce '>
        <div className='w-8 h-8 bg-redOng rounded-full'></div>
        <div className='w-8 h-8 bg-yellowOng rounded-full'></div>
        <div className='w-8 h-8 bg-blueOng rounded-full'></div>
      </div>
    </div>
  );
}

export default Spiner;

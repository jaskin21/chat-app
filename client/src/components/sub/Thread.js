import React from 'react';

const Thread = ({ textMessage, formattedTime }) => {
  return (
    <div className='message'>
      <p className='meta'>
        Mary <span>{formattedTime}</span>
      </p>
      <p className='text'>{textMessage}</p>
    </div>
  );
};

export default Thread;

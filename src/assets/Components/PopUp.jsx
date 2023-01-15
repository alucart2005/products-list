import React from 'react';

const PopUp = ({text,imagen}) => {
  return (
    <div className='div--popUp' >
      <div className='div__div--popUp'>
        <h2 className='div__h2--popUp'>{text}</h2>
      </div>

    </div>
  );
}

export default PopUp;
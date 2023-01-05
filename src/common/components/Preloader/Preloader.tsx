import React from 'react';
import preloader from '../../../assets/image/preloader.gif';

export const Preloader = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <img src={preloader} alt='Preloader'/>
    </div>
  );
};

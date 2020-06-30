 import React from 'react';

//# css
import '../css/style.css';

//# icon
import  { X } from 'react-feather';



function CloseButton() {
   
  return (
    <button className= 'close-btn' ><X size="32"/></button>
  );
}

export default CloseButton;

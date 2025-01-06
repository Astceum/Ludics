import React, { useRef, useEffect } from 'react';

import iconPhone from '../assets/svg/phone.svg';
import mailContact from '../assets/svg/mail-contact.svg';

import "../css/dropDown.css"

function DropDown() {
  
  return (
    <>
    <div className='contact-container' >
    <div id="contact-ludics">
        <ul>
            <li>
                <img loading="lazy" src={mailContact} alt="" height="92px" />
                <h2>INFO@LUDICS.CL</h2>
            </li>
            <li>
              <a href="https://wa.me/56988043665" target="_blank">
                <img loading="lazy" src={iconPhone} alt="" height="92px" />
                <h2>+56 9 8804 3665</h2>
              </a>
            </li>
        </ul>                        
    </div>
    </div>
    </>
  )
}

export default DropDown
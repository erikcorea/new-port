import React from 'react';
import '../styling/contact.css';

const Contact = () => {
  return (
        <>
            <h1 className='contact-title'><a href="#" id="contact">CONTACT</a></h1>
            <div className='button-container'>
              <button className='email-button'><a className="email" href = "mailto: erikcorrea444@gmail.com">email me</a></button>
            </div>
        </>
  )
}

export default Contact;

import React, { useState } from 'react';

import { images } from '../../constants';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const { username, email, message } = formData;

  // const handleChangeInput = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = () => {
  //   setLoading(true);

  // }

  return (
    <>
      <h2 id='Contact' className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:Michaeljinoa@gmail.com" className="p-text">Michaeljinoa@gmail.com</a>
        </div>
      </div>
    </>
  );
};

export default Footer
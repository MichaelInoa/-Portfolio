import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants'
import './About.scss'

const About = () => {
  const abouts = [
  {
    title: 'WordPress Development',
    description: 'I build dynamic, responsive websites using WordPress, tailored to meet business and client needs.',
    imgUrl: images.about02, // keeping the same image
  },
  {
    title: 'UI/UX Design',
    description: 'I craft user-friendly interfaces and intuitive experiences that align with user behavior and product goals.',
    imgUrl: images.about03, // keeping the same image
  },
  {
    title: 'Search Engine Optimization (SEO)',
    description: 'I improve website visibility on search engines through on-page SEO, keyword strategy, and content optimization.',
    imgUrl: images.about01, // keeping the same image
  },
];


  return (
    <div id='About' className='pT'>
    <h2 className="head-text">I know that <span>Good Development</span> <br /> means <span>Good Business</span> </h2>
    <p className='p-text app__flex' style={{maxWidth: '800px', textAlign: 'center', margin: '40px auto 0', fontSize: '17px', backgroundColor: '#ffff', padding:'10px', borderRadius: '10px' }}>
      I'm a creative web designer with an eye for modern, user-centered design, currently looking for an internship in Germany to grow my skills in an innovative environment."
    </p>

    <div className="app__profiles">
    {abouts.map((about, index) => (
      <motion.div
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition= {{ duration: 0.5, type: 'tween' }}
      className="app__profile-item"
      key={abouts.title + index}
      >
        <img src={about.imgUrl} alt={about.title} />
        <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
        <p className="p-text" style={{marginTop: 10}}>{about.description}</p>
      </motion.div>
    ))}
    </div>
    </div>
  )
}

export default About
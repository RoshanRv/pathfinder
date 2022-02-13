import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return(
     <footer className='bg-black/90 text-white txt-sha text-md p-2 md:flex items-center justify-around text-center'>
       
         <h1 className='text-'>Made With&nbsp; <FontAwesomeIcon icon={faHeart} className='text-red-500 text-md beat -z-10'/> &#38; &#129504; &nbsp; By Roshan Kumar  </h1>
         <h1>Reach Me On <a href='https://twitter.com/RoshanK18328680' target='_blank'>< FontAwesomeIcon icon={faTwitter} className='text-blue-500  text-xl'/></a> <a href='https://github.com/RoshanRv' target='_blank'>< FontAwesomeIcon icon={faGithub} className='text-xl bg-white text-black rounded-full '/></a> <a href='https://www.linkedin.com/in/roshan-kumar-5a5020220/' target='_blank'> < FontAwesomeIcon icon={faLinkedin} className='text-xl text-blue-700 bg-white '/></a></h1>

     </footer>);
};

export default Footer;

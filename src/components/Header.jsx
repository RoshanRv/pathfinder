import React  from 'react';
import Logo from '../img/logo.png'

const Header = () => {
    
    //#00A1FF
  return (
  <header className='bg-black'>
      <nav className='p-2 border-b-2 '>
          <img src={Logo} alt="" className='mx-auto py-4 w-44 md:w-1/4'/>
          
          <div className="flex items-center justify-around py-3">
            <button id='start' className='px-3 py-0 shadow-lg sha text-white border-2 rounded-md'>Start</button>
            <button id='quick' className='px-3 py-0 shadow-lg sha text-white border-2 rounded-md'>Quick</button>
            <button id='restart' className='px-3 py-0 shadow-lg sha text-white border-2 rounded-md'>Restart</button>
          </div>

          

      </nav>
  </header>);
};

export default Header;

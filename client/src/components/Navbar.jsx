import React from 'react'
import Wrapper from '../wrapper/Navbar'
import { FaHome, FaAlignCenter, FaUserCircle, FaCaretDown, FaAlignLeft} from 'react-icons/fa'
import { useState } from 'react';
import { useAppContext } from '../context/appContext';
import Logo from './logo';
const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const {toggleSidebar, logoutUser, user} = useAppContext();
  return (
    <Wrapper>
        <div className="nav-center">
          <button 
          type='button'
          className='toggle-btn' onClick={ 
            toggleSidebar}>
            <FaAlignLeft />
          </button>
          <div>
            <Logo />
            <h3 className='logo-text'>Dashboard</h3>

          </div>
          <div className='btn-container'>
            <button type='button' className='btn'
            onClick={ ()=> setShowLogout(!showLogout)}>
             
             <FaUserCircle/>
             {user?.name}
             <FaCaretDown />
            </button>
            <div className={showLogout ?'dropdown show-dropdown' : 'dropdown'}>
              <button type="button" className='dropdown-btn'
              onClick={logoutUser}>
                logout
              </button>
            </div>

          </div>

        </div>
    </Wrapper>
  )
}

export default Navbar
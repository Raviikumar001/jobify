import React from 'react'
import Wrapper from '../wrapper/Navbar'
import { FaHome, FaAlignCenter, FaUserCircle, FaCaretDown, FaAlignLeft} from 'react-icons/fa'

import { useAppContext } from '../context/appContext';
import Logo from './logo';
const Navbar = () => {
  return (
    <Wrapper>
        <div className="nav-center">
          <button 
          type='button'
          className='toggle-btn' onClick={ ()=> console.log(
            'togglebutton'
          )}>
            <FaAlignLeft />
          </button>
          <div>
            <Logo />
            <h3 className='logo-text'>Dashboard</h3>

          </div>
          <div className='btn-container'>
            <button type='button' className='btn'
            onClick={ ()=> console.log('show/hide dropdown')}>
             
             <FaUserCircle/>
             John 
             <FaCaretDown />
            </button>
            <div className='dropdown show-dropdown'>
              <button type="button" className='dropdown-btn'
              onClick={ ()=> console.log('logout user')}>
                logout
              </button>
            </div>

          </div>

        </div>
    </Wrapper>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../wrapper/ErrorPage';


const Error = () => {

  return (
    <Wrapper className='full-page'>
      <div>
      <img src={img} alt="not Found" />
      <h3>Ohh! Page Not Found</h3>
      <p>We can't seem to find the page your are looking for.</p>
      <Link to='/'>Back home</Link>
      </div>

    </Wrapper>
  )
}

export default Error
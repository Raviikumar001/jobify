import React from 'react'
import { Link } from 'react-router-dom'
import main from '../assets/images/main.svg'
import Wrapper from '../wrapper/Testing'
import {Logo} from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container page">
        {/* INFO DIV*/}

        <div className='info'>
          <h1>
            Job <span>tracking</span>app
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis blanditiis soluta omnis voluptatem hic rerum. Sed!</p>
          <button className='btn btn-hero'>
          <Link to="/"> Login/Register</Link>

          </button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}




export default Landing;
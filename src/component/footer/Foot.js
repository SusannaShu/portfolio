import React from 'react'
import { Link } from 'react-router-dom'
import './Foot.css' // Assuming you have a CSS file for custom styles
import { Icon } from 'semantic-ui-react'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        <div className='footer-section'>
          <p>Contact</p>
          <p>
            {/* US mobile: 360-202-2983
            <br /> */}
            E-mail: susanna.xinshu@gmail.com
          </p>
          <p>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.instagram.com/susanna.xin.shu/'
            >
              <Icon name='instagram' size='large' />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/susanna-xin-shu/'
            >
              <Icon name='linkedin' size='large' />
            </a>
          </p>
        </div>

        <div
          className='footer-section'
          style={{ borderLeft: '1px solid white', paddingLeft: '100px' }}
        >
          <div className='footer-links'>
            <Link to='/Works'>Works</Link>
            <Link to='/Drawings'>Sketches</Link>
            <Link to='/About'>About Me</Link>
            {/* <a
              href='https://sheyoufashion.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              SHEYOU
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

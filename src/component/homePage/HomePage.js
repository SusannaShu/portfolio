import React from 'react'
import './style.css'
import gsap from 'gsap'
import axios from 'axios'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pictures: []
    }
    this.renderGridBlocks = this.renderGridBlocks.bind(this)
    this.applyImageAnimations = this.applyImageAnimations.bind(this)
  }

  componentDidMount () {
    window.scrollTo(0, 0)
    const self = this
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('#pic1, #pic4', {
      scrollTrigger: {
        trigger: '.intro-background',
        scrub: true // Makes the animation smooth and linked to scroll speed
      },
      y: 200,
      ease: 'none'
    })

    gsap.to('#pic2', {
      scrollTrigger: {
        trigger: '.intro-background',
        scrub: true
      },
      x: -200, // Faster horizontal movement, adjust as needed
      ease: 'none'
    })
    gsap.to('#pic3, #pic5', {
      scrollTrigger: {
        trigger: '.intro-background',
        scrub: true
      },
      x: 200, // Faster horizontal movement, adjust as needed
      ease: 'none'
    })
    gsap.to('.dot', {
      scrollTrigger: {
        trigger: '.intro-background',
        scrub: true
      },
      y: -200,
      scale: 2,
      ease: 'none'
    })

    //get images from backend portfolio

    axios('https://sheyou-backend.herokuapp.com/portfolios', {
      method: 'get'
    }).then(function (res) {
      if (res.status === 200) {
        console.log(res.data[0].picture)
        self.setState({ pictures: res.data[0].picture })
        self.applyImageAnimations(res.data[0].picture)
      } else {
        alert('something went wrong :(')
      }
    })
  }

  applyImageAnimations (pictures) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.grid-container',
          start: 'top top',
          end: () => window.innerHeight * 4,
          scrub: true,
          pin: '.grid',
          anticipatePin: 1
        }
      })
      .set('.gridBlock:not(.centerBlock)', { autoAlpha: 0 })
      .to(
        '.gridBlock:not(.centerBlock)',
        { duration: 0.1, autoAlpha: 1 },
        0.001
      )
      .from('.gridLayer', {
        scale: 3.3333,
        ease: 'none'
      })

    gsap.set('.gridBlock', {
      backgroundImage: i => pictures[i].url
    })

    const bigImg = new Image()
    bigImg.src =
      'https://res.cloudinary.com/sheyou/image/upload/v1711400575/Untitled_Artwork_6_9a834c33bf.png'

    bigImg.addEventListener('load', function () {
      gsap.to('.centerPiece .gridBlock', { autoAlpha: 1, duration: 0.5 })
    })
  }

  renderGridBlocks () {
    return this.state.pictures.map((picture, index) => (
      <div key={index} className='gridLayer'>
        <div
          className='gridBlock'
          style={{ backgroundImage: `url(${picture.url})` }}
        />
      </div>
    ))
  }

  render () {
    return (
      <div className='loli-bg'>
        <body>
          <div class='container'>
            <div class='intro-background'></div>

            <div class='image-placement'>
              <img
                id='pic1'
                src='https://res.cloudinary.com/sheyou/image/upload/v1711315257/Subject_1e11a8f9c7.png'
              />

              <img
                id='pic2'
                src='https://res.cloudinary.com/sheyou/image/upload/v1711315257/Subject_6_9e79b314de.png'
              />
              <img
                id='pic3'
                src='https://res.cloudinary.com/sheyou/image/upload/v1711315255/Subject_2_180e15c2ac.png'
              />
              <img
                id='pic4'
                src='https://res.cloudinary.com/sheyou/image/upload/v1711315255/Subject_7_316daf0518.png'
              />
              <img
                id='pic5'
                src='https://res.cloudinary.com/sheyou/image/upload/v1711385747/Subject_9_8990677bea.png'
              />
            </div>

            <div class='dot' id='dot1'></div>
            <div class='dot' id='dot2'></div>
            <div class='dot' id='dot3'></div>
            <div class='dot' id='dot4'></div>
            <div class='dot' id='dot5'></div>
            <div class='dot' id='dot6'></div>
          </div>

          {/* <div
            style={{height:'20vh', background: 'linear-gradient(to bottom, pink, white)' }}
          ></div> */}

          <p class='header-section'>Welcome to my world</p>

          <div className='grid-container'>
            <p class='content-section'>
              I like combining Art, Fashion, and Technology
            </p>
            <div className='grid'>{this.renderGridBlocks()}</div>
          </div>
        </body>
      </div>
    )
  }
}

export default HomePage

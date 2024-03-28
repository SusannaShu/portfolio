import React from 'react'
import './style.css'
import Nav from '../nav/nav.js'
import gsap from 'gsap'
import axios from 'axios'
import Foot from '../footer/Foot.js'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom/cjs/react-router-dom.min.js'
// import { Button } from 'semantic-ui-react'
import Loader from '../loader/Loading.js'

class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pictures: [],
      loading:true
    }
    this.renderGridBlocks = this.renderGridBlocks.bind(this)
    this.applyImageAnimations = this.applyImageAnimations.bind(this)
  }

  componentDidMount () {
    window.scrollTo(0, 0)
    const self = this
   

    //get images from backend portfolio

    axios('https://sheyou-backend.herokuapp.com/portfolios?id=1', {
      method: 'get'
    }).then(function (res) {
      if (res.status === 200) {
        // console.log(res.data[0].picture)
        self.setState({ pictures: res.data[0].picture, loading:false })
        // self.applyImageAnimations(res.data[0].picture)
      } else {
        alert('something went wrong :(')
      }
    })
  }

  componentDidUpdate (prevProps, prevState) {
    // Checking for changes in the pictures array in state
    if (prevState.pictures.length !== this.state.pictures.length) {
      this.applyImageAnimations(this.state.pictures)
    }
  }

  applyImageAnimations (pictures) {
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
    const self = this
    return self.state.pictures.map((picture, index) => (
      <div key={index} className='gridLayer'>
        <div
          className='gridBlock'
          style={{ backgroundImage: `url(${picture.url})` }}
        />
      </div>
    ))
  }


  render () {
    const { loading } = this.state;

    if (loading) {
      return <Loader/>
    }

    return (
      <div>
        <Nav />
        <div>
          <div className='container'>
            <div className='intro-background'></div>

            <div className='image-placement'>
              <img
              alt='pic'
                id='pic1'
                src='https://res.cloudinary.com/sheyou/image/upload/v1711315257/Subject_1e11a8f9c7.png'
              />

              <img
              alt='pic'
                id='pic2'
                src='https://res.cloudinary.com/sheyou/image/upload/v1711315257/Subject_6_9e79b314de.png'
              />
              <img
              alt='pic'
                id='pic3'
                src='https://res.cloudinary.com/sheyou/image/upload/v1711315255/Subject_2_180e15c2ac.png'
              />
              <img
              alt='pic'
                id='pic4'
                src='https://res.cloudinary.com/sheyou/image/upload/v1711315255/Subject_7_316daf0518.png'
              />
              <img
              alt='pic'
                id='pic5'
                src='https://res.cloudinary.com/sheyou/image/upload/v1711385747/Subject_9_8990677bea.png'
              />
            </div>

            <div className='dot' id='dot1'></div>
            <div className='dot' id='dot2'></div>
            <div className='dot' id='dot3'></div>
            <div className='dot' id='dot4'></div>
            <div className='dot' id='dot5'></div>
            <div className='dot' id='dot6'></div>
          </div>

          <div className='grid-container'>
            <p className='content-section'>Welcome to my world!</p>
            <div className='grid'>{this.renderGridBlocks()}</div>
          </div>

          <div className='page-center'>
            <Link to='/Works'>
              {/* <Button className='centered-text' inverted size='large'>
                Explore My Work!
              </Button> */}
              <p className='centered-text'>Click to Explore My Work!</p>
            </Link>
          </div>
        </div>

        <Foot />
        <div></div>
      </div>
    )
  }
}

export default HomePage

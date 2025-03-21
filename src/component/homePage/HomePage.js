import React from 'react'
import './style.css'
import Nav from '../nav/nav.js'
import gsap from 'gsap'
import axios from 'axios'
import Foot from '../footer/Foot.js'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom/cjs/react-router-dom.min.js'
import { Label } from 'semantic-ui-react'
// import { Button } from 'semantic-ui-react'
import Loader from '../loader/Loading.js'

class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pictures: [],
      workTags: [],
      loading: true
    }
    this.renderGridBlocks = this.renderGridBlocks.bind(this)
    this.applyImageAnimations = this.applyImageAnimations.bind(this)
  }

  componentDidMount () {
    window.scrollTo(0, 0)
    const self = this
   
    // Fetch both pictures and tags
    Promise.all([
      axios.get('https://sheyou-backend.herokuapp.com/portfolios?id=1'),
      axios.get('https://sheyou-backend.herokuapp.com/work-tags')
    ]).then(([picturesRes, tagsRes]) => {
      if (picturesRes.status === 200 && tagsRes.status === 200) {
        self.setState({ 
          pictures: picturesRes.data[0].picture, 
          workTags: tagsRes.data,
          loading: false 
        })
      } else {
        alert('something went wrong :(')
      }
    }).catch(error => {
      console.error('Error fetching data:', error)
      alert('Something went wrong while fetching data')
      self.setState({ loading: false })
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
        trigger: '.intro-text',
        scrub: true // Makes the animation smooth and linked to scroll speed
      },
      y: 200,
      ease: 'none'
    })

    gsap.to('#pic2', {
      scrollTrigger: {
        trigger: '.intro-text',
        scrub: true
      },
      x: -200, // Faster horizontal movement, adjust as needed
      ease: 'none'
    })
    gsap.to('#pic3, #pic5', {
      scrollTrigger: {
        trigger: '.intro-text',
        scrub: true
      },
      x: 200, // Faster horizontal movement, adjust as needed
      ease: 'none'
    })
    gsap.to('.dot', {
      scrollTrigger: {
        trigger: '.intro-text',
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

    // Create repeated tags to fill the background
    const repeatedTags = [];
    const repetitions = 3; // Repeat each tag multiple times for better coverage
    
    for (let i = 0; i < repetitions; i++) {
      this.state.workTags.forEach((tag, index) => {
        // Calculate random position and size
        const x = Math.random() * 100; // Random x position (0-100%)
        const y = Math.random() * 100; // Random y position (0-100%)
        const isLongTag = tag.tagName.length > 15;
        const isMediumTag = tag.tagName.length > 10;
        const baseFontSize = isLongTag ? 1.2 : (isMediumTag ? 1.5 : 1.8);
        const rotation = Math.random() * 60 - 30; // Random rotation between -30 and 30 degrees
        const opacity = Math.random() * 0.3 + 0.1; // Random opacity between 0.1 and 0.4

        repeatedTags.push({
          ...tag,
          x,
          y,
          fontSize: baseFontSize,
          rotation,
          opacity,
          key: `${tag.id}-${i}`
        });
      });
    }

    return (
      <div>
        <Nav />
        <div className='container'>
          <div className='tag-cloud-container'>
            <div className='tag-cloud'>
              {repeatedTags.map((tag) => (
                <Link 
                  key={tag.key}
                  to={`/Works?tag=${tag.tagName}`}
                  style={{
                    position: 'absolute',
                    left: `${tag.x}%`,
                    top: `${tag.y}%`,
                    fontSize: `${tag.fontSize}vw`,
                    opacity: tag.opacity,
                    transform: `rotate(${tag.rotation}deg)`,
                    color: 'rgb(255, 23, 136)',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    pointerEvents: 'auto',
                    userSelect: 'none',
                    zIndex: 1
                  }}
                >
                  {tag.tagName}
                </Link>
              ))}
            </div>
          </div>

          <img
            alt='profile'
            id='pic4'
            src='https://res.cloudinary.com/sheyou/image/upload/v1711315255/Subject_7_316daf0518.png'
          />
          <div className='intro-text'></div>
        </div>

        <div className='grid-container'>
          <p className='content-section'>Welcome to my world!</p>
          <div className='grid'>{this.renderGridBlocks()}</div>
        </div>

        <div className='page-center'>
          <Link to='/Works'>
            <p className='centered-text'>Click to Explore My Work!</p>
          </Link>
        </div>

        <Foot />
      </div>
    )
  }
}

export default HomePage

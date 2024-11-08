import React from 'react'
import Nav from '../nav/nav.js'
import Footer from '../footer/Foot.js'
import './aboutMe.css'

class AboutMePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div>
        <Nav />

        <div className='page-container'>
          <div className='content-container'>
            <div className='left-content'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://drive.google.com/file/d/1p0xMnyVRq__11Wze9jk9HE05YNU3ChrW/view?usp=sharing'
                id='dcv'
              >
                <p>Download CV</p>
              </a>
              <br />
              <p style={{color:'hotpink'}}>
                Hi, This is Susanna
              </p>
              {/* 
              <Icon name='heart' size='huge' color='pink'  /> */}
            </div>

            <div className='right-content'>
              {/* <p>
                <strong>About Me</strong>
              </p>
              <br /> */}
              <p>
                I&rsquo;m an aspiring innovator at the crossroads of fashion,
                technology, and sustainability. My journey from the vibrant
                landscapes of China to the dynamic streets of New York has been
                one of constant exploration, learning, and creation. With a
                passion deeply rooted in both the rich tapestry of traditional
                Chinese culture and the boundless possibilities of modern
                technology, I&apos;ve dedicated myself to reimagining how we
                interact with the world around us.
              </p>
              <br />
              <p>
                My academic path began in the realm of electronic arts, where I
                first ventured into the world of wearable technology in a
                makerspace in Chengdu. This experience ignited a passion for
                integrating technology with everyday life, leading me to Parsons
                School of Design. Here, my focus has expanded into Design and
                Technology, with a special interest in human-computer
                interaction (HCI) and the ways we can make technology more
                intuitive, ergonomic, and, importantly, sustainable.
              </p>
              <p>
                In 2019, inspired by the principles of sharing and
                sustainability that I grew up with, I founded SHEYOU, a fashion
                sharing platform aimed at revolutionizing how we view and
                consume fashion. SHEYOU is not just a business venture;
                it&apos;s a manifestation of my belief in a circular economy and
                a testament to the potential of technology to foster community,
                sustainability, and innovation in fashion. Through the platform,
                I aspire to make the old ways cool again, advocating for shared
                use over ownership, and environmental consciousness over
                convenience.
              </p>
              <br />
              <p>
                My works, from the traditional &quot;Buyao&quot; inspired fiber
                optic headdress to the practical air mouse glove and beyond,
                reflect a dedication to blending aesthetics with utility,
                tradition with innovation. Each project is a step towards a
                future where technology enhances our lives seamlessly, where
                fashion is sustainable, and where our interactions with the
                digital world are as natural as they are meaningful.
              </p>
              <br />
              <p>
                As I continue to build upon my experiences, my aim is to
                contribute positively to our global community&mdash;creating
                wearable technology that alleviates the strain of modern life
                and using coding to promote practices that honor our planet. I
                believe that by bridging the gap between disparate worlds, we
                can unlock new possibilities for a better future.
              </p>
              <br />
              <p>Welcome to my journey.</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default AboutMePage

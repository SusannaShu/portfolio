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
                href='https://drive.google.com/file/d/1tDGSoWj5kg74W93qeinzkC5q1Sy_yHv6/view?usp=sharing'
                id='dcv'
              >
                <p>CV</p>
              </a>
              <br />
              <p style={{ color: 'hotpink' }}>Hi, This is Susanna</p>
              {/* 
              <Icon name='heart' size='huge' color='pink'  /> */}
            </div>

            <div className='right-content'>
              {/* <p>
                <strong>About Me</strong>
              </p>
              <br /> */}
              <p>
                I&rsquo;m a multidisciplinary creative technologist with a
                passion for fashion. With a strong foundation in wearables and
                software development, I&apos;ve worked on projects like
                AI-powered smart glasses for language learning and a
                next-generation fashion platform.
              </p>
              <br />
              <p>
                My journey spans from creating arts to making engineering
                prototypes—such as a fiber optic headdress and air mouse gloves.
                As both a designer and a coder, I specialize in leveraging
                Javascript, Python, and UX/UI frameworks to build intuitive,
                impactful user experiences.
              </p>
              <p>
                I also bring experience and connections from renowned
                organizations like Chanel and Parsons School of Design, where I
                honed my skills in business strategy, marketing research, and
                problem-solving. From Chengdu to New York to Paris, I thrive in
                fast-paced, innovative environments and aim to build the future
                by merging fashion and technology.
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

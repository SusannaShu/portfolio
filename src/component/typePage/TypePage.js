import React from 'react'
import './style.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


class TypePage extends React.Component {
  componentDidMount () {
    window.scrollTo(0, 0)

    
  }
  render () {

    gsap.to(".intro-text", {
      scrollTrigger:".intro-text",
      x: 20
    });
    
    return (
      <div className='loli-bg'>
        <body>
          <div class='container'>
            <div class='color-container'>
              <div class='left-container'></div>
              <div class='right-container'></div>
            </div>

            <div class='background-container'></div>

            <a href='./pages/FahsionArt.html'>
              <div class='content-container text1'>Fashion Art</div>
            </a>

            <a href='./pages/BusinessTech.html'>
              <div class='content-container text2'>Business Tech</div>
            </a>
          </div>

        </body>
      </div>
    )
  }
}

export default TypePage

import React from 'react';
import axios from 'axios';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Loading from '../loader/Loading.js';
import Nav from '../nav/nav.js';
import Footer from '../footer/Foot.js';
import './drawing.css';

class WorkContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    axios('https://sheyou-backend.herokuapp.com/art2d')
      .then((res) => {
        this.setState({ items: res.data, loading: false }, () => {
console.log(this.state.items)
          this.applyImageAnimations(this.state.items);
        });
      })
      .catch((error) => {
        console.error('Something went wrong:', error);
        this.setState({ loading: false });
      });
  }

  applyImageAnimations(pictures) {
    gsap.registerPlugin(ScrollTrigger);

    let getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);

    pictures.forEach((item, i) => {
      let section = document.querySelector(`#section-${i}`); // Assign IDs to sections
      if (section) {
        section.style.backgroundImage = `url(${item.picture[0].url})`; // Adjust based on your data structure

        gsap.fromTo(
          section,
          {
            backgroundPosition: () => (i ? `50% ${-window.innerHeight * getRatio(section)}px` : '50% 0px'),
          },
          {
            backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: () => (i ? 'top bottom' : 'top top'),
              end: 'bottom top',
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      }
    });
  }

  render() {
    const { items, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <div>
        <Nav />
        {items.map((item, index) => (
          <section key={index} id={`section-${index}`}>
            <div className="bg"></div>
            <h1>{item.name}</h1>
          </section>
        ))}
        <Footer />
      </div>
    );
  }
}

export default WorkContent;

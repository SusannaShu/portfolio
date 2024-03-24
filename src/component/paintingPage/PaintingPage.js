import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

 
const images = [
  {
    original: 'https://i.loli.net/2020/11/07/oSUw9ltFfZHkih2.jpg',
  },
  {
    original: 'https://i.loli.net/2020/11/07/t4cYrSD8VgdpUNb.jpg',
  },
 
  {
    original: 'https://i.loli.net/2020/11/07/TGteZgJwbxvRhyM.jpg',
  },
  {
    original: 'https://i.loli.net/2020/11/07/pFajVO1TYd3ZRq9.jpg',
  }, {
    original: 'https://i.loli.net/2020/11/07/9qaV5KNADHjG4ry.jpg',
  },
];
 
class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}
export default MyGallery
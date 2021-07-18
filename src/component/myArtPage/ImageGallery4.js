import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

 
const images = [
  {
    original: 'https://i.loli.net/2020/11/07/pV72DHfW1463uRI.jpg',
  },
  {
    original: 'https://i.loli.net/2020/11/07/JISguxkB61CY7Te.jpg',
  },

];
 
class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}
export default MyGallery
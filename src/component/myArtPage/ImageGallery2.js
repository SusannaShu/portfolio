import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

 
const images = [
  {
    original: 'https://i.loli.net/2020/11/07/CGyuVab2j1dk6tL.jpg',
  },
  {
    original: 'https://i.loli.net/2020/11/07/If24vKEbLCH8nQo.jpg',
  },
  {
    original: 'https://i.loli.net/2020/11/07/gv1isfdyr4Inxa3.jpg',
  },
  {
    original: 'https://i.loli.net/2020/11/07/wZWmz2o8VjfGdL6.jpg',
  },
  
];
 
class MyGallery2 extends React.Component {
  render() {
    return <ImageGallery items={images}/>;
  }
}
export default MyGallery2
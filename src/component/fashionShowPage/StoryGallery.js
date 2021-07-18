import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

 
const images = [
  {
    original: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3365358438,4208652564&fm=11&gp=0.jpg',
  },
  {
    original: 'https://i.loli.net/2020/11/14/db9oLyFVjgS2lsO.jpg',
  },
 
  {
    original: 'https://i.loli.net/2020/11/14/i8v5pH1NKayFPzn.jpg',
  },
  {
    original: 'https://img2.doubanio.com/view/group_topic/l/public/p243638243.webp',
  }, {
    original: 'https://i.loli.net/2020/11/14/4XEQawoJpfBqHxD.jpg',
  },
];
 
class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}
export default MyGallery
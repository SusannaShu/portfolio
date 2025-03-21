import React, { useEffect, useState } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import axios from 'axios';
import Loading from '../loader/Loading.js';
import Nav from '../nav/nav.js';
import Footer from '../footer/Foot.js';
import './workContent.css'; // Make sure to adjust your CSS for the gallery view
import { Icon, Embed } from 'semantic-ui-react';

function WorkDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [videoLink, setVideoLink] = useState(null);
  const [hasVideo, setHasVideo] = useState(null);
  const [photo, setPlaceholder] = useState(null);

  const history = useHistory();
  // Other component logic

  const goBackToWorkPage = () => {
    // Logic to navigate back and use the stored scroll position
    history.push('/Works'); // Adjust the path as necessary
  };
  useEffect(() => {
    axios
      .get(`https://sheyou-backend.herokuapp.com/portfolios/${id}`)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data);
          setItem(response.data.detail); 
          setPlaceholder(response.data.picture[0].url);
          setHasVideo(response.data.layout.hasVideo);
          setVideoLink(response.data.layout.videoLink);
          // Ensure this contains an array of image data
        } else {
          console.error('Something went wrong');
        }
      });
  }, [id]);

  if (!item) {
    return <Loading />;
  }

  return (
    <div>
      <Nav />
      <div className="back-to-work" onClick={goBackToWorkPage}>
        <Icon name='angle left' circular inverted color='pink' size='big'/>
      </div>
      {/* Gallery container */}
      <div className='gallery-container'>
        {item.map((item, index) => (
          <div key={index} className='gallery-item'>
            <img src={item.url} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </div>
      {hasVideo && (
       <Embed
       icon='right circle play'
         placeholder={photo}
         url={videoLink}
         style={{paddingTop:200}}
       />
      )}

      <Footer />
    </div>
  );
}

export default WorkDetail;
